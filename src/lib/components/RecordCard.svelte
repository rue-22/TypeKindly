<script>
	import { Chart } from 'flowbite-svelte';

	// props ng good, bad, and neutral words for the day

	const options = {
		series: [52.8, 26.8, 20.4],
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
		<p class="text-xl">Date</p>
		<p class="mb-2 text-lg font-bold">200 words typed</p>

		<p class="text-lg"><span class="font-semibold text-[#097969]">Good</span>: 69 (X%)</p>
		<p class="text-lg"><span class="font-semibold text-[#FF645C]">Bad</span>: 120 (Y%)</p>
		<p class="text-lg"><span class="font-semibold text-[#818589]">Other</span>: 11 (Z%)</p>
	</div>

	<Chart {options} class="z-0" />
</div>
