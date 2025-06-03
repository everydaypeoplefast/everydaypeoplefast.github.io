<script>
  /**
   * Image with Content Component
   * A versatile component that displays an image alongside content with customizable layout and styling.
   */

  // Props
  export let heading = '';
  export let subheading = '';
  export let content = '';
  export let cta_title = 'Learn More';
  export let cta_link = '#';
  export let image_src = '';
  export let image_alt = '';
  export let image_first = false; // Controls layout order - true: image on left, false: image on right
  export let color_scheme = 'light'; // 'light' or 'dark'

  // Computed styles based on color scheme
  $: textColor = color_scheme === 'dark' ? 'text-blue' : 'text-blue';
  $: bgColor = color_scheme === 'dark' ? 'bg-blue text-white' : 'bg-transparent';
</script>

<section class="{bgColor} py-12 md:py-20">
  <div class="container max-w-4xl mx-auto px-4 md:px-8">
    <!-- Mobile: Always image first, Desktop: Based on image_first setting -->
    <div class="grid lg:grid-cols-2 gap-8 items-center md:gap-16">

      <!-- Image Container - Always first on mobile -->
      <div class="col-span-1 order-1 {image_first ? 'md:order-1' : 'md:order-2'}">
        {#if image_src}
          <img
            src={image_src}
            alt={image_alt || heading}
            class="w-full h-auto shadow-blue object-cover"
          />
        {:else}
          <div class="h-auto w-full object-cover bg-blue flex items-center justify-center">
            <span class="text-yellow">Image Placeholder</span>
          </div>
        {/if}
      </div>

      <!-- Content Container -->
      <div class="col-span-1 order-2 {image_first ? 'md:order-2' : 'md:order-1'}">
        {#if subheading}
          <p class="font-barlowc text-subheading uppercase mb-5">
            {subheading}
          </p>
        {/if}

        {#if heading}
          <h2 class="font-barlow text-heading mb-10 {textColor}">
            {heading}
          </h2>
        {/if}

        {#if content}
          <div class="font-lora text-body">
            {#if typeof content === 'string'}
              <p>{content}</p>
            {:else}
              <svelte:component this={content} />
            {/if}
          </div>
        {/if}

        {#if cta_title}
          <div class="pt-4">
            <a
              href={cta_link}
              class="button inline-flex items-center"
            >
              {cta_title}
            </a>
          </div>
        {/if}
      </div>
    </div>
  </div>
</section>
