<!-- src/App.svelte -->
<script lang="ts">
  chrome.runtime.sendMessage({
    type: "SPINX_POPUP",
    text: 'Hello from the popup!',
  }).then((response) => {console.log(response)});

  let name = 'Sphinx';
</script>

<main>
  <img class="logo" src="static/icon.png" alt="Sphinx logo" />
  <h1>Hello {name}!</h1>
</main>

<style>
  main {
    text-align: center;
    margin: 1em;
  }

  .logo {
    height: 3rem;
  }

  h1 {
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
</style>
