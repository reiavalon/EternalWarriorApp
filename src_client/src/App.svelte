<script lang="ts">
	export let name: string;
	(async() => { 
		console.log(await (await fetch('/lostBattle')).json())
	})();
</script>

<main>
	<h1>Hello {name}! asdf</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style>
</style>
