<script>
	import { isExplicitOn } from '../stores';
</script>

<!-- EXPLICIT MODE -->
<div class="mt-3 flex flex-col gap-4">
	<div class="rounded-md bg-tkd-surface px-4 py-4 text-justify text-white">
		<label class="flex cursor-pointer items-center justify-between">
			<span class="text-xl font-semibold">Explicit Mode</span>
			<input type="checkbox" bind:checked={$isExplicitOn} value="" class="peer sr-only" />
			<div
				class="peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-tkd-primary peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rtl:peer-checked:after:-translate-x-full dark:border-gray-600 dark:bg-gray-700 dark:peer-checked:bg-tkd-primary dark:peer-focus:ring-blue-800"
			></div>
		</label>

		<p class="mt-2">
			When <span class="font-semibold">Explicit Mode</span> is turned on, bad words in the
			<span class="font-semibold">Dictionary</span> tab will be visible. Turn this setting off to hide
			them, especially when working with children or minors.
		</p>
	</div>

	<div class="rounded-md bg-tkd-surface px-4 py-4 text-justify text-white">Another Setting</div>
</div>
