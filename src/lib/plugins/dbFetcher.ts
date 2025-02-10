import { databaseResult } from '../../routes/stores.ts';
import { KeyloggerPlugin } from './keyloggerPlugin.ts';
import type { DailyStats } from './keyloggerPlugin.ts';

// for each date, count(good, bad, neutral, total)
// for each word in dict, return count() regardless of date

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
        const result = dailyStats.map(log =>
            `${log.date},${log.good},${log.bad},${log.neutral}`
        ).join('\n');

        databaseResult.set(result);
        console.log("Fetch complete:", result);
    } catch (error) {
        console.error("Error fetching daily stats:", error);
    }
};
