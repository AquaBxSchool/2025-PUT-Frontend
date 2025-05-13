<script lang="ts">
  let name: string = "world";
</script>

<h1 class="font-bold text-4xl">Welcome to SvelteKit {name}</h1>
<p>
  Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the
  documentation
</p>

<style>
  @reference "$lib/assets/app.css";

  h1 {
    @apply text-amber-500;
  }
</style>
