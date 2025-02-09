package com.typekindly.app;

import android.database.sqlite.SQLiteDatabase;
import android.os.Bundle;
import android.os.Handler;
import android.util.Log;

import com.getcapacitor.BridgeActivity;

import java.util.List;

public class MainActivity extends BridgeActivity {
    // Temporary
    private WordsDatabaseViewer dataViewer;
    private Handler handler = new Handler();
    private Runnable runnable;

    @Override
    public void onCreate(Bundle bundle) {
        registerPlugin(KeyloggerPlugin.class);
        super.onCreate(bundle);


        try (WordsDatabase dbHelper = new WordsDatabase(this);
             SQLiteDatabase db = dbHelper.getWritableDatabase()) {
            DictionaryManager dictionaryManager = new DictionaryManager(this);
            dictionaryManager.SyncWordsJSONToDB(this);
        } catch (Exception e) {
            Log.e("Main Activity", "Initialize Databased failed. Msg: " + e.getMessage());
        }

        // Temporary
        // Define the task to run every 5 seconds
        dataViewer = new WordsDatabaseViewer(this);
        runnable = new Runnable() {
            @Override
            public void run() {
                try {
                    fetchAndLogWords();
                }
                catch (Exception e){
                    Log.e("Test View", "no database yet Msg: " + e.getMessage());
                }
                handler.postDelayed(this, 5000); // Repeat every 5 seconds
            }
        };

//        handler.post(runnable); // Start the loop
    }
    private void fetchAndLogWords() {

        List<String> words = dataViewer.getAllLogs();

        for (String word : words) {
            Log.d("DB_LOG", word);
        }
    }
    @Override
    public void onDestroy() {
        super.onDestroy();
        handler.removeCallbacks(runnable); // Stop loop when activity is destroyed
    }
}
