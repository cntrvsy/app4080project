import { c as create_ssr_component, b as add_attribute, e as escape, o as each } from "../../../../chunks/ssr.js";
import { c as crud_absent } from "../../../../chunks/crud_absent.js";
import { g as getToastStore } from "../../../../chunks/stores.js";
import "../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
const upd = "/_app/immutable/assets/upd.b1c275b7.svg";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const toastStore = getToastStore();
  const showToast = (message) => {
    const t = { message };
    toastStore.trigger(t);
  };
  let db_projects = [];
  let { data } = $$props;
  let user_id = data.session?.user.id;
  let name;
  let technology;
  let link;
  console.log(user_id);
  if ($$props.showToast === void 0 && $$bindings.showToast && showToast !== void 0)
    $$bindings.showToast(showToast);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${data.session ? `<section><div class="container mx-auto flex px-5 py-8 items-center justify-center flex-col"><img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero"${add_attribute("src", upd, 0)}> <div class="text-center lg:w-2/3 w-full"><h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium">Hey, ${escape(data.session.user.email)}</h1> <p class="leading-relaxed mb-8" data-svelte-h="svelte-mcfhid">Update a project from your portfolio here, select the project.</p> <div class="flex justify-center"> <div class="card p-4 w-full text-token space-y-4"><form><label class="label"><span data-svelte-h="svelte-1utztrm">Project Name</span> <input name="name" class="input pl-4"${add_attribute("value", name, 0)}></label> <label class="label"><span data-svelte-h="svelte-1t9cvp3">Project Description</span>  <textarea name="description" rows="3" class="textarea pl-4">${escape("")}</textarea></label> <label class="label"><span data-svelte-h="svelte-4m9s0b">Project Technologies</span> <input name="technology"${add_attribute("class", "input pl-4", 0)}${add_attribute("value", technology, 0)}></label> <label class="label py-2"><span data-svelte-h="svelte-1blath">Project Link</span> <input name="link" class="input pl-4"${add_attribute("value", link, 0)}></label> <button type="submit" class="btn variant-filled-primary" data-svelte-h="svelte-jtadwe">Update</button></form></div></div></div></div></section>  <section><div class="container px-5 py-8 mx-auto"><div class="flex justify-center" data-svelte-h="svelte-1npifxd"></div>  ${db_projects.length > 0 ? `${each(db_projects, ({ id, ...item }) => {
    return `<div class="py-8 flex flex-wrap md:flex-nowrap"><div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col"><span class="font-semibold title-font">${escape(item.name)}</span></div> <div class="md:flex-grow"><h2 class="text-2xl font-medium title-font mb-2">${escape(item.technologies)}</h2> <p class="leading-relaxed">${escape(item.description)} <br></p> <br> <a${add_attribute("href", item.link, 0)} class="btn variant-filled-primary">github link</a> <button class="btn variant-filled-primary" data-svelte-h="svelte-156a7gd">Select</button></div> </div>`;
  })}` : `<p data-svelte-h="svelte-1k2vj3f">Nothing here yet.</p>`}</div></section>` : `<section data-svelte-h="svelte-n4zfgm"><div class="container mx-auto flex px-5 py-8 md:flex-row flex-col items-center"><div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10"><img class="object-cover object-center rounded" alt="hero"${add_attribute("src", crud_absent, 0)}></div> <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"><h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium">Whoops !</h1> <p class="mb-8 leading-relaxed">Something Wrong must have happened.</p></div></div></section>`}`;
});
export {
  Page as default
};
