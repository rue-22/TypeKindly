<script lang="ts">
	const { tag, lang, word } = $props();
</script>

<div class="flex min-h-12 items-center justify-between px-3">
	<h1 class="w-1/2 text-xl font-bold text-tkd-text">{word}</h1>

	<h2 class="text-sm text-tkd-text">{lang}</h2>

	<p class="font-semibold {tag === 'Good' ? 'text-green-700' : 'text-red-700'} w-1/4 text-right">
		{tag}
	</p>
</div>
