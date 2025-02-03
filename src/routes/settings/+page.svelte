<script>
	import { isExplicitOn } from '../stores';
</script>

<!-- EXPLICIT MODE -->
<label class="inline-flex cursor-pointer items-center justify-between px-4 py-4">
	<span class="text-xl text-white">Explicit Mode</span>
	<input type="checkbox" bind:checked={$isExplicitOn} value="" class="peer sr-only" />
	<div
		class="peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-tkd-primary peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rtl:peer-checked:after:-translate-x-full dark:border-gray-600 dark:bg-gray-700 dark:peer-checked:bg-tkd-primary dark:peer-focus:ring-blue-800"
	></div>
</label>
