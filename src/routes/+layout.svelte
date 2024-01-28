<script>
  import "../app.css";
  import SbLogo from '$lib/assets/second-brain.svg'
</script>

<main class="flex flex-col font-sans h-[430px] w-[320px] bg-[#23252F]">
  <header class="bg-[#1C1E26] border-b border-black/25 p-4">
    <img alt="The project logo" src={SbLogo} />
  </header>
  <content class="flex flex-1 flex-col px-5">
    <slot />
  </content>
</main>
