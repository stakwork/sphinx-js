<script lang="ts">
    export let variant: string;
</script>

<button class={`flex justify-center items-center gap-1 p-3 rounded-md text-sm font-semibold ${variant === 'primary' ? 'bg-[#618AFF]' : 'bg-white'} `} on:click>
    <slot/>
</button>

