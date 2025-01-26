<script lang="ts">
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { isDarkTheme } from '../stores';
	import '../app.css';
	let { children } = $props();

	import MenuChoice from '../routes/MenuChoice.svelte';

	let lastClicked = writable('home');
	setContext('lastClicked', lastClicked);
</script>

<main class="flex min-h-screen flex-col bg-tkl-background pb-[3rem] dark:bg-tkd-background">
	<header
		class="sticky top-0 w-full bg-tkl-surface py-[0.8rem] text-center text-4xl text-tkl-text dark:bg-tkd-surface dark:text-tkd-text"
	>
		<h1>TypeKindly</h1>
	</header>

	{@render children()}

	<navbar
		class="bg-black fixed bottom-0 flex w-full basis-auto flex-row justify-evenly bg-tkl-surface py-[0.5rem] text-tkl-text dark:bg-tkd-surface dark:text-tkd-text"
	>
		<MenuChoice menuName="home" />
		<MenuChoice menuName="records" />
		<MenuChoice menuName="dictionary" />
		<MenuChoice menuName="settings" />
	</navbar>

	<!-- <footer class="min-h-5em sticky bottom-0 bg-black text-white">
		<p>This is the sticky footer.</p>
	</footer> -->
</main>
