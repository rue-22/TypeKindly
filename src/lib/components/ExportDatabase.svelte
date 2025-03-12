<script lang="ts">
	import { exportData } from '../plugins/dbFetcher';
	let showIndicator = $state(false);

	function handleExport() {
		exportData();

		showIndicator = true;

		// setTimeout(() => {
		// 	showIndicator = false;
		// }, 2000);
	}
</script>

<div class="rounded-md bg-tkd-surface px-4 py-4 text-justify text-white">
	<button
		type="button"
		onclick={handleExport}
		class="mb-2 me-2 w-full rounded-2xl bg-gray-800 px-5 py-2.5 text-xl font-semibold text-white transition hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-tkd-surface dark:border-tkd-surface dark:bg-tkd-background dark:hover:bg-tkd-background dark:focus:ring-tkd-background"
	>
		{#if showIndicator}
			Export Successful!
		{:else}
			Export My Data
		{/if}
	</button>

	{#if showIndicator}
		<div class="rounded-full py-1 text-center text-sm font-medium leading-none text-white">
			Please check your <em>Downloads</em> folder to see your data.
		</div>
	{/if}

	<p class="mt-2">
		Your data, your right! If you wish to obtain your typing data that this application has gathered
		since installation, click the button above to start download.
	</p>
</div>
