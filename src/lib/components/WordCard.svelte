<script lang="ts">
	const { tag, lang, word } = $props();

	function fillColor(tag: string) {
		if (tag === 'Good') {
			return 'text-green-500';
		} else if (tag === 'Bad') {
			return 'text-red-500';
		}
	}
</script>

<div class="flex min-h-12 items-center justify-between px-3 text-tkl-text dark:text-tkd-text">
	<h1 class="w-1/2 text-xl font-bold">{word}</h1>

	<h2 class="text-sm">{lang}</h2>

	<p class="font-semibold {fillColor(tag)} w-1/4 text-right">{tag}</p>
</div>
