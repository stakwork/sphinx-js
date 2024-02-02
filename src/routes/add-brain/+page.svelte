<script lang="ts">
	import Button from '$lib/Button.svelte';
	import Plus from '$lib/assets/plus.svg';
	import DarkPlus from '$lib/assets/dark-plus.svg';
	import AddSb from '$lib/assets/add-second-brain.svg';
	import { debounce } from '$lib/utils';
	import { LocalStorageKeys } from '$lib/types';

	let url = '';
	let urlError = true;
	const handleTextChange = debounce((event: Event & { target: EventTarget & HTMLInputElement }) => {
		try {
			urlError = false;
			const newUrl = new URL(event.target.value);
			url = newUrl.href;
		} catch (error) {
			console.error(error);
			urlError = true;
		}
	}, 500);

	const handleAddBrain = async () => {
		let brainUrl = url;
		if (!brainUrl) return;
		if (!brainUrl.endsWith('/about') && !brainUrl.endsWith('/about/')) {
			brainUrl = `${url}/about`;
		}
		const response = await fetch(brainUrl);
		const brain = await response.json();

		chrome.storage.sync.get(LocalStorageKeys.BRAINS_LIST).then((result) => {
			let newBrain;
			if (!result[LocalStorageKeys.BRAINS_LIST]) {
				newBrain = [brain];
			} else {
				const parsedBrains = JSON.parse(result[LocalStorageKeys.BRAINS_LIST]);
				newBrain = [brain, ...parsedBrains];
			}
			chrome.storage.sync
				.set({ [LocalStorageKeys.BRAINS_LIST]: JSON.stringify(newBrain) })
				.then(() => {
					console.log('Value is added');
				});
		});
	};
</script>

<div class="flex flex-col text-center pt-16">
	<p class="flex justify-center mb-4"><img alt="The project logo" src={AddSb} /></p>
	<h1 class="text-[#F5F5F5] text-xl text-center mb-6">Add a Second Brain</h1>

	<div class="flex flex-col justify-between gap-1">
		<input
			on:input={handleTextChange}
			bind:value={url}
			class="bg-bg-3 p-4 focus-within:outline-primaryBlue focus-within:outline-2"
			placeholder="Paste your URL here..."
		/>
		<Button
			on:click={handleAddBrain}
			disabled={urlError}
			class="mt-4 disabled:bg-disabledButtonBg disabled:text-bg-4"
			><img alt="The project logo" src={urlError ? DarkPlus : Plus} /> Add a Second Brain</Button
		>
		<a href="/" class="self-center w-full">
			<Button class="mt-4 bg-transparent border border-white/20 w-full">Cancel</Button>
		</a>
	</div>
</div>
