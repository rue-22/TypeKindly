package com.typekindly.app;

import android.util.Log;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import org.json.JSONArray;
import org.json.JSONObject;

import java.util.List;
import java.util.Map;


@CapacitorPlugin(name = "KeyloggerPlugin")
public class KeyloggerPlugin extends Plugin{
    @PluginMethod()
    public void fetchData(PluginCall call){
        Log.v("Plugin Method", "Fetching data from frontend");

        WordsDatabaseViewer dataViewer = new WordsDatabaseViewer(getContext());
        List<String> rawData = dataViewer.getAllLogs();

        JSONArray jsonLoggedData = new JSONArray(rawData);

        JSObject data = new JSObject();
        data.put("allLoggedData", jsonLoggedData);
        call.resolve(data);

        Log.v("Plugin Method", "Fetching data success!");
    }

    @PluginMethod()
    public void fetchDailyStats(PluginCall call){
        Log.v("Plugin Methods", "Daily Stats: Fetching data from frontend");

        WordsDatabaseViewer dataViewer = new WordsDatabaseViewer(getContext());
        Map<String, int[]> rawData = dataViewer.getDailyTagCounts();

        JSONArray jsonArray = new JSONArray();

        for (Map.Entry<String, int[]> entry : rawData.entrySet()) {
            String date = entry.getKey();
            int[] counts = entry.getValue();

            if (counts.length < 3) {
                Log.e("Plugin Methods", "Daily Stats: Invalid data for date: " + date);
                continue;
            }

            int goodCount = counts[0];
            int badCount = counts[1];
            int neutralCount = counts[2];

            try {
                JSONObject jsonObject = new JSONObject();
                jsonObject.put("date", date);
                jsonObject.put("good", goodCount);
                jsonObject.put("bad", badCount);
                jsonObject.put("neutral", neutralCount);

                jsonArray.put(jsonObject);
            } catch (Exception e) {
                Log.e("Plugin Methods", "Daily Stats: Error creating JSON", e);
            }
        }

        JSObject data = new JSObject();
        data.put("dailyStats", jsonArray);
        call.resolve(data);

        Log.v("Plugin Method", "Daily Stats: Fetching data success!");
    }

    @PluginMethod()
    public void fetchAllWordCount(PluginCall call){
        Log.v("Plugin Methods", "Overall Frequency: Fetching data from frontend");

        WordsDatabaseViewer dataViewer = new WordsDatabaseViewer(getContext());
        Map<String, Integer> rawData = dataViewer.getAllWordCount();

        JSObject data = new JSObject();

        for (Map.Entry<String, Integer> entry : rawData.entrySet()) {
            data.put(entry.getKey(), entry.getValue());
//            Log.i("Plugin Method", entry.getKey() + ": " + entry.getValue().toString());
        }

        call.resolve(data);

        Log.v("Plugin Method", "Overall Frequency: Fetching data success!");
    }
}
