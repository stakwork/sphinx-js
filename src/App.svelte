<!-- src/App.svelte -->
<script lang="ts">
  import SbLogo from './assets/second-brain.svelte'
  import Plus from './assets/plus.svelte'
  import Button from './components/Button.svelte'

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
    <div class="flex flex-col text-center pt-20">
      <h1 class="text-[#F5F5F5] text-xl text-center mb-9">Hello! 👋</h1>
      <p class="mb-11 text-sm font-normal">Add your first SecondBrain<br /> by entering the URL below and<br /> pay 10 sats to contribute content!</p>
      <Button variant='primary' on:click={()=>console.log("Clicked")}><Plus /> Add a Second Brain</Button>
    </div>
  </content>
</main>
