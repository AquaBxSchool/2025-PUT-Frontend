<script lang="ts">
  import slugify from "slugify";

  export let id: number;
  export let title: string;
  export let body: string;
</script>

<li>
  {title}
  <p>{body}</p>
  <a href="/posts/{id}" class="text-blue-500 hover:underline">Read more</a>
</li>
