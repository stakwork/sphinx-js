<!-- src/App.svelte -->
<script lang="ts">
  // import Empty from "./routes/Empty.svelte";
  // import AddForm from "./routes/AddBrain/AddForm.svelte";

  // chrome.runtime.sendMessage({
  //   type: "SPINX_POPUP",
  //   text: 'Hello from the popup!',
  // }).then((response) => {console.log(response)});

  let name = 'Sphinx';
</script>

<a href="/add-brain" class="flex items-center justify-center flex-1">
  <span class="text-[#F5F5F5] text-xl text-center mb-9">Add a Second Brain</span>
</a>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>
