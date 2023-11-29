import { c as create_ssr_component, b as add_attribute } from "../../../chunks/ssr.js";
import { c as crud_absent } from "../../../chunks/crud_absent.js";
const crud_present = "/_app/immutable/assets/crud_present.7ccf8790.svg";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { supabase, session } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${session?.user ? `<section><div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"><div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10" data-svelte-h="svelte-1duuk29"><img class="object-cover object-center rounded" alt="hero"${add_attribute("src", crud_present, 0)}></div> <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"><h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium" data-svelte-h="svelte-sbp0k9">Welcome to the Editor !</h1> <p class="mb-8 leading-relaxed" data-svelte-h="svelte-1cu2hkk">Hey you, over here you can perform CRUD operations on your own Project Portfolios.</p> <div class="flex justify-center"><div class="logo-cloud grid-cols-1 lg:!grid-cols-3 gap-4"><button class="btn variant-filled-primary py-2 px-2" data-svelte-h="svelte-18zo27d">Create</button> <button class="btn variant-filled-primary py-2 px-2" data-svelte-h="svelte-1bvdr79">Update</button> <button class="btn variant-filled-primary py-2 px-2" data-svelte-h="svelte-wv7gz5">Delete</button></div></div></div></div></section>` : `<section><div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"><div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10" data-svelte-h="svelte-b2kxa5"><img class="object-cover object-center rounded" alt="hero"${add_attribute("src", crud_absent, 0)}></div> <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"><h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium" data-svelte-h="svelte-ridw58">Whoops ! You need to Sign In</h1> <p class="mb-8 leading-relaxed" data-svelte-h="svelte-1yyj414">Something Wrong must have happened, please click the button below to go to the authentication page.</p> <div class="flex justify-center"><button class="btn variant-outline-secondary" data-svelte-h="svelte-k96cib">Sign In</button></div></div></div></section>`}`;
});
export {
  Page as default
};
