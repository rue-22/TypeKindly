<script lang="ts">
	import RecordCard from '$lib/components/RecordCard.svelte';
	import { databaseResult } from '../stores';

	interface Record {
		date: string;
		good: number;
		bad: number;
	}

	// let res = $state('');
	let date = $state('');
	let good = $state('');
	let bad = $state('');

	let records: Record[] = $state([]);
	let res = $state($databaseResult);
	const days = res.split('\n');

	days.map((day) => {
		[date, good, bad] = day.split(',');
		records.push({ date: date, good: parseInt(good), bad: parseInt(bad) });
	});

	// records sorter by date
	records.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
</script>

<main class="mt-3 flex flex-col gap-3">
	{#each records as rec}
		<RecordCard date={rec.date} good={rec.good} bad={rec.bad} />
	{/each}
</main>
