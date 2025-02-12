<script lang="ts">
	import { exportData } from '../plugins/dbFetcher';
</script>

<div class="rounded-md bg-tkd-surface px-4 py-4 text-justify text-white">
	<button onclick={exportData} class="border-2 text-xl font-semibold">Export Your Data</button>
	<p class="mt-2">
		Your data, your right! If you wish to obtain your typing data that this application has gathered since installation,
		click the button above to start download.
	</p>
</div>
