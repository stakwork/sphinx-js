<script>
  import "../app.css";
  import SbLogo from '$lib/assets/second-brain.svg'
</script>

<main class="flex flex-col font-sans h-[430px] w-[320px] bg-bg-1">
  <header class="bg-bg-3 border-b border-black/25 p-4">
    <img alt="The project logo" src={SbLogo} />
  </header>
  <content class="flex flex-1 flex-col px-5">
    <slot />
  </content>
</main>
