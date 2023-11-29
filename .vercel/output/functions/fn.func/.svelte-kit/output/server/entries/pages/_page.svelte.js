import { c as create_ssr_component, b as add_attribute } from "../../chunks/ssr.js";
const hero_main = "/_app/immutable/assets/hero_main.c98bf1c1.svg";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main><section><div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col"><img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero"${add_attribute("src", hero_main, 0)}> <div class="text-center lg:w-2/3 w-full"><h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium" data-svelte-h="svelte-9mner7">GITHUB PORTFOLIO</h1> <p class="leading-relaxed mb-8" data-svelte-h="svelte-1bipwxs">Welcome to our Github Portfolio application showing our groups work</p> <button class="btn variant-filled-primary" data-svelte-h="svelte-mcpp5d">Get Started</button></div></div></section></main>`;
});
export {
  Page as default
};
