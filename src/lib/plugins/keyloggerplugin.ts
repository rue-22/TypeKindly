import { Capacitor, registerPlugin, } from '@capacitor/core';

export interface KeyLoggerPlugin {  
    /*
        Returns each data logged in this format: (Refer to WordsDatabaseViewer.java)
        word + "," + tag + "," + language + "," + date + "," + count
    */
    fetchData(): Promise<{ allLoggedData: Array<string> }>;
}

// Only register the plugin for native platforms
const KeyloggerPlugin = Capacitor.getPlatform() !== 'web' 
    ? registerPlugin<KeyLoggerPlugin>('KeyloggerPlugin') 
    : null;

export default KeyloggerPlugin;

