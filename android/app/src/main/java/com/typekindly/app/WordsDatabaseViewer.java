package com.typekindly.app;

import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.os.Environment;
import android.util.Log;

import org.json.JSONArray;
import org.json.JSONObject;

import java.io.File;
import java.io.FileWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

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

    public Map<String, int[]> getDailyTagCounts() {
        SQLiteDatabase db = dbHelper.getReadableDatabase();
        Map<String, int[]> resultMap = new LinkedHashMap<>(); // Preserve order

        String query = "SELECT lw.date_logged, wd.tag, lw.frequency " +
                "FROM logged_words lw " +
                "JOIN word_dictionary wd ON lw.word = wd.word " +
                "ORDER BY lw.date_logged";

        Cursor cursor = db.rawQuery(query, null);

        if (cursor.moveToFirst()) {
            do {
                String date = cursor.getString(0);
                String tag = cursor.getString(1);
                int frequency = cursor.getInt(2);

                // Check if date exists, otherwise create a new count array
                if (!resultMap.containsKey(date)) {
                    resultMap.put(date, new int[3]);
                }

                // Get reference to the existing count array
                int[] counts = resultMap.get(date);

                // Update count based on tag
                switch (tag) {
                    case "Good":
                        counts[0] += frequency;
                        break;
                    case "Bad":
                        counts[1] += frequency;
                        break;
                    case "Neutral":
                        counts[2] += frequency;
                        break;
                }

            } while (cursor.moveToNext());
        }

        cursor.close();
        return resultMap;
    }

    public Map<String, Integer> getAllWordCount() {
        SQLiteDatabase db = dbHelper.getReadableDatabase();
        Map<String, Integer> wordFrequencies = new HashMap<>();
        String query = "SELECT word, SUM(frequency) AS total_frequency FROM logged_words GROUP BY word";

        Cursor cursor = db.rawQuery(query, null);
        while (cursor.moveToNext()) {
            String word = cursor.getString(0);
            int frequency = cursor.getInt(1);
            wordFrequencies.put(word, frequency);
        }
        cursor.close();

        return wordFrequencies;
    }

    public void exportData() {
        SQLiteDatabase db = dbHelper.getReadableDatabase();
        JSONObject databaseJson = new JSONObject();
        Log.v("Exporting Data", "Exporting Data...");

        try {
            JSONArray loggedWordsArray = new JSONArray();
            String query = "SELECT lw.word, lw.date_logged, lw.frequency, wd.tag, wd.language " +
                    "FROM logged_words lw " +
                    "JOIN word_dictionary wd ON lw.word = wd.word " +
                    "ORDER BY lw.date_logged";

            Cursor cursor = db.rawQuery(query, null);
            while (cursor.moveToNext()) {
                JSONObject wordObject = new JSONObject();
                wordObject.put("word", cursor.getString(0));
                wordObject.put("date_logged", cursor.getString(1));
                wordObject.put("frequency", cursor.getInt(2));
                wordObject.put("tag", cursor.getString(3));
                wordObject.put("language", cursor.getString(4));
                loggedWordsArray.put(wordObject);
            }
            cursor.close();

            databaseJson.put("logged_words", loggedWordsArray);

            saveJsonToFile(databaseJson);
        } catch (Exception e) {
            Log.e("Exporting Data", "Error exporting database", e);
        }

    }

    private void saveJsonToFile(JSONObject jsonObject) {
        try {
            File downloadsFolder = Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_DOWNLOADS);
            File file = new File(downloadsFolder, "logged_words.json");

            FileWriter writer = new FileWriter(file);
            writer.write(jsonObject.toString(4));
            writer.flush();
            writer.close();
            Log.v("Exporting Data", "Database exported to: " + file.getAbsolutePath());
        } catch (Exception e) {
            Log.e("Exporting Data", "Error saving JSON file", e);
        }
    }

}
