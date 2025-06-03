<script>
  import Subscribe from '$lib/subscribe.svelte';
  import { browser } from '$app/environment';
</script>

<svelte:head>
  <title>Subscribe to our Newsletter</title>
  <meta name="description" content="Join our newsletter to stay updated with our latest news and events" />
</svelte:head>

<div class="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
  <div class="flex flex-col items-center gap-8">
    <h1 class="text-4xl md:text-5xl text-center font-bold mb-2">Stay Connected</h1>
    <p class="max-w-2xl text-center text-lg text-gray-600 leading-relaxed">
      Join our community to receive updates, event invitations, and resources. 
      We respect your privacy and will never share your information with third parties.
    </p>
    
    <Subscribe 
      heading="Subscribe to our newsletter"
      subheading="Get the latest updates delivered directly to your inbox"
      buttonText="Join Now"
      customClass="shadow-md"
    />
    
    <div class="max-w-2xl w-full mt-8">
      <h2 class="text-2xl font-semibold mb-4">Why Subscribe?</h2>
      <ul class="space-y-3">
        <li class="pl-6 relative">
          <span class="absolute left-0 text-blue-600">✓</span>
          Receive timely updates about our initiatives
        </li>
        <li class="pl-6 relative">
          <span class="absolute left-0 text-blue-600">✓</span>
          Learn about upcoming events and opportunities
        </li>
        <li class="pl-6 relative">
          <span class="absolute left-0 text-blue-600">✓</span>
          Access exclusive resources and content
        </li>
        <li class="pl-6 relative">
          <span class="absolute left-0 text-blue-600">✓</span>
          Connect with our community
        </li>
      </ul>
    </div>
  </div>
</div>

<!-- No custom styles needed - using Tailwind classes -->