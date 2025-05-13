<script lang="ts">
  export let data;
  const { post } = data;
</script>

<h1 class="text-amber-400 text-7xl">{post.title}</h1>

<p class="text-gray-500">{post.body}</p>

<p class="text-gray-500">
  <a href="/posts" class="text-blue-500 hover:text-blue-700">Back to posts</a>
</p>
