import { Capacitor, registerPlugin, } from '@capacitor/core';

export interface DailyStats {
    date: string;  
    good: number;  
    bad: number;   
    neutral: number; 
}

export interface KeyLoggerPlugin {  
    /*
        Returns each data logged in this format: (Refer to WordsDatabaseViewer.java)
        word + "," + tag + "," + language + "," + date + "," + count
    */
    fetchData(): Promise<{ allLoggedData: Array<string> }>;
    fetchDailyStats(): Promise<{ dailyStats: DailyStats[] }>
    fetchAllWordCount(): Promise<Record<string, number>> 
    exportData(): Promise<{ isSuccess: boolean }>
}

// Only register the plugin for native platforms
export const KeyloggerPlugin = Capacitor.getPlatform() !== 'web' 
    ? registerPlugin<KeyLoggerPlugin>('KeyloggerPlugin') 
    : null;
