// This file ensures that the subscribe page works with SvelteKit's static adapter
// No server-side processing is needed as form will submit directly to Mailchimp

export const prerender = true;

export function load() {
  return {
    // You can add any static data you want to provide to the page here
    title: "Subscribe to our Newsletter",
    description: "Join our newsletter to stay updated with our latest news and events"
  };
}