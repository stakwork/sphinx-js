<!-- src/App.svelte -->
<script lang="ts">
  import { pattern } from "svelte-pathfinder";
  import SbLogo from './assets/second-brain.svelte'
  import Empty from "./routes/Empty.svelte";
  import AddForm from "./routes/AddBrain/AddForm.svelte";

  chrome.runtime.sendMessage({
    type: "SPINX_POPUP",
    text: 'Hello from the popup!',
  }).then((response) => {console.log(response)});

  let name = 'Sphinx';
</script>

<main class="flex flex-col font-sans h-[430px] w-[320px] bg-[#23252F]">
  <header class="bg-[#1C1E26] border-b border-black/25 p-4">
    <SbLogo />
  </header>
  <content class="flex flex-1 flex-col px-5">
    {#if $pattern('/add-brain')}
      <svelte:component this={AddForm} />
    {:else if $pattern('/')}
      <svelte:component this={Empty} />
    {/if}
  </content>
</main>
