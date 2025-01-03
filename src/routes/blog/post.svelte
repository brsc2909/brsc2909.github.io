<script>
  export let title;
  export let date;
</script>

<svelte:head>
  <title>{title} | Brendan Scullion</title>
</svelte:head>

<article class="prose">
  <p class="text-sm text-gray-500">{date}</p>
  <slot />
</article>

<div class="mt-8">
  <a href="/blog">&larr; Back to all posts</a>
</div> 