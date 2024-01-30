<script lang="ts">
  export let variant = 'primary';
</script>

<button
  {...$$restProps} 
  class={`flex justify-center items-center gap-1 p-3 rounded-md text-sm font-semibold ${$$props.class || ''} ${variant === 'primary' ? 'bg-primaryBlue' : 'bg-white'} `}
  on:click>
  <slot/>
</button>

