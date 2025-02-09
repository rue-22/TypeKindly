package com.typekindly.app;

import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteStatement;
import android.util.Log;
import org.json.JSONArray;
import org.json.JSONObject;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.util.HashSet;
import java.util.Set;


public class DictionaryManager {
    private final WordsDatabase dbHelper;

    public DictionaryManager(Context context) {
        this.dbHelper = new WordsDatabase(context);
    }

    public void SyncWordsJSONToDB(Context context) {
        SQLiteDatabase db = dbHelper.getWritableDatabase();
        db.beginTransaction();

        try {
            Log.i("Dictionary Manager", "Adding Dictionary words...");

            InputStream is = context.getAssets().open("words.json");

            Set<String> existingWords = new HashSet<>();
            try (Cursor cursor = db.rawQuery("SELECT word FROM word_dictionary", null)) {
                while (cursor.moveToNext()) {
                    existingWords.add(cursor.getString(0).toLowerCase());
                }
            }

            int size = is.available();
            byte[] buffer = new byte[size];
            is.read(buffer);

            String json = new String(buffer, StandardCharsets.UTF_8);

            JSONArray jsonArray = new JSONArray(json);
            String query = "INSERT INTO word_dictionary (word, tag, language) VALUES (?, ?, ?) " +
                    "ON CONFLICT(word) DO UPDATE SET tag = excluded.tag, language = excluded.language";

            Set<String> newWords = new HashSet<>();

            SQLiteStatement stmt = db.compileStatement(query);

            for (int i = 0; i < jsonArray.length(); i++) {
                JSONObject wordObject = jsonArray.getJSONObject(i);

                String word = wordObject.optString("word", "").toLowerCase();
                String tag = wordObject.optString("tag", "Neutral");
                String language = wordObject.optString("lang", "Unknown");

                if (!word.isEmpty()) {
                    newWords.add(word);
                    stmt.bindString(1, word);
                    stmt.bindString(2, tag);
                    stmt.bindString(3, language);
                    stmt.execute();
                }
            }

            existingWords.removeAll(newWords);
            if (!existingWords.isEmpty()) {
                String deleteQuery = "DELETE FROM word_dictionary WHERE word = ?";
                try (SQLiteStatement deleteStmt = db.compileStatement(deleteQuery)) {
                    for (String wordToRemove : existingWords) {
                        deleteStmt.bindString(1, wordToRemove);
                        deleteStmt.execute();
                        Log.i("Dictionary Manager", "Removed: " + wordToRemove);
                    }
                }
            }
            Log.i("Dictionary Manager", "Adding Dictionary words Success!");
            db.setTransactionSuccessful();
        } catch (Exception e) {
            Log.e("Dictionary Manager","Initializing Database dictionary table failed. Msg: " + e.getMessage());
        } finally {
            db.endTransaction();
        }
    }
}
