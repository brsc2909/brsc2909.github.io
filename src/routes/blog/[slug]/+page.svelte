<script lang="ts">
  let { data } = $props();

  const { content: Post, metadata } = data;
</script>

<svelte:head>
  <title>Brendans Blog - {metadata.title}</title>
  <meta name="description" content={metadata.description} />
  <meta name="keywords" content={metadata.keywords} />
  <meta name="author" content={metadata.author} />
  <meta name="date" content={metadata.date} />
  <meta name="robots" content="index, follow" />
</svelte:head>

<article class="prose">
  <header class="mb-8 not-prose">
    <h1 class="text-4xl font-bold  mb-4">{metadata.title}</h1>
    <div class="flex items-center  text-sm">
      <time datetime={metadata.date}>
        {new Date(metadata.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}
      </time>
      <span class="mx-2">•</span>
      <span>By {metadata.author}</span>
    </div>
  </header>

  <Post />
</article>

<div class="mt-8">
  <a href="/blog">&larr; Back to all posts</a>
</div> 
