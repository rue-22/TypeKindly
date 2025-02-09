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

/* MUST READ: sample code, kahit sa startstream na function lang basahin mo, just ask Ligs pag may questions 

    import { Capacitor } from '@capacitor/core';
    import { writable } from 'svelte/store';
    import KeyloggerPlugin from './keyloggerplugin';
    
    export const testest = Capacitor.getPlatform() !== 'web'  
        ? writable<string>("Kung ito nakikita mo walang nangnyayare")
        : writable<string>("WEB PALA TO");
    
    //basta ito yung pinapalitan hahaha
    export const test11 = writable<string>("hahahahaha")
    

    //Call via button
    export const startStream = async () => {
            if (KeyloggerPlugin) {
                console.log("Fetch data");
                const data = await KeyloggerPlugin.fetchData()
                let result = ""
                for (let log of data.allLoggedData) {
                    result = result + log + "/ \n"
                }
                test11.set(result); 
                }
        };
*/



