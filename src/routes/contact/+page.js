// This file ensures that the contact page works with SvelteKit's static adapter
// No server-side processing is needed as form will submit directly to Mailchimp

export const prerender = true;

export function load() {
  return {
    // You can add any static data you want to provide to the page here
    title: "Contact Us",
    description: "Get in touch with our team and stay connected"
  };
}