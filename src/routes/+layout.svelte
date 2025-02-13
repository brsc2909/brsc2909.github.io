<script>
	import "../app.css";
</script>

<header class="mb-8">
	<nav class="flex gap-6 mb-12">
		<a href="/">Home</a>
		<a href="/blog">Blog</a>
		<a href="/cv">CV / Resume</a>
	</nav>
</header>

<main>
	<slot />
</main>

<footer class="mt-12 pt-8 border-t border-gray-200">
	<p>© {new Date().getFullYear()} Brendan Scullion</p>
</footer>
