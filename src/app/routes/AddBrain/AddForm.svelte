<script>
  import Plus from "../../assets/plus.svelte";

  import Button from "../../components/Button.svelte";
  import { goto, submit } from "svelte-pathfinder";
  import AddSb from '../../assets/add-second-brain.svelte'

</script>

<div class="flex flex-col text-center pt-20">
  <p class="flex justify-center mb-4"><AddSb /></p>
  <h1 class="text-[#F5F5F5] text-xl text-center mb-9">Add a Second Brain</h1>
  <form on:submit={submit}>
    <input class="border border-[#F5F5F5] rounded-md px-4 py-2 mb-4" type="text" placeholder="Paste your url here ..." value=""/>
    <Button variant='primary' on:click={()=> goto('/add-brain')}><Plus /> Add a Second Brain</Button>
    <Button variant='secondary' on:click={()=> goto('/')}>Cancel</Button>
  </form>
</div>
