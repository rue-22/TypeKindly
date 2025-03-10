<script lang="ts">
	const { title, desc, color } = $props();
</script>

<div
	class="flex h-20 w-[45%] flex-col items-center justify-center rounded-lg border-[0.5px] border-black px-2 text-center shadow-md"
	style="background-color: {`#${color}`};"
>
	<h1 class="text-lg font-[500]">{title}</h1>
	<h2 class="text-lg">{desc}</h2>
</div>
