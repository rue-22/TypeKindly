<script lang="ts">
	const { tag, lang, word, count } = $props();
</script>

<div class="flex min-h-12 items-center justify-between px-3">
	<h1 class="w-1/2 text-xl font-semibold text-tkd-text">{word}</h1>

	<h2 class="w-1/4 text-right text-sm text-tkd-text">{lang}</h2>

	<p class="font-semibold {tag === 'Good' ? 'text-green-700' : 'text-red-700'} w-1/4 text-right">
		{tag}
	</p>

	<p class="w-1/6 text-right text-white">{count}</p>
</div>
