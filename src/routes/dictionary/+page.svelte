<script>
	import FilterWordsPanel from '$lib/components/FilterWordsPanel.svelte';

	import words from '$lib/dictionary/words';
	import { isExplicitOn } from '../stores';

	let tempBool = $isExplicitOn;
	let tagFilters = [];
	if (!tempBool) {
		tagFilters = ['Good'];
	} else {
		tagFilters = ['All', 'Good', 'Bad'];
	}
	const langFilters = ['All', 'English', 'Filipino'];
</script>

<FilterWordsPanel {tagFilters} {langFilters} cardsInfo={words} />
