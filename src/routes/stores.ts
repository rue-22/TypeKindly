import { writable } from 'svelte/store';

export const isExplicitOn = writable<bool>(false)
export const databaseResult = writable<string>("Empty DB Result")
