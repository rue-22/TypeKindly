<script lang="ts">
	let { menuName } = $props();

	import book from '../book.svg?raw';
	import calendar from '../calendar.svg?raw';
	import home from '../home.svg?raw';
	import settings from '../settings.svg?raw';
</script>

<div>
	<a
		href={menuName === 'home' ? '/' : `/${menuName}`}
		class="align-center grow-1 text-sm} flex h-full flex-1 flex-col items-center justify-center rounded-xl text-center"
	>
		{#if menuName == 'home'}
			{@html home}
		{:else if menuName == 'records'}
			{@html calendar}
		{:else if menuName == 'dictionary'}
			{@html book}
		{:else if menuName == 'settings'}
			{@html settings}
		{/if}

		<p>{menuName.charAt(0).toUpperCase() + menuName.slice(1)}</p>
	</a>
</div>
