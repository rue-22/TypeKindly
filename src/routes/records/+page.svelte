<script lang="ts">
	import RecordCard from '$lib/components/RecordCard.svelte';
	import { databaseResult } from '../stores';

	interface Record {
		date: string;
		good: number;
		bad: number;
	}

	let res = $state($databaseResult);
	let records: Record[] = $state([]);

	$effect(() => {
		res = $databaseResult;
		const days = res.split('\n');

		const newRecords = days.map((day) => {
			const [date, good, bad] = day.split(',');
			return {
				date: date,
				good: parseInt(good) || 0,
				bad: parseInt(bad) || 0
			};
		});

		if (JSON.stringify(newRecords) !== JSON.stringify(records)) {
			records = newRecords;
		}
	});
</script>

<main class="mt-3 flex flex-col gap-3">
	{#each records as rec}
		{#if rec.date !== ''}
			<RecordCard date={rec.date} good={rec.good} bad={rec.bad} />
		{:else}
			<div class="text-center text-md text-white">
				<p>Oops! You still don't have any records yet :(</p>
				<p>Go type, <em>kindly</em> please.</p>
			</div>
		{/if}
	{/each}
</main>
