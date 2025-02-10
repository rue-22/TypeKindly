<script lang="ts">
	import { onMount } from 'svelte';
	import HomeCard from '$lib/components/HomeCard.svelte';
	import { databaseResult } from './stores';
	import { fetchDaily } from '$lib/plugins/dbFetcher';

	let greeting = $state('');
	let currDate = $state('');
	let currDay = $state('');
	let good = $state('0');
	let bad = $state('0');
	let neutral = $state('0');
	let res = $state('');

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

	$effect(() => {
		res = $databaseResult;
		const today = new Intl.DateTimeFormat('en-CA', {
			timeZone: 'Asia/Manila',
			year: 'numeric',
			month: '2-digit',
			day: '2-digit'
		}).format(new Date());

		const days = res.split('\n');
		const todayRecord = days.find((record) => {
			const [date] = record.split(',');
			return date === today;
		});

		let tokens: string[] = [];
		if (todayRecord) {
			tokens = todayRecord.split(',');
			[, good, bad, neutral] = tokens;
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
		<div class="flex justify-between">
			<HomeCard title="Good" desc={good} color="2ecc71" />
			<HomeCard title="Bad" desc={bad} color="e74c3c" />
			<HomeCard title="Neutral" desc={neutral} color="95a5a6" />
		</div>
	</div>
</main>

<!-- <p class="text-white">{$databaseResult}</p> -->
<button class="rounded-lg border-2 py-2 text-white" onclick={fetchDaily}>Fetch Daily</button>
