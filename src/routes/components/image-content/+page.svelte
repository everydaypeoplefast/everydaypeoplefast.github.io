<script>
  import ImageWithContent from '$lib/image_w_content.svelte';

  // Example image source
  const demoImage = 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80';
</script>

<svelte:head>
  <title>Image with Content Component Demo</title>
  <meta name="description" content="Demo page for the Image with Content component" />
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-3xl font-bold mb-8 text-center">Image with Content Component</h1>

  <div class="max-w-4xl mx-auto mb-16">
      <p class="text-lg text-blue mb-4">
        This versatile component displays an image alongside content with customizable layout and styling.
        The <code>image_first</code> prop controls whether the image appears on the left or right on desktop.
        On mobile, the image will always appear at the top regardless of this setting.
        The CTA button uses your project's standard 'button' class for consistent styling.
      </p>

      <div class="bg-yellow p-4">
        <pre class="text-sm overflow-x-auto">
  <ImageWithContent
    heading="Your Heading Here"
    subheading="Optional Subheading"
    content="Your content paragraph here..."
    cta_title="Learn More"
    cta_link="/your-link"
    image_alt="Descriptive alt text"
    image_first={true}
    color_scheme="light"
  />

  Note: The CTA button uses the standard 'button' class from your project's CSS.
        </pre>
      </div>
    </div>

  <div class="space-y-16">
    <!-- Example 1: Light Theme, Image on Right -->
    <div class="border border-blue overflow-hidden">
      <div class="bg-yellow px-4 py-2 border-b border-blue">
        <h2 class="font-medium">Light Theme, Image on Right (image_first=false)</h2>
        <p class="text-sm text-blue">On mobile, image will appear at the top</p>
      </div>

      <ImageWithContent
        heading="Transform Your Business with AI"
        subheading="INNOVATION"
        content="Leverage the power of artificial intelligence to streamline operations, improve customer experiences, and drive growth. Our solutions are designed to help businesses of all sizes harness the potential of AI."
        cta_title="View Solutions"
        cta_link="#"
        image_src={demoImage}
        image_alt="Team collaborating on AI solutions"
        image_first={false}
        color_scheme="light"
      />
    </div>

    <!-- Example 2: Dark Theme, Image on Left -->
    <div class="border border-blue overflow-hidden">
      <div class="bg-yellow px-4 py-2 border-b border-blue">
        <h2 class="font-medium">Dark Theme, Image on Left (image_first=true)</h2>
        <p class="text-sm text-blue">On mobile, image will appear at the top</p>
      </div>

      <ImageWithContent
        heading="Empower Your Creative Vision"
        subheading="DESIGN TOOLS"
        content="Our suite of design tools enables creatives to bring their visions to life with intuitive interfaces and powerful features. Whether you're a professional designer or just starting out, we have the tools you need."
        cta_title="Get Started"
        cta_link="#"
        image_src={demoImage}
        image_alt="Designer working on creative project"
        image_first={true}
        color_scheme="dark"
      />
    </div>

    <!-- Example 3: Light Theme, Image on Left -->
    <div class="border border-blue overflow-hidden">
      <div class="bg-yellow px-4 py-2 border-b border-blue">
        <h2 class="font-medium">Light Theme, Image on Left (image_first=true)</h2>
        <p class="text-sm text-blue">On mobile, image will appear at the top</p>
      </div>

      <ImageWithContent
        heading="Sustainable Solutions for a Better Future"
        subheading="ENVIRONMENT"
        content="We're committed to developing eco-friendly solutions that reduce environmental impact while meeting the needs of modern businesses. Join us in creating a more sustainable future."
        cta_title="Learn More"
        cta_link="#"
        image_src={demoImage}
        image_alt="Sustainable technology concept"
        image_first={true}
        color_scheme="light"
      />
    </div>

    <!-- Example 4: Dark Theme, Image on Right -->
    <div class="border border-blue overflow-hidden">
      <div class="bg-yellow px-4 py-2 border-b border-blue">
        <h2 class="font-medium">Dark Theme, Image on Right (image_first=false)</h2>
        <p class="text-sm text-blue">On mobile, image will appear at the top</p>
      </div>

      <ImageWithContent
        heading="Unlock the Power of Data"
        subheading="ANALYTICS"
        content="Our advanced analytics platform helps you transform raw data into actionable insights. Make data-driven decisions with confidence and stay ahead of the competition."
        cta_title="View Dashboard"
        cta_link="#"
        image_src={demoImage}
        image_alt="Data analytics dashboard"
        image_first={false}
        color_scheme="dark"
      />
    </div>
  </div>
</div>
