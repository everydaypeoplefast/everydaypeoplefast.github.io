<script>
  import Subscribe from '$lib/subscribe.svelte';

  const mailchimpConfig = {
    action: 'https://everydaypeoplefast.us20.list-manage.com/subscribe/post',
    u: 'e343d7ce9d2f1b3d391b4f62e',
    id: '855577e23b'
  }
</script>

<div class="max-w-2xl mx-auto px-4">
    <p class="font-barlowc text-subheading uppercase mb-5">Contact Us</p>
    <h1 class="font-barlow text-heading mb-10">We aim to move beyond our shock and grief to address the ongoing threat of white supremacist violence in a more direct way.</h1>
    <div class="font-lora text-body mb-12">As Everyday People fed up and alinve in this time and place, we have experienced and born witness to too many atrocities, and while we are shocked, we will not let our shock be the only result of what we have witnessed and experienced. We will also act and organize.</div>

    <Subscribe
      heading="Join our community"
      subheading="Subscribe to receive updates and stay connected with our work"
      buttonText="Submit"
      customClass=""
    />
</div>
