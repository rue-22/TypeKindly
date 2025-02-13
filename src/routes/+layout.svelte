<script lang="ts">
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { fetchDaily, fetchAllWords } from '$lib/plugins/dbFetcher';
	import '../app.css';
	let { children } = $props();

	import MenuChoice from '../routes/MenuChoice.svelte';

	let lastClicked = writable('home');
	setContext('lastClicked', lastClicked);
</script>

<main class="flex min-h-screen flex-col bg-tkl-background pb-[4.2rem] dark:bg-tkd-background">
	<header
		class="sticky top-0 z-10 w-full border-b border-b-tkd-background bg-tkl-surface py-[0.8rem] text-center text-4xl font-[Open_Sans] font-bold text-tkl-text dark:bg-tkd-surface dark:text-tkd-text"
	>
		<h1>TypeKindly</h1>
	</header>

	{@render children()}

	<navbar
		class="fixed bottom-0 flex w-full basis-auto flex-row justify-evenly border-t border-t-tkd-background bg-tkl-surface py-[0.5rem] text-tkl-text dark:bg-tkd-surface dark:text-tkd-text"
	>
		<MenuChoice menuName="home" />
		<MenuChoice menuName="records" />
		<MenuChoice menuName="dictionary" />
		<MenuChoice menuName="settings" />
	</navbar>
</main>
