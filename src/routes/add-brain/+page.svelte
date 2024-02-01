<script>
  import Button from "$lib/Button.svelte";
  import Plus from "$lib/assets/plus.svg";
  import AddSb from '$lib/assets/add-second-brain.svg'

  let url = '';
  const handleTextChange = (event) => {
    console.log(event.target.value)
  }
</script>

<div class="flex flex-col text-center pt-20">
  <p class="flex justify-center mb-4"><img alt="The project logo" src={AddSb} /></p>
  <h1 class="text-[#F5F5F5] text-xl text-center mb-9">Add a Second Brain</h1>

  <div class="flex flex-col justify-between gap-6">
    <input on:input={handleTextChange} bind:value={url} class="bg-bg-3 p-4 focus-within:outline-primaryBlue focus-within:outline-2" placeholder="Paste your URL here..." />
    <Button disabled class="mt-4 disabled:bg[#52566E]"><img alt="The project logo" src={Plus} /> Add a Second Brain</Button>
    <Button class="mt-4 bg-transparent border border-white/50">Cancel</Button>
  </div>
</div>
