import { databaseResult } from '../../routes/stores.ts'
import KeyloggerPlugin from './keyloggerPlugin.ts';

// Call this function to fetch from DB
export const fetchDataFromDb = async () => {
    if (KeyloggerPlugin) {
        console.log("Fetch data");
        const data = await KeyloggerPlugin.fetchData()
        let result = ""
        for (const log of data.allLoggedData) {
            result = result + log + "/ \n"
        }
        databaseResult.set(result); 
        }
};
