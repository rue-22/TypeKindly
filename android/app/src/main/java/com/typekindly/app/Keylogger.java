package com.typekindly.app;
import android.accessibilityservice.AccessibilityService;
import android.util.Log;
import android.view.accessibility.AccessibilityEvent;

import java.util.List;

// Note not optimized, just to show that the keylogger works
public class Keylogger extends AccessibilityService {
    @Override
    public void onAccessibilityEvent(AccessibilityEvent event) {

        if (event.getEventType() == AccessibilityEvent.TYPE_VIEW_TEXT_CHANGED) {
            int fromIndex = event.getFromIndex();
            int toIndex = event.getToIndex();

            // Get the source text from the event
            List<CharSequence> textList = event.getText();
            if (!textList.isEmpty()) {
                CharSequence fullText = textList.get(0); // The full text content
                String selectedText = extractSelectedText(fullText, fromIndex, toIndex);

                Log.wtf("Accessibility xd", "Selected text: " + selectedText);
            } else {
                Log.wtf("Accessibility xxd", "No text found in the event.");
            }

            String rawinput = event.getText().toString();
            String capturedText = rawinput ;
            Log.i("Keylogger", capturedText);
            Log.i("Debug", String.valueOf(capturedText.charAt(capturedText.length() -2)));
            if(capturedText.charAt(capturedText.length() -2) == ' ') {
                Log.i("To Process", capturedText);
                processString(capturedText);

            }
            // Save or process the captured text
        }
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