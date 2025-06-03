<script>
  import LogoMark from '$lib/logomark.svelte';
  const navclasses = `transition-all text-yellow font-barlowc text-subheading uppercase relative
    after:h-0 after:transition-all after:duration-300 after:translate-y-1 after:opacity-0
    hover:after:translate-y-0 focus:after:translate-y-0 hover:after:opacity-100 focus:after:opacity-100
    hover:after:w-full hover:after:h-1 hover:after:bg-green hover:after:absolute hover:after:-bottom-1 hover:after:left-0 hover:after:content-['']
    focus:after:w-full focus:after:h-1 focus:after:bg-green focus:after:absolute focus:after:-bottom-1 focus:after:left-0 focus:after:content-['']
    hover:text-green focus:text-green current:text-green`;</script>
<footer class="bg-blue ">

    <nav class="mx-auto flex gap-8 justify-between items-center w-full max-w-4xl">
        <div class="w-32">
            <a href="/" class="group block h-auto"><LogoMark /></a>
        </div>
        <ul class="flex gap-8">
            <li><a class="{navclasses}" href="/about">About</a></li>
            <li><a class="{navclasses}" href="/contact">Fasting Fridays</a></li>
            <li><a class="{navclasses}" href="/contact">Subscribe</a></li>
            <li><a class="{navclasses}" href="/about">Contact</a></li>
        </ul>
    </nav>
</footer>
