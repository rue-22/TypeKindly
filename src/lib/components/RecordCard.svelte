<script lang="ts">
	import { Chart } from 'flowbite-svelte';

	// props ng good, bad, and neutral words for the day
	const { date, good, bad } = $props();
	const total = good + bad;
	const badPct = Math.round((bad / total) * 1000) / 10;
	const goodPct = Math.round((good / total) * 1000) / 10;

	const options = {
		series: [badPct, goodPct, 0],
		colors: ['#FF645C', '#097969', '#818589'],
		chart: {
			height: 200,
			width: '75%',
			type: 'pie'
		},
		stroke: {
			colors: ['transparent'],
			lineCap: '0.5'
		},
		plotOptions: {
			pie: {
				dataLabels: {
					offset: -22
				}
			}
		},
		labels: ['Bad', 'Good', 'Neutral'],
		dataLabels: {
			enabled: true,
			style: {
				fontFamily: 'Inter, sans-serif'
			}
		},
		legend: {
			show: false
		}
	};
</script>

<div class="flex items-center justify-between rounded-xl bg-tkd-surface px-4 text-white">
	<div>
		<p class="text-xl font-semibold">{date}</p>
		<p class="mb-2 text-lg font-medium">{total} words typed</p>

		<p class="text-lg">
			<span class="font-semibold text-[#097969]">Good</span>: {good} ({goodPct}%)
		</p>
		<p class="text-lg">
			<span class="font-semibold text-[#FF645C]">Bad</span>: {bad} ({badPct}%)
		</p>
	</div>

	<Chart {options} class="z-0" />
</div>
