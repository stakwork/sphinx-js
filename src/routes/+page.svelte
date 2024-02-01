<!-- src/App.svelte -->
<script lang="ts">
  import { onMount } from 'svelte';
  import Button from "$lib/Button.svelte";
  import Plus from "$lib/assets/plus.svg";

  let name = 'Sphinx';
  let secondBrainList = [];

  onMount(() => {
    const bitcoinBrain = {"app_version":null,"description":"Learn about changes in Bitcoin","mission_statement":"Learn about changes in Bitcoin","search_term":"Bitcoin","title":"Bitcoin Graph"}
    // chrome.storage.sync.set({ brainsList: JSON.stringify([bitcoinBrain])}).then(() => {
    //   console.log("Value is set");
    // });
    chrome.storage.sync.get("brainsList").then((result) => {
      secondBrainList = JSON.parse(result.brainsList);
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
      Add your first SecondBrain by entering the URL below and pay 10 sats to contribute content! Add a Second Brain
    </p>
    <a href="/add-brain" class="self-center">
      <Button><img alt="The project logo" src={Plus} /> Add a Second Brain</Button>
    </a>
  {/if}
</div>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>
