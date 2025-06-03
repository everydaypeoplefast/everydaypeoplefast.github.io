<script>
  import { superForm } from 'sveltekit-superforms/client';
  import { z } from 'zod';
  import { onMount } from 'svelte';

  // Mailchimp configuration
  const mailchimpConfig = {
    action: 'https://everydaypeoplefast.us20.list-manage.com/subscribe/post',
    u: 'e343d7ce9d2f1b3d391b4f62e',
    id: '855577e23b'
  };

  // Define the validation schema using Zod
  const schema = z.object({
    EMAIL: z.string().email({ message: 'Please enter a valid email address' }),
    FNAME: z.string().min(1, { message: 'First name is required' }),
    LNAME: z.string().optional(),
    ORG: z.string().optional(),
    PHONE: z.string().optional()
  });

  // Create an empty form data object matching the schema
  const defaultFormData = {
    EMAIL: '',
    FNAME: '',
    LNAME: '',
    ORG: '',
    PHONE: ''
  };

  // Status variables
  let submitting = false;
  let success = false;
  let error = null;
  let formElement;

  // Create the form with client-side validation only (for static sites)
  const { form, errors, enhance, constraints, reset } = superForm(defaultFormData, {
    validators: {
      EMAIL: (value) => {
        if (!value) return 'Email is required';
        if (!value.includes('@')) return 'Please enter a valid email address';
        return;
      },
      FNAME: (value) => {
        if (!value) return 'First name is required';
        return;
      }
    },
    SPA: true,
    validationMethod: 'oninput',
    onSubmit: () => {
      // Reset status
      submitting = true;
      success = false;
      error = null;
      return true; // Allow form submission to continue
    }
  });

  // Submit form data to Mailchimp via JSONP (since we're in a static site)
  function handleMailchimpSubmit(event) {
    event.preventDefault();

    if (Object.keys($errors).length > 0) {
      error = "Please fix the errors in the form.";
      return;
    }

    submitting = true;

    // Create a script element for JSONP request to Mailchimp
    const script = document.createElement('script');
    const callbackName = 'mcCallback_' + Math.floor(Math.random() * 1000000);

    // Get the Mailchimp endpoint for JSONP
    const baseUrl = mailchimpConfig.action.replace('/post', '/post-json');

    // Build query string from form data
    const queryParams = new URLSearchParams();
    // Add required Mailchimp fields
    queryParams.append('u', mailchimpConfig.u);
    queryParams.append('id', mailchimpConfig.id);
    // Add form data
    Object.entries($form).forEach(([key, value]) => {
      if (value) queryParams.append(key, value);
    });

    // Add the callback parameter for JSONP
    queryParams.append('c', callbackName);

    // Set the script URL
    script.src = `${baseUrl}?${queryParams.toString()}`;

    // Define the callback function
    window[callbackName] = function(response) {
      submitting = false;

      if (response.result === 'success') {
        success = true;
        reset();
      } else {
        // Extract error message from Mailchimp response
        error = response.msg || "An error occurred. Please try again.";
      }

      // Clean up
      document.body.removeChild(script);
      delete window[callbackName];
    };

    // Handle script load error
    script.onerror = function() {
      submitting = false;
      error = "Connection error. Please try again later.";
      document.body.removeChild(script);
      delete window[callbackName];
    };

    // Add the script to the document to start the request
    document.body.appendChild(script);
  }

  export let customClass = '';
  export let buttonText = 'Subscribe';
  export let heading = 'Join our newsletter';
  export let subheading = 'Stay updated with our latest news and events';
</script>

