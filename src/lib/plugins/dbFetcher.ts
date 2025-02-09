
import { writable } from 'svelte/store';
import { KeyloggerPlugin } from './keyloggerplugin';
import type { DailyStats } from './keyloggerplugin';


// Call this function to fetch from DB

export const haha = writable<string>("test")


export const fetchDaily = async () => {
    if (!KeyloggerPlugin) {
        console.error("KeyloggerPlugin is not available");
        return;
    }

    try {
        console.log("Fetching data...");
        const data = await KeyloggerPlugin.fetchDailyStats();
        
        if (!data || !data.dailyStats) {
            console.error("Invalid response from plugin");
            return;
        }

        // Ensure proper typing
        const dailyStats: DailyStats[] = data.dailyStats;

        // Convert data into a readable string
        let result = dailyStats.map(log =>
            `Date: ${log.date}, Good: ${log.good}, Bad: ${log.bad}, Neutral: ${log.neutral}`
        ).join("\n");

        haha.set(result);
        console.log("Fetch complete:", result);
        
    } catch (error) {
        console.error("Error fetching daily stats:", error);
    }
};