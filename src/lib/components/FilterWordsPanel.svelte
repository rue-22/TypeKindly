<script lang="ts">
	import type { Word } from '$lib/dictionary/words';
	import WordCard from '$lib/components/WordCard.svelte';
	// import FilterPanel from '$lib/components/FilterPanel.svelte';

	interface Props {
		tagFilters: string[];
		langFilters: string[];
		cardsInfo: Word[];
	}

	const { langFilters, tagFilters, cardsInfo }: Props = $props();
</script>

<!-- <FilterPanel filter={tagFilter}/> -->
<!-- <FilterPanel filter={langFilter}/> -->
<div class="sticky top-[4.1rem] z-10 w-full bg-tkl-background dark:bg-tkd-background">
	<div
		class="dark:bg-white flex flex-row justify-center rounded-xl py-2 text-tkl-text dark:text-tkd-text"
	>
		<ul class="flex list-none flex-row gap-3">
			{#each tagFilters as tagFilter}
				<li>
					<button class="rounded-lg bg-tkl-surface px-4 py-2 text-center dark:bg-tkd-surface"
						>{tagFilter}</button
					>
				</li>
			{/each}
		</ul>
	</div>

	<div
		class="dark:bg-white flex flex-row justify-center rounded-xl py-2 text-tkl-text dark:text-tkd-text"
	>
		<ul class="flex list-none flex-row gap-3">
			{#each langFilters as langFilter}
				<li>
					<button class="rounded-lg bg-tkl-surface px-4 py-2 text-center dark:bg-tkd-surface"
						>{langFilter}</button
					>
				</li>
			{/each}
		</ul>
	</div>
</div>

<main class="flex flex-col gap-4">
	<div class="flex flex-col">
		{#each cardsInfo as word}
			<WordCard {...word} />
		{/each}
	</div>
</main>