<div class="w-full max-w-2xl mx-auto p-6 rounded-lg bg-white {customClass}">
  <div class="mb-6 text-center">
    <h2 class="font-barlowc text-heading mb-2">{heading}</h2>
    {#if subheading}
      <p class="font-lora text-body">{subheading}</p>
    {/if}
  </div>

  {#if success}
    <div class="p-4 mb-4 text-center bg-green border border-green rounded-md">
      <svg class="w-6 h-6 mx-auto mb-2 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
      </svg>
      <p class="text-green font-medium">Thank you for subscribing!</p>
      <p class="text-green text-sm mt-1">You'll start receiving our updates soon.</p>
    </div>
  {:else}
    {#if error}
      <div class="p-4 mb-4 bg-red border border-red rounded-md">
        <p class="text-red text-center">{error}</p>
      </div>
    {/if}

    <form
      bind:this={formElement}
      method="POST"
      action={mailchimpConfig.action}
      on:submit={handleMailchimpSubmit}
      novalidate
      class="space-y-5"
    >
      <input type="hidden" name="u" value={mailchimpConfig.u}>
      <input type="hidden" name="id" value={mailchimpConfig.id}>
    <div class="space-y-2">
      <label for="subscribe-email" class="block font-barlowc text-subheading font-medium">Email <span class="text-red">*</span></label>
      <input
        id="subscribe-email"
        type="email"
        name="EMAIL"
        bind:value={$form.EMAIL}
        aria-invalid={$errors.EMAIL ? 'true' : 'false'}
        {...$constraints.EMAIL}
        required
        class="w-full px-3 py-2 border font-barlowc text-body font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors {$errors.EMAIL ? 'border-red' : 'border-blue'}"
      />
      {#if $errors.EMAIL}
        <span class="text-sm text-red">{$errors.EMAIL}</span>
      {/if}
    </div>

    <div class="flex flex-wrap gap-4">
      <div class="flex-grow min-w-[240px] space-y-2">
        <label for="subscribe-firstname" class="block font-barlowc text-subheading font-medium">First Name <span class="text-red">*</span></label>
        <input
          id="subscribe-firstname"
          type="text"
          name="FNAME"
          bind:value={$form.FNAME}
          aria-invalid={$errors.FNAME ? 'true' : 'false'}
          {...$constraints.FNAME}
          required
          class="w-full px-3 py-2 border font-barlowc text-body font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors {$errors.FNAME ? 'border-red' : 'border-blue'}"
        />
        {#if $errors.FNAME}
          <span class="text-sm text-red">{$errors.FNAME}</span>
        {/if}
      </div>

      <div class="flex-grow min-w-[240px] space-y-2">
        <label for="subscribe-lastname" class="block font-barlowc text-subheading font-medium">Last Name</label>
        <input
          id="subscribe-lastname"
          type="text"
          name="LNAME"
          bind:value={$form.LNAME}
          aria-invalid={$errors.LNAME ? 'true' : 'false'}
          {...$constraints.LNAME}
          class="w-full px-3 py-2 border font-barlowc text-body font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors {$errors.LNAME ? 'border-red' : 'border-blue'}"
        />
        {#if $errors.LNAME}
          <span class="text-sm text-red">{$errors.LNAME}</span>
        {/if}
      </div>
    </div>

    <div class="space-y-2">
      <label for="subscribe-organization" class="block font-barlowc text-subheading font-medium">Organization</label>
      <input
        id="subscribe-organization"
        type="text"
        name="ORG"
        bind:value={$form.ORG}
        aria-invalid={$errors.ORG ? 'true' : 'false'}
        {...$constraints.ORG}
        class="w-full px-3 py-2 border font-barlowc text-body font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors {$errors.ORG ? 'border-red' : 'border-blue'}"
      />
      {#if $errors.ORG}
        <span class="text-sm text-red">{$errors.ORG}</span>
      {/if}
    </div>

    <div class="space-y-2">
      <label for="subscribe-phone" class="block font-barlowc text-subheading font-medium">Phone</label>
      <input
        id="subscribe-phone"
        type="tel"
        name="PHONE"
        bind:value={$form.PHONE}
        aria-invalid={$errors.PHONE ? 'true' : 'false'}
        {...$constraints.PHONE}
        class="w-full px-3 py-2 border font-barlowc text-body font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors {$errors.PHONE ? 'border-red' : 'border-blue'}"
      />
      {#if $errors.PHONE}
        <span class="text-sm text-red">{$errors.PHONE}</span>
      {/if}
    </div>

    <!-- Mailchimp bot protection - required -->
    <div class="absolute -left-[5000px]" aria-hidden="true">
      <input type="text" name="b_{mailchimpConfig.u}_{mailchimpConfig.id}" tabindex="-1" value="">
    </div>

    <div class="mt-8 text-center">
      <button
        type="submit"
        disabled={submitting}
        class="button"
      >
        {#if submitting}
          <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>Processing...</span>
        {:else}
          {buttonText}
        {/if}
      </button>
    </div>
  </form>
  {/if}
</div>

<!-- No custom styles needed - using Tailwind classes -->
