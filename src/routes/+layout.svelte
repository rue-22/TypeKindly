<script lang="ts">
	import '../app.css';
	let { children } = $props();
	import MenuChoice from '../routes/MenuChoice.svelte';
</script>

<!-- min-height[calc(100vh-0.5rem)] -->
<main class="flex min-h-screen flex-col">
	<header class="sticky top-0 w-full bg-black py-[0.8rem] text-center text-4xl text-white">
		<h1>TypeKindly</h1>
	</header>

	{@render children()}

	<navbar
		class="fixed bottom-0 flex w-full basis-auto flex-row justify-evenly bg-black py-[0.5rem] text-white"
	>
		<MenuChoice menuName="home" />
		<MenuChoice menuName="records" />
		<MenuChoice menuName="dictionary" />
		<MenuChoice menuName="settings" />
	</navbar>

	<!-- <footer class="min-h-5em sticky bottom-0 bg-black text-white">
		<p>This is the sticky footer.</p>
	</footer> -->
</main>
