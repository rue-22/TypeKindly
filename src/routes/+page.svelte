<script lang="ts">
	let textInput = $state('');
</script>

<div class="mt-12 flex flex-col items-center justify-center gap-4 text-white">
	<textarea class="min-h-32 min-w-full bg-tkd-surface" bind:value={textInput}></textarea>

	<button
		class="rounded-md border-2 px-3 py-4"
		onclick={() => {
			textInput = '';
		}}>Reset uwu</button
	>
</div>

<p class="mt-8 text-center text-white">{textInput}</p>
