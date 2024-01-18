<script>

  import { goto } from "svelte-pathfinder";
  import Button from "../components/Button.svelte";
  import Plus from "../assets/plus.svelte";

</script>

<div class="flex flex-col text-center pt-20">
  <h1 class="text-[#F5F5F5] text-xl text-center mb-9">Hello! 👋</h1>
  <p class="mb-11 text-sm font-normal">Add your first SecondBrain<br /> by entering the URL below and<br /> pay 10 sats to contribute content!</p>
  <Button variant='primary' on:click={()=> goto('/add-brain')}><Plus /> Add a Second Brain</Button>
</div>
