<script lang="ts">
  import "$lib/assets/app.css";
  import Footer from "$lib/parts/Footer.svelte";
  import Header from "$lib/parts/Header.svelte";
</script>

<Header name="FooBar" version={2} />

<main class="container mx-auto px-4">
  <slot />
</main>

<Footer />
