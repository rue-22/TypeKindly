<script lang="ts">
	import FilterWordsPanel from '$lib/components/FilterWordsPanel.svelte';

	import words from '$lib/dictionary/words';
	import { isExplicitOn } from '../stores';

	let tempBool = $isExplicitOn;
	let tagFilters: { value: string; name: string }[] = $state([]);
	if (!tempBool) {
		tagFilters = [{ value: 'Good', name: 'Good' }];
	} else {
		tagFilters = [
			{ value: 'All', name: 'All' },
			{ value: 'Good', name: 'Good' },
			{ value: 'Bad', name: 'Bad' }
		];
	}
	const langFilters = [
		{ value: 'All', name: 'All' },
		{ value: 'English', name: 'English' },
		{ value: 'Filipino', name: 'Filipino' }
	];
</script>

<FilterWordsPanel {tagFilters} {langFilters} cardsInfo={words} />
