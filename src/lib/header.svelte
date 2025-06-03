<script>
  import Logo from '$lib/logo.svelte';
  const navclasses = `transition-all text-blue font-barlowc text-subheading uppercase relative
    after:h-0 after:transition-all after:duration-300 after:translate-y-1 after:opacity-0
    hover:after:translate-y-0 focus:after:translate-y-0 hover:after:opacity-100 focus:after:opacity-100
    hover:after:w-full hover:after:h-1 hover:after:bg-green hover:after:absolute hover:after:-bottom-1 hover:after:left-0 hover:after:content-['']
    focus:after:w-full focus:after:h-1 focus:after:bg-green focus:after:absolute focus:after:-bottom-1 focus:after:left-0 focus:after:content-['']
    hover:text-green focus:text-green current:text-green`;
</script>
<header>
    <nav class="mx-auto grid grid-cols-[auto_12rem_auto] gap-8 justify-center items-center w-full max-w-4xl">
        <ul class="flex gap-8">
            <li><a class="{navclasses}" href="/about">About</a></li>
            <li><a class="{navclasses}" href="/contact">Fasting Fridays</a></li>
        </ul>
        <div>
            <a href="/" class="group block h-auto"><Logo /></a>
        </div>
        <ul class="flex gap-8">
            <li><a class="{navclasses}" href="/subscribe">Subscribe</a></li>
            <li><a class="{navclasses}" href="/contact">Contact</a></li>
        </ul>
    </nav>
</header>
