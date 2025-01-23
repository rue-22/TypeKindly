<script lang="ts">
	let { menuName } = $props();

	import book from '/static/book.svg?raw';
	import calendar from '/static/calendar.svg?raw';
	import home from '/static/home.svg?raw';
	import settings from '/static/settings.svg?raw';
</script>

<div>
	<a
		href={menuName === 'home' ? '/' : `/${menuName}`}
		class="align-center grow-1 flex h-full flex-1 flex-col items-center justify-center rounded-xl text-center text-sm"
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
