<script lang="ts">
	import { onMount } from 'svelte';
	import HomeCard from '$lib/components/HomeCard.svelte';

	let greeting = '';
	let currDate = '';
	let currDay = '';

	onMount(() => {
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
</script>

<!-- <div class="mt-12 flex flex-col items-center justify-center gap-4 text-white"> -->
<!-- 	<textarea class="min-h-32 min-w-full bg-tkd-surface" bind:value={textInput}></textarea> -->
<!---->
<!-- 	<button -->
<!-- 		class="rounded-md border-2 px-3 py-4" -->
<!-- 		onclick={() => { -->
<!-- 			textInput = ''; -->
<!-- 		}}>Reset uwu</button -->
<!-- 	> -->
<!-- </div> -->
<!---->
<!-- <p class="mt-8 text-center text-white">{textInput}</p> -->

<main class="flex flex-col gap-4 text-white">
	<!-- greetings -->
	<div class="mt-3 flex items-center justify-between px-4">
		<h1 class="underline-offset-3 text-[1.75rem] font-bold underline">{greeting}</h1>
		<div>
			<h2 class="font-semibold">{currDate}</h2>
			<h2 class="font-semibold">{currDay}</h2>
		</div>
	</div>

	<!-- daily summary -->
	<!-- <HomeCard title="Overall Rating for the Day" desc="Positive" color="" square="false" /> -->

	<div class="rounded-xl bg-tkd-surface px-4 pb-4 pt-2">
		<h3 class="mb-2 text-2xl font-semibold">Daily Stats</h3>
		<div class="flex justify-between">
			<HomeCard title="Good" desc="360" color="2ecc71" />
			<HomeCard title="Bad" desc="300" color="e74c3c" />
			<HomeCard title="Neutral" desc="200" color="95a5a6" />
		</div>
	</div>
</main>
