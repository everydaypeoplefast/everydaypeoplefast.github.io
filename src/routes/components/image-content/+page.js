// This file ensures that the image-content demo page works with SvelteKit's static adapter
// No server-side processing is needed as this is just a demo component

export const prerender = true;

export function load() {
  return {
    title: "Image with Content Component Demo",
    description: "A demonstration of the ImageWithContent component showing various layout and styling options"
  };
}