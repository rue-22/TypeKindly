<script lang="ts">
	import { onMount } from 'svelte';
	import { Chart } from 'flowbite-svelte';
	import HomeCard from '$lib/components/HomeCard.svelte';
	import { databaseResult } from './stores';
	import { fetchDaily } from '$lib/plugins/dbFetcher';

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

	let good7Days: { x: string; y: number }[] = $state([]);
	let bad7Days: { x: string; y: number }[] = $state([]);

	let options = $derived({
		colors: ['#FF645C', '#097969'],
		series: [
			{
				name: 'Good',
				color: '#097969',
				data: good7Days
			},
			{
				name: 'Bad',
				color: '#FF645C',
				data: bad7Days
			}
		],
		chart: {
			type: 'bar',
			height: '250px',
			width: '100%',
			fontFamily: 'Inter, sans-serif',
			toolbar: {
				show: false
			}
		},
		plotOptions: {
			bar: {
				horizontal: false,
				columnWidth: '70%',
				borderRadiusApplication: 'end',
				borderRadius: 8
			}
		},
		tooltip: {
			shared: true,
			intersect: false,
			style: {
				fontFamily: 'Inter, sans-serif'
			},
			theme: 'dark'
		},
		states: {
			hover: {
				filter: {
					type: 'darken',
					value: 0.5
				}
			}
		},
		stroke: {
			show: true,
			width: 1,
			colors: ['transparent']
		},
		grid: {
			show: false
			// padding: {
			// 	left: 2,
			// 	right: 2,
			// 	top: -14
			// }
		},
		dataLabels: {
			enabled: false
		},
		legend: {
			show: false
		},
		xaxis: {
			floating: false,
			labels: {
				show: true,
				style: {
					fontFamily: 'Inter, sans-serif',
					cssClass: 'text-xs',
					colors: 'white'
				},
				theme: 'dark'
			},
			axisBorder: {
				show: true
			},
			axisTicks: {
				show: false
			}
		},
		yaxis: {
			show: false
		},
		fill: {
			opacity: 1
		}
	});

	$effect(() => {
		res = $databaseResult;
		const today = new Intl.DateTimeFormat('en-CA', {
			timeZone: 'Asia/Manila',
			year: 'numeric',
			month: '2-digit',
			day: '2-digit'
		}).format(new Date());

		let days: string[] = [];
		if (res !== 'Empty DB Result') {
			days = res.split('\n');
		}

		// get first 7 entries (for graph)
		let newGood7Days: { x: string; y: number }[] = [];
		let newBad7Days: { x: string; y: number }[] = [];
		let n = Math.min(7, days.length);
		let latest7Days = days.slice(0, n);
		latest7Days.forEach((record) => {
			const tokens = record.split(',');
			const [date, good, bad] = tokens;
			const [, m, d] = date.split('-');
			newGood7Days.push({ x: m + '-' + d, y: parseInt(good) || 0 });
			newBad7Days.push({ x: m + '-' + d, y: parseInt(bad) || 0 });
		});
		if (JSON.stringify(newGood7Days) !== JSON.stringify(good7Days)) {
			good7Days = [...newGood7Days];
		}
		if (JSON.stringify(newBad7Days) !== JSON.stringify(bad7Days)) {
			bad7Days = [...newBad7Days];
		}

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
		<h1 class="text-[1.65rem] font-[550] underline underline-offset-4">{greeting}</h1>
		<div>
			<h2 class="">{currDate}</h2>
			<h2 class="">{currDay}</h2>
		</div>
	</div>

	<!-- daily stats -->
	<div class="rounded-xl bg-tkd-surface px-4 pb-4 pt-2">
		<h3 class="mb-1 text-xl font-medium">Daily Statistics</h3>
		<div class="flex justify-evenly">
			<HomeCard title="Good" desc={good} color="2ecc71" />
			<HomeCard title="Bad" desc={bad} color="e74c3c" />
		</div>
	</div>

	<!-- overall stats -->
	<div class="rounded-xl bg-tkd-surface px-4 pb-4 pt-2">
		<h3 class="mb-1 text-xl font-medium">Overall Statistics</h3>
		<div class="flex justify-evenly">
			<HomeCard title="Good" desc={totalGood.toString()} color="2ecc71" />
			<HomeCard title="Bad" desc={totalBad.toString()} color="e74c3c" />
		</div>
	</div>

	<!-- last 7 days -->
	{#if good7Days.length > 0}
		<div class="max-w-full rounded-xl bg-tkd-surface px-4 pb-2 pt-2">
			<h3 class="text-xl font-medium">
				Last {Math.min(7, good7Days.length) !== 1
					? `${Math.min(7, good7Days.length)} Records`
					: '1 Record'}
			</h3>
			<Chart {options} />
			<!-- <Chart {options} class="z-0 flex w-full items-center justify-center rounded-md border" /> -->
		</div>
	{/if}
</main>

<!-- <button -->
<!-- 	class="mt-2 rounded-lg border-2 py-2 text-white" -->
<!-- 	onclick={() => { -->
<!-- 		fetchDaily(); -->
<!-- 		fetchAllWords(); -->
<!-- 	}}>Refresh</button -->
<!-- > -->
<!-- <p class="text-white">{$databaseResult}</p> -->
<!-- <p class="text-white">{$databaseWordCount}</p> -->
