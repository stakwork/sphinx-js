<!-- src/App.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';
	import Button from '$lib/Button.svelte';
	import Plus from '$lib/assets/plus.svg';
	import { LocalStorageKeys, type Brain } from '$lib/types';

	let name = 'Sphinx';
	let secondBrainList: Brain[] = [];

	onMount(() => {
		// chrome.storage.sync.remove(LocalStorageKeys.BRAINS_LIST);
		chrome.storage.sync.get(LocalStorageKeys.BRAINS_LIST).then((result) => {
			if (!result || !result[LocalStorageKeys.BRAINS_LIST]) return;

			secondBrainList = JSON.parse(result[LocalStorageKeys.BRAINS_LIST]);
		});
	});
</script>

<div class="flex flex-1 flex-col justify-center">
	{#each secondBrainList as secondBrain}
		<h1>{secondBrain.title}!</h1>
	{/each}

	{#if secondBrainList.length === 0}
		<h2 class="text-xl leading-6 text-white mb-8 text-center">Hello! 👋</h2>
		<p class="text-md text-white mb-11 text-center">
			Add your first SecondBrain by entering the URL below and pay 10 sats to contribute content!
			Add a Second Brain
		</p>
	{/if}
	<a href="/add-brain" class="self-center">
		<Button><img alt="The project logo" src={Plus} /> Add a Second Brain</Button>
	</a>
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
