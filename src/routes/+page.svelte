<!-- Purpose: Homepage for personal website
     Context: Landing page that introduces the author and provides navigation to key sections -->

<script lang="ts">
  interface Project {
    title: string;
    description: string;
    technologies: string[];
    link?: string;
    github?: string;
  }

  const projects: Project[] = [
    {
      title: "Coso.ai",
      description: "An AI-powered platform that creates tailored social media content for brands, streamlining the process of reviewing, approving, and scheduling posts. It helps businesses maintain a consistent online presence with minimal effort, delivering high-quality, relevant content efficiently.",
      technologies: ["AI", "Web Development", "Developer Tools"],
      link: "https://coso.ai"
    },
    {
      title: "GitTok.dev",
      description: "gittok.dev is an online platform designed to help users discover trending GitHub projects in an engaging, scrollable feed similar to TikTok. This makes it easy for developers and tech enthusiasts to learn about and stay updated with the latest in open-source software.",
      technologies: ["Web Development", "Video Platform", "Developer Community"],
      link: "https://gittok.dev"
    }
  ];
</script>

<svelte:head>
  <title>Brendan Scullion</title>
</svelte:head>

<h1 class="text-3xl mb-6">Brendan Scullion</h1>

<div class="prose">
  <p>Welcome to my corner of the internet. I write about things that interest me.</p>

  <p class="mt-4 mb-8">
    Check out my <a href="/blog">blog posts</a> or follow me on
    <a href="https://twitter.com/brsc2909" target="_blank" rel="noopener noreferrer">Twitter</a>.
  </p>
</div>

<section class="mt-12">
  <h2 class="text-2xl mb-4 font-mono">Projects</h2>
  <div class="grid gap-6 md:grid-cols-2">
    {#each projects as project}
      <article class="border border-gray-200 p-4 rounded-sm hover:shadow-sm transition-shadow">
        <div class="flex items-center justify-between mb-2">
          <h3 class="text-xl font-serif">{project.title}</h3>
          <div class="flex gap-2">
            {#if project.github}
              <a href={project.github} target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-gray-900">
                <span class="sr-only">GitHub</span>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                </svg>
              </a>
            {/if}
            {#if project.link}
              <a href={project.link} target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-gray-900">
                <span class="sr-only">Live Demo</span>
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            {/if}
          </div>
        </div>
        <p class="text-gray-600 mb-3">{project.description}</p>
        <div class="flex flex-wrap gap-2">
          {#each project.technologies as tech}
            <span class="inline-block px-2 py-1 text-sm bg-gray-100 rounded-sm font-mono">{tech}</span>
          {/each}
        </div>
      </article>
    {/each}
  </div>
</section>
