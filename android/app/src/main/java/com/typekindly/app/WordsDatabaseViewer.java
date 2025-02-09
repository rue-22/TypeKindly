package com.typekindly.app;

import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.util.Log;

import java.util.ArrayList;
import java.util.List;

public class WordsDatabaseViewer {
    private final WordsDatabase dbHelper;
    public WordsDatabaseViewer(Context context) {
        this.dbHelper = new WordsDatabase(context);
    }

    public List<String> getAllLogs() {
        List<String> logs = new ArrayList<>();
        SQLiteDatabase db = dbHelper.getReadableDatabase();
        Cursor cursor = null;
        Log.v("Database Viewer", "Fetching Data...");
        try {
            String query = "SELECT lw.word, wd.tag, wd.language, lw.date_logged, lw.frequency " +
                    "FROM logged_words lw " +
                    "JOIN word_dictionary wd ON lw.word = wd.word " +
                    "ORDER BY lw.date_logged DESC";

            cursor = db.rawQuery(query, null);

            while (cursor.moveToNext()) {
                String word = cursor.getString(0);
                String tag = cursor.getString(1);
                String language = cursor.getString(2);
                String date = cursor.getString(3);
                int count = cursor.getInt(4);
                logs.add(word + "," + tag + "," + language + "," + date + "," + count);
            }
        } catch (Exception e) {
            Log.e("DataViewer", "Error fetching all logs. Msg: " + e.getMessage());
        } finally {
            if (cursor != null) cursor.close();  // Ensure cursor is always closed
        }
        return logs;
    }
}
