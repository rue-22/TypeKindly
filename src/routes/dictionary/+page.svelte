<script>
	import FilterWordsPanel from '$lib/components/FilterWordsPanel.svelte';

	import words from '$lib/dictionary/words';

	const tagFilters = ['All', 'Good', 'Bad'];
	const langFilters = ['All', 'English', 'Filipino'];
</script>

<FilterWordsPanel {tagFilters} {langFilters} cardsInfo={words} />

