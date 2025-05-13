<script lang="ts">
  import { enhance } from "$app/forms";
  import PostTeaser from "$lib/components/PostTeaser.svelte";

  export let data;
  const { foo, posts } = data;
</script>

<button class="btn">{foo}</button>

<form
  use:enhance
  method="post"
  action="?/something"
  class="flex flex-col gap-4"
>
  <label for="title">
    Title:
    <input type="text" id="title" name="title" class="input" />
  </label>
  <label for="body">
    Content:
    <textarea id="body" name="body" class="textarea"></textarea>
  </label>

  <button>Submit</button>
</form>

{#if posts.length === 0}
  <p class="text-gray-500">No posts available</p>
{:else}
  <ul class="list-disc">
    {#each posts as post}
      <PostTeaser {...post} />
    {/each}
  </ul>
{/if}
