package com.typekindly.app;
import android.accessibilityservice.AccessibilityService;
import android.util.Log;
import android.view.accessibility.AccessibilityEvent;

import java.util.List;

// Note not optimized, just to show that the keylogger works
public class Keylogger extends AccessibilityService {

    private String previousText = "";
    private static final int MAX_BUFFER_SIZE = 1000; // Temporary
    private static final double RESET_THRESHOLD = 70.0;

    @Override
    public void onAccessibilityEvent(AccessibilityEvent event) {

        if (event.getEventType() == AccessibilityEvent.TYPE_VIEW_TEXT_CHANGED) {
            // Get the source text from the event
            List<CharSequence> capturedText = event.getText();

            String capturedString = cleanText(capturedText.toString());
            Log.d("Keylogger", "Current: " + capturedString);
            Log.d("Previous log", "Previous " + previousText);

            if(capturedText.toString().length() > MAX_BUFFER_SIZE) {
                return;
            }



            // Log words if reset
            if(isBufferReset(previousText, capturedString)){
                toLogWords(previousText);
                previousText = capturedString;
            }

            // Log words if there is a difference
//            toLogWords(delta);
//            String delta = getDifference(previousText, capturedString);
//            Log.d("delta", delta);

            previousText = capturedString;

        }
    }

    //new code added:
    private boolean isBufferReset(String oldText, String newText){
        Log.d("BufferReset", "old: " + oldText + " // new: " + newText);
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

    private String getDifference(String oldText, String newText){
        return newText.replace(oldText, "").trim();
    }


    private void toLogWords (String logwords) {
        Log.i("Logged String", logwords);
    }

    private String cleanText(String text){
        return text.toLowerCase().replaceAll("[^a-z \\n]", "");
    }

    //functions on processing keylogger thingy
    private String extractSelectedText(CharSequence fullText, int fromIndex, int toIndex) {
        // Check if indices are valid (within bounds)
        Log.v("idx from", Integer.toString(fromIndex));
        Log.v("idx to", Integer.toString(toIndex));
        if (fromIndex >= 0 && toIndex >= 0 && toIndex <= fullText.length()) {
            String returnval =  fullText.subSequence(fromIndex, toIndex).toString();
        }
        // Return an empty string if indices are invalid
        String returnval = "";
        Log.v("indexxxx", returnval);
        return returnval;
    }

    public void processString(String input){
        String[] arr = input.split(" ");
        String last = arr[arr.length - 2];
        Log.i("Process Log", last);
    }

    @Override
    public void onInterrupt() {
        // Handle interruption
    }
}