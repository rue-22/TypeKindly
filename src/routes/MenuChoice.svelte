<script lang="ts">
	import { getContext } from 'svelte';
	import { type Writable } from 'svelte/store';
	import Book from '$lib/assets/Book.svelte';
	import Calendar from '$lib/assets/Calendar.svelte';
	import Home from '$lib/assets/Home.svelte';
	import Settings from '$lib/assets/Settings.svelte';

	let { menuName } = $props();
	const lastClicked: Writable<string> = getContext('lastClicked');
</script>

<div class="font-medium">
	<a
		href={menuName === 'home' ? '/' : `/${menuName}`}
		class="{$lastClicked === menuName
			? 'text-tkd-primary'
			: ''} align-center grow-1 text-sm} flex h-full flex-1 flex-col items-center justify-center rounded-xl text-center"
		onclick={() => lastClicked.set(menuName)}
	>
		{#if menuName == 'home'}
			<Home />
		{:else if menuName == 'records'}
			<Calendar />
		{:else if menuName == 'dictionary'}
			<Book />
		{:else if menuName == 'settings'}
			<Settings />
		{/if}

		<p>{menuName.charAt(0).toUpperCase() + menuName.slice(1)}</p>
	</a>
</div>
