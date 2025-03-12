import { writable } from 'svelte/store';

export const isExplicitOn = writable<bool>(false)
export const databaseResult = writable<string>('Empty DB Result')
export const databaseWordCount = writable<string>('Nothing fetch yet')
export const latestTag = writable<string>('Good')
export const latestLang = writable<string>('All')
export const latestSort = writable<string>('Alphabetical')
export const isFetchSuccess = writable(false);