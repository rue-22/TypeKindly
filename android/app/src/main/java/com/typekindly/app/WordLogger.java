package com.typekindly.app;

import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteStatement;
import android.util.Log;


import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

public class WordLogger {
    private final WordsDatabase dbHelper;

    public WordLogger(Context context) {
        this.dbHelper = new WordsDatabase(context);
    }

    public void logWordToDataBase(String word) {
        SQLiteDatabase db = dbHelper.getWritableDatabase();
        String currentDate = new SimpleDateFormat("yyyy-MM-dd", Locale.getDefault()).format(new Date());

        String checkQuery = "SELECT tag FROM word_dictionary WHERE word = ?";
        Cursor cursor = db.rawQuery(checkQuery, new String[]{word.toLowerCase()});
        if (cursor.moveToFirst()) {
            cursor.close();
            Log.i("Word Logger", "Wordlog Success: " + word);
            // Insert or update log
            String logQuery = "INSERT INTO logged_words (word, date_logged, frequency) " +
                    "VALUES (?, ?, 1) " +
                    "ON CONFLICT(word, date_logged) DO UPDATE SET frequency = frequency + 1";

            SQLiteStatement stmt = db.compileStatement(logQuery);
            stmt.bindString(1, word.toLowerCase());
            stmt.bindString(2, currentDate);
            stmt.execute();
        } else {
            cursor.close();
        }
    }
}
