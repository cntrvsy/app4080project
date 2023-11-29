import { c as create_ssr_component, b as add_attribute, e as escape } from "../../../../chunks/ssr.js";
import { c as crud_absent } from "../../../../chunks/crud_absent.js";
import { g as getToastStore } from "../../../../chunks/stores.js";
import "../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
const insert = "/_app/immutable/assets/insert.0a832cd4.svg";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const toastStore = getToastStore();
  const showToast = (message) => {
    const t = { message };
    toastStore.trigger(t);
  };
  let { data } = $$props;
  data.session?.user.id;
  let name;
  let technology;
  let link;
  console.log(data.session?.user);
  if ($$props.showToast === void 0 && $$bindings.showToast && showToast !== void 0)
    $$bindings.showToast(showToast);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${data.session ? `<section><div class="container mx-auto flex px-5 py-8 items-center justify-center flex-col"><img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero"${add_attribute("src", insert, 0)}> <div class="text-center lg:w-2/3 w-full"><h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium">Hey, ${escape(data.session.user.email)}</h1> <p class="leading-relaxed mb-8" data-svelte-h="svelte-oee17y">Add a project to your portfolio here.</p> <div class="flex justify-center"><div class="card p-4 w-full text-token space-y-4"><form><label class="label"><span data-svelte-h="svelte-1utztrm">Project Name</span> <input name="name" class="input pl-4"${add_attribute("value", name, 0)}></label> <label class="label"><span data-svelte-h="svelte-1t9cvp3">Project Description</span>  <textarea name="description" rows="3" class="textarea pl-4">${escape("")}</textarea></label> <label class="label"><span data-svelte-h="svelte-4m9s0b">Project Technologies</span> <input name="technology"${add_attribute("class", "input pl-4", 0)}${add_attribute("value", technology, 0)}></label> <label class="label py-2"><span data-svelte-h="svelte-1blath">Project Link</span> <input name="link" class="input pl-4"${add_attribute("value", link, 0)}></label> <button type="submit" class="btn variant-filled-primary" data-svelte-h="svelte-qlsbod">Create</button></form></div></div></div></div></section>` : `<section data-svelte-h="svelte-n4zfgm"><div class="container mx-auto flex px-5 py-8 md:flex-row flex-col items-center"><div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10"><img class="object-cover object-center rounded" alt="hero"${add_attribute("src", crud_absent, 0)}></div> <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"><h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium">Whoops !</h1> <p class="mb-8 leading-relaxed">Something Wrong must have happened.</p></div></div></section>`}`;
});
export {
  Page as default
};
