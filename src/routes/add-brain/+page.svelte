<script>
  // import Plus from "$lib/assets/plus.svg";

  // import Button from "../../components/Button.svelte";
  import Button from "$lib/Button.svelte";
  import AddSb from '$lib/assets/add-second-brain.svg'

  function onSubmit(event) {
    const formData = new FormData(event.target);
    console.log('onSubmit', formData)
  }
</script>

<div class="flex flex-col text-center pt-20">
  <p class="flex justify-center mb-4"><img alt="The project logo" src={AddSb} /></p>
  <h1 class="text-[#F5F5F5] text-xl text-center mb-9">Add a Second Brain</h1>
  <form on:submit|preventDefault={onSubmit}>
    <!-- <input name="url" type="text" value='' placeholder="Paste your url here ..." class="border border-[#F5F5F5] rounded-md px-4 py-2 mb-4" /> -->
    <input type="text" id="email" name="email" value="" />
    <!-- <Button variant='primary' on:click={()=> goto('/add-brain')}><Plus /> Add a Second Brain</Button>
    <Button variant='secondary' on:click={()=> goto('/')}>Cancel</Button> -->
  </form>
</div>
