<script>
  import "../main.css";
  import { run } from 'svelte/legacy';
  import Header from '$lib/header.svelte';
  import Footer from '$lib/footer.svelte';
  // import { currentPage, isMenuOpen } from '../lib/assets/js/store.js';
  import { navItems } from '$lib/config';
  import { preloadCode } from '$app/navigation';
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import { siteTitle, siteURL } from '$lib/config.js';
  let { data, children } = $props();
  const transitionIn = { delay: 150, duration: 150 };
  const transitionOut = { duration: 100 };
  // run(() => {
  // 	currentPage.set(data.path);
  // });

  /**
  * This pre-fetches all top-level routes on the site in the background for faster loading.
  * https://kit.svelte.dev/docs/modules#$app-navigation-preloaddata
  *
  * Any route added in src/lib/config.js will be preloaded automatically. You can add your
  * own preloadData() calls here, too.
  **/
  onMount(() => {
  	const navRoutes = navItems.map((item) => item.route);
  	preloadCode(...navRoutes);
  });
</script>
<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Lora:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet">
</svelte:head>

<div class="font-lora text-blue">
	<Header />
	{#key data.path}
		<main id="main" tabindex="-1" in:fade|global={transitionIn} out:fade|global={transitionOut}>
			{@render children?.()}
		</main>
	{/key}
	<Footer />
</div>
