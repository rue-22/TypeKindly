<script lang="ts">
	import { Select, Label } from 'flowbite-svelte';
	import type { Word } from '$lib/dictionary/words';
	import { isExplicitOn } from '../../routes/stores';
	import { databaseWordCount } from '../../routes/stores';
	import WordCard from '$lib/components/WordCard.svelte';

	let tempBool = $isExplicitOn;
	// for filter
	let currTag = $state('All');
	if (!tempBool) {
		currTag = 'Good';
	}
	let currLang = $state('All');

	// for sorter
	let currSortParam = $state('Alphabetical');
	const sortParams = [
		{ value: 'Alphabetical', name: 'Alphabetical' },
		{ value: 'Count', name: 'Count' }
	];

	interface Props {
		tagFilters: { value: string; name: string }[];
		langFilters: { value: string; name: string }[];
		cardsInfo: Word[];
	}
	const { langFilters, tagFilters, cardsInfo }: Props = $props();

	interface WordsWithCount {
		word: string;
		tag: string;
		lang: string;
		count: number;
	}
	interface WordTally {
		word: string;
		count: number;
	}
	let wordsInDict: Word[] = $state([]);
	let wordsWithCount: WordsWithCount[] = $state([]);
	let dbWordCount: WordTally[] = $state([]);
	let res = $state($databaseWordCount);

	$effect(() => {
		// filter what words will be seen in the dictionary
		const newWordsInDict = cardsInfo.filter((item) => {
			const matchesLang = currLang === 'All' || item.lang === currLang;
			const matchesTag = currTag === 'All' || item.tag === currTag;
			return matchesLang && matchesTag;
		});
		if (JSON.stringify(newWordsInDict) !== JSON.stringify(wordsInDict)) {
			wordsInDict = newWordsInDict;
		}
		// fetch word count in dictionary
		res = $databaseWordCount;
		const indivWords = res.split('\n');
		const newDbWordCount = indivWords.map((word) => {
			const [w, count] = word.split(' ');
			return {
				word: w,
				count: parseInt(count) || 0
			};
		});
		if (
			newDbWordCount.length !== dbWordCount.length ||
			!newDbWordCount.every(
				(item, index) =>
					item.word === dbWordCount[index]?.word && item.count === dbWordCount[index]?.count
			)
		) {
			dbWordCount = newDbWordCount;
		}

		// build list of words with count
		const newWordsWithCount = wordsInDict.map((w) => {
			const match = newDbWordCount.find((wCount) => wCount.word === w.word);
			return {
				word: w.word,
				lang: w.lang,
				tag: w.tag,
				count: match ? match.count : 0
			};
		});

		const sortedWordsWithCount = [...newWordsWithCount].sort((a, b) => {
			if (currSortParam === 'Count') {
				return b.count - a.count;
			} else {
				return a.word.localeCompare(b.word);
			}
		});
		if (
			sortedWordsWithCount.length !== wordsWithCount.length ||
			!sortedWordsWithCount.every(
				(item, index) =>
					item.word === wordsWithCount[index]?.word && item.count === wordsWithCount[index]?.count
			)
		) {
			wordsWithCount = sortedWordsWithCount;
		}
	});
</script>

<div
	class="sticky top-[4.1rem] z-10 flex w-screen flex-col items-center justify-center gap-1 bg-tkl-background dark:bg-tkd-background"
>
	<div class="flex w-full justify-around pt-2">
		<div class="flex w-2/5 flex-col gap-1">
			<Label for="tagFilter" class="text-center text-white">Filter by Tag</Label>
			<Select
				id="tagFilter"
				defaultClass="text-gray-900 disabled:text-gray-400 bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-tkd-surface dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:disabled:text-gray-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 h-12"
				placeholder=""
				items={tagFilters}
				bind:value={currTag}
			>
				{#each tagFilters as { value, name }}
					<option {value}>{name}</option>
				{/each}
			</Select>
		</div>

		<div class="flex w-2/5 flex-col gap-1">
			<Label for="langFilter" class="text-center text-white">Filter by Language</Label>
			<Select
				id="langFilter"
				defaultClass="text-gray-900 disabled:text-gray-400 bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-tkd-surface dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:disabled:text-gray-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 h-12"
				placeholder=""
				items={langFilters}
				bind:value={currLang}
			>
				{#each langFilters as { value, name }}
					<option {value}>{name}</option>
				{/each}
			</Select>
		</div>
	</div>

	<div class="flex w-2/5 flex-col gap-1 pb-2">
		<Label for="sorter" class="text-center text-white">Sort by</Label>
		<Select
			id="sorter"
			defaultClass="text-gray-900 disabled:text-gray-400 bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-tkd-surface dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:disabled:text-gray-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 h-12"
			placeholder=""
			items={sortParams}
			bind:value={currSortParam}
		>
			{#each sortParams as { value, name }}
				<option {value}>{name}</option>
			{/each}
		</Select>
	</div>
</div>

<main class="flex flex-col gap-4">
	<div class="flex flex-col">
		{#each wordsWithCount as word}
			<WordCard {...word} />
		{/each}
	</div>
</main>
