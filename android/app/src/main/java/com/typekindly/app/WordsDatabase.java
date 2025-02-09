package com.typekindly.app;

import android.content.Context;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;

public class WordsDatabase extends SQLiteOpenHelper {
    private static final String DATABASE_NAME = "TypeKindly_DB.db";
    private static final int DATABASE_VERSION = 2;

    public WordsDatabase(Context context) {
        super(context, DATABASE_NAME, null, DATABASE_VERSION);
    }

    @Override
    public void onCreate(SQLiteDatabase db) {
        String createDictionaryTable = "CREATE TABLE word_dictionary (" +
                "word TEXT PRIMARY KEY, " +
                "tag TEXT CHECK(tag IN ('Good', 'Bad', 'Neutral')) NOT NULL, " +
                "language TEXT NOT NULL" +
                ")";
        db.execSQL(createDictionaryTable);

        String createLoggedTable = "CREATE TABLE logged_words (" +
                "word TEXT NOT NULL, " +
                "date_logged TEXT NOT NULL, " +
                "frequency INTEGER DEFAULT 1, " +
                "UNIQUE(word, date_logged)," +
                "PRIMARY KEY (word, date_logged), " +
                "FOREIGN KEY (word) REFERENCES word_dictionary(word))";
        db.execSQL(createLoggedTable);
    }

    @Override
    public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {
        db.execSQL("DROP TABLE IF EXISTS logged_words");
        db.execSQL("DROP TABLE IF EXISTS word_dictionary");
        onCreate(db);
    }
}
