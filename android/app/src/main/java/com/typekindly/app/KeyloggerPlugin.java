package com.typekindly.app;

import android.util.Log;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import org.json.JSONArray;

import java.util.List;


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
}
