import { c as create_ssr_component, b as add_attribute } from "../../../../chunks/ssr.js";
import { g as getToastStore } from "../../../../chunks/stores.js";
import "../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
const update = "/_app/immutable/assets/update.fe7268aa.svg";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const toastStore = getToastStore();
  const showToast = (message) => {
    const t = { message };
    toastStore.trigger(t);
  };
  let { data } = $$props;
  let email;
  let password;
  if ($$props.showToast === void 0 && $$bindings.showToast && showToast !== void 0)
    $$bindings.showToast(showToast);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<section><div class="container mx-auto flex px-5 py-8 items-center justify-center flex-col"><img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero"${add_attribute("src", update, 0)}> <div class="text-center lg:w-2/3 w-full"><h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium" data-svelte-h="svelte-m4gzmx">Enter Your email below:</h1> <p class="leading-relaxed mb-8" data-svelte-h="svelte-5ken79">We will send you the link to where you will be allowed to reset your password.</p> <div class="flex justify-center"><div class="card p-4 w-full text-token space-y-4"><form><label class="label py-2"><span data-svelte-h="svelte-1bg9cgq">Email</span> <input name="email" class="input pl-4"${add_attribute("value", email, 0)}></label> <label class="label py-2"><span data-svelte-h="svelte-1kvjhoz">Password</span> <input type="password" name="password" class="input pl-4"${add_attribute("value", password, 0)}></label> <button type="submit" class="btn variant-filled-primary" data-svelte-h="svelte-xomkp6">Update</button></form></div></div></div></div></section>`;
});
export {
  Page as default
};
