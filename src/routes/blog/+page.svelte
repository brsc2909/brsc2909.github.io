<script lang="ts">
    interface BlogPost {
      slug: string;
      title: string;
      description: string;
      date: string;
      author: string;
    }
  
    let { data } = $props();
    const posts: BlogPost[] = data.posts;
  </script>

<svelte:head>
  <title>Blog | Brendan Scullion</title>
</svelte:head>

<h1 class="text-3xl mb-6">Blog Posts</h1>

<ul class="space-y-4">
  {#each posts as post}
    <li>
      <a href="/blog/{post.slug}" class="block">
        <span class="text-sm text-gray-500">{post.date}</span>
        <h2 class="text-xl">{post.title}</h2>
      </a>
    </li>
  {/each}
</ul> 