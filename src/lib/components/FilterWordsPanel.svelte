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

	let currLang = $state('All');
	let currTag = $state('All');

	let words: Word[] = $state([]);

	$effect(() => {
		words = cardsInfo.filter((item) => {
			const matchesLang = currLang === 'All' || item.lang === currLang;
			const matchesTag = currTag === 'All' || item.tag === currTag;
			return matchesLang && matchesTag;
		});
	});
</script>

<!-- <FilterPanel filter={tagFilter}/> -->
<!-- <FilterPanel filter={langFilter}/> -->
<div class="sticky top-[4.1rem] z-10 w-full bg-tkl-background dark:bg-tkd-background">
	<div class="flex flex-row justify-center rounded-xl py-2 text-tkl-text dark:text-tkd-text">
		<ul class="flex list-none flex-row gap-3">
			{#each tagFilters as tagFilter}
				<li>
					<button
						class="{tagFilter === currTag
							? 'border-[0.5px] bg-tkd-focused'
							: 'bg-tkd-surface'} rounded-lg px-4 py-2 text-center"
						onclick={() => (currTag = tagFilter)}>{tagFilter}</button
					>
				</li>
			{/each}
		</ul>
	</div>

	<div class="flex flex-row justify-center rounded-xl py-2 text-tkl-text dark:text-tkd-text">
		<ul class="flex list-none flex-row gap-3">
			{#each langFilters as langFilter}
				<li>
					<button
						class="{langFilter === currLang
							? 'border-[0.5px] bg-tkd-focused'
							: 'bg-tkd-surface'} rounded-lg px-4 py-2 text-center"
						onclick={() => (currLang = langFilter)}>{langFilter}</button
					>
				</li>
			{/each}
		</ul>
	</div>
</div>

<main class="flex flex-col gap-4">
	<div class="flex flex-col">
		{#each words as word}
			<WordCard {...word} />
		{/each}
	</div>
</main>
