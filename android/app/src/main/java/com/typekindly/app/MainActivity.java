package com.typekindly.app;

import android.database.sqlite.SQLiteDatabase;
import android.os.Bundle;
import android.util.Log;

import com.getcapacitor.BridgeActivity;


public class MainActivity extends BridgeActivity {
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
    }


    @Override
    public void onDestroy() {
        super.onDestroy();
    }
}
