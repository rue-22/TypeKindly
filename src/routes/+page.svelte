<script lang="ts">
	import { onMount } from 'svelte';
	import HomeCard from '$lib/components/HomeCard.svelte';
	import { databaseResult, databaseWordCount } from './stores';
	import { fetchAllWords, fetchDaily } from '$lib/plugins/dbFetcher';

	let greeting = $state('');
	let currDate = $state('');
	let currDay = $state('');

	onMount(async () => {
		await fetchDaily();

		const hour = new Date().getHours();
		if (hour >= 4 && hour < 12) {
			greeting = 'Good morning!';
		} else if (hour >= 12 && hour < 18) {
			greeting = 'Good afternoon!';
		} else {
			greeting = 'Good evening!';
		}

		const now = new Date();
		currDate = now.toLocaleDateString(undefined, {
			year: 'numeric',
			month: 'short',
			day: 'numeric'
		});
		currDay = now.toLocaleDateString(undefined, {
			weekday: 'long'
		});
	});

	let good = $state('0');
	let bad = $state('0');
	let res = $state($databaseResult);
	let totalGood = $state(0);
	let totalBad = $state(0);

	$effect(() => {
		res = $databaseResult;
		const today = new Intl.DateTimeFormat('en-CA', {
			timeZone: 'Asia/Manila',
			year: 'numeric',
			month: '2-digit',
			day: '2-digit'
		}).format(new Date());

		const days = res.split('\n');

		let newTotalGood = 0;
		let newTotalBad = 0;
		days.forEach((record) => {
			const tokens = record.split(',');
			const [, good, bad] = tokens;
			newTotalGood += parseInt(good) || 0;
			newTotalBad += parseInt(bad) || 0;
		});
		if (newTotalGood !== totalGood) {
			totalGood = newTotalGood;
		}
		if (newTotalBad !== totalBad) {
			totalBad = newTotalBad;
		}

		const todayRecord = days.find((record) => {
			const [date] = record.split(',');
			return date === today;
		});

		if (todayRecord) {
			good = todayRecord.split(',')[1];
			bad = todayRecord.split(',')[2];
		}
	});
</script>

<main class="flex flex-col gap-4 text-white">
	<!-- greetings -->
	<div class="mt-3 flex items-center justify-between px-4">
		<h1 class="text-[1.75rem] font-[550] underline underline-offset-4">{greeting}</h1>
		<div>
			<h2 class="">{currDate}</h2>
			<h2 class="">{currDay}</h2>
		</div>
	</div>

	<!-- daily stats -->
	<div class="rounded-xl bg-tkd-surface px-4 pb-4 pt-2">
		<h3 class="mb-1 text-xl font-medium">Daily Stats</h3>
		<div class="flex justify-evenly">
			<HomeCard title="Good" desc={good} color="2ecc71" />
			<HomeCard title="Bad" desc={bad} color="e74c3c" />
		</div>
	</div>

	<!-- overall stats -->
	<div class="rounded-xl bg-tkd-surface px-4 pb-4 pt-2">
		<h3 class="mb-1 text-xl font-medium">Overall Stats</h3>
		<div class="flex justify-evenly">
			<HomeCard title="Good" desc={totalGood.toString()} color="2ecc71" />
			<HomeCard title="Bad" desc={totalBad.toString()} color="e74c3c" />
		</div>
	</div>
</main>

<!-- <p class="text-white">{$databaseResult}</p> -->
<button
	class="mt-2 rounded-lg border-2 py-2 text-white"
	onclick={() => {
		fetchDaily();
		fetchAllWords();
	}}>Fetch DB</button
>
<p class="text-white">{$databaseResult}</p>
<p class="text-white">{$databaseWordCount}</p>
