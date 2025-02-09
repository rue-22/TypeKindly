package com.typekindly.app;

import android.content.Context;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteStatement;
import android.util.Log;
import org.json.JSONArray;
import org.json.JSONObject;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;


public class DictionaryManager {
    private final WordsDatabase dbHelper;

    public DictionaryManager(Context context) {
        this.dbHelper = new WordsDatabase(context);
    }

    public void insertWordsToDB(Context context) {
        SQLiteDatabase db = dbHelper.getWritableDatabase();
        db.beginTransaction();

        try {
            InputStream is = context.getAssets().open("words.json");
            int size = is.available();
            byte[] buffer = new byte[size];
            is.read(buffer);
            is.close();
            String json = new String(buffer, StandardCharsets.UTF_8);

            JSONArray jsonArray = new JSONArray(json);

            String query = "INSERT INTO word_dictionary (word, tag, language) VALUES (?, ?, ?) " +
                    "ON CONFLICT(word) DO UPDATE SET tag = excluded.tag, language = excluded.language";
            SQLiteStatement stmt = db.compileStatement(query);

            for (int i = 0; i < jsonArray.length(); i++) {
                JSONObject wordObject = jsonArray.getJSONObject(i);

                // Extract fields safely
                String word = wordObject.optString("word", "").toLowerCase();
                String tag = wordObject.optString("tag", "Unknown");
                String language = wordObject.optString("lang", "Unknown");

                if (!word.isEmpty()) {  // Ensure word is not empty before inserting
                    stmt.bindString(1, word);
                    stmt.bindString(2, tag);
                    stmt.bindString(3, language);
                    stmt.execute();
                }
            }
            db.setTransactionSuccessful();
        } catch (Exception e) {
            Log.e("Dictionary Manager","Initializing Database dictionary table failed");
        } finally {
            db.endTransaction();
        }
    }
}
