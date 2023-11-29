import { c as create_ssr_component, h as compute_rest_props, e as escape, i as spread, j as escape_attribute_value, k as escape_object, b as add_attribute, o as each, v as validate_component } from "../../../chunks/ssr.js";
import "../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
const void_element_names = /^(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/;
function is_void(name) {
  return void_element_names.test(name) || name.toLowerCase() === "!doctype";
}
let cBase = "flex aspect-square text-surface-50 font-semibold justify-center items-center overflow-hidden isolate";
let cImage = "w-full h-full object-cover";
const Avatar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let $$restProps = compute_rest_props($$props, [
    "initials",
    "fill",
    "src",
    "fallback",
    "action",
    "actionParams",
    "background",
    "width",
    "border",
    "rounded",
    "shadow",
    "cursor"
  ]);
  let { initials = "AB" } = $$props;
  let { fill = "fill-token" } = $$props;
  let { src = "" } = $$props;
  let { fallback = "" } = $$props;
  let { action = () => {
  } } = $$props;
  let { actionParams = "" } = $$props;
  let { background = "bg-surface-400-500-token" } = $$props;
  let { width = "w-16" } = $$props;
  let { border = "" } = $$props;
  let { rounded = "rounded-full" } = $$props;
  let { shadow = "" } = $$props;
  let { cursor = "" } = $$props;
  function prunedRestProps() {
    delete $$restProps.class;
    return $$restProps;
  }
  if ($$props.initials === void 0 && $$bindings.initials && initials !== void 0)
    $$bindings.initials(initials);
  if ($$props.fill === void 0 && $$bindings.fill && fill !== void 0)
    $$bindings.fill(fill);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.fallback === void 0 && $$bindings.fallback && fallback !== void 0)
    $$bindings.fallback(fallback);
  if ($$props.action === void 0 && $$bindings.action && action !== void 0)
    $$bindings.action(action);
  if ($$props.actionParams === void 0 && $$bindings.actionParams && actionParams !== void 0)
    $$bindings.actionParams(actionParams);
  if ($$props.background === void 0 && $$bindings.background && background !== void 0)
    $$bindings.background(background);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  if ($$props.cursor === void 0 && $$bindings.cursor && cursor !== void 0)
    $$bindings.cursor(cursor);
  classesBase = `${cBase} ${background} ${width} ${border} ${rounded} ${shadow} ${cursor} ${$$props.class ?? ""}`;
  return `  <figure class="${"avatar " + escape(classesBase, true)}" data-testid="avatar">${src ? `<img${spread(
    [
      {
        class: "avatar-image " + escape(cImage, true)
      },
      {
        style: escape_attribute_value($$props.style ?? "")
      },
      { src: escape_attribute_value(src) },
      {
        alt: escape_attribute_value($$props.alt || "")
      },
      escape_object(prunedRestProps())
    ],
    {}
  )}>` : `<svg class="avatar-initials w-full h-full" viewBox="0 0 512 512"><text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" font-weight="bold"${add_attribute("font-size", 150, 0)} class="${"avatar-text " + escape(fill, true)}">${escape(String(initials).substring(0, 2).toUpperCase())}</text></svg>`}</figure>`;
});
const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["name", "color", "size", "strokeWidth", "absoluteStrokeWidth", "iconNode"]);
  let { name } = $$props;
  let { color = "currentColor" } = $$props;
  let { size = 24 } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { absoluteStrokeWidth = false } = $$props;
  let { iconNode } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.absoluteStrokeWidth === void 0 && $$bindings.absoluteStrokeWidth && absoluteStrokeWidth !== void 0)
    $$bindings.absoluteStrokeWidth(absoluteStrokeWidth);
  if ($$props.iconNode === void 0 && $$bindings.iconNode && iconNode !== void 0)
    $$bindings.iconNode(iconNode);
  return `<svg${spread(
    [
      escape_object(defaultAttributes),
      escape_object($$restProps),
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      { stroke: escape_attribute_value(color) },
      {
        "stroke-width": escape_attribute_value(absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth)
      },
      {
        class: escape_attribute_value(`lucide-icon lucide lucide-${name} ${$$props.class ?? ""}`)
      }
    ],
    {}
  )}>${each(iconNode, ([tag, attrs]) => {
    return `${((tag$1) => {
      return tag$1 ? `<${tag}${spread([escape_object(attrs)], {})}>${is_void(tag$1) ? "" : ``}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
    })(tag)}`;
  })}${slots.default ? slots.default({}) : ``}</svg>`;
});
const Icon$1 = Icon;
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2"
      }
    ],
    [
      "rect",
      {
        "width": "18",
        "height": "18",
        "x": "3",
        "y": "4",
        "rx": "2"
      }
    ],
    ["circle", { "cx": "12", "cy": "10", "r": "2" }],
    [
      "line",
      {
        "x1": "8",
        "x2": "8",
        "y1": "2",
        "y2": "4"
      }
    ],
    [
      "line",
      {
        "x1": "16",
        "x2": "16",
        "y1": "2",
        "y2": "4"
      }
    ]
  ];
  return `${validate_component(Icon$1, "Icon").$$render($$result, Object.assign({}, { name: "contact" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Contact$1 = Contact;
const Dices = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "rect",
      {
        "width": "12",
        "height": "12",
        "x": "2",
        "y": "10",
        "rx": "2",
        "ry": "2"
      }
    ],
    [
      "path",
      {
        "d": "m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6"
      }
    ],
    ["path", { "d": "M6 18h.01" }],
    ["path", { "d": "M10 14h.01" }],
    ["path", { "d": "M15 6h.01" }],
    ["path", { "d": "M18 9h.01" }]
  ];
  return `${validate_component(Icon$1, "Icon").$$render($$result, Object.assign({}, { name: "dices" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Dices$1 = Dices;
const Hourglass = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "M5 22h14" }],
    ["path", { "d": "M5 2h14" }],
    [
      "path",
      {
        "d": "M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"
      }
    ],
    [
      "path",
      {
        "d": "M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"
      }
    ]
  ];
  return `${validate_component(Icon$1, "Icon").$$render($$result, Object.assign({}, { name: "hourglass" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Hourglass$1 = Hourglass;
const Scroll_text = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4"
      }
    ],
    ["path", { "d": "M19 17V5a2 2 0 0 0-2-2H4" }],
    ["path", { "d": "M15 8h-5" }],
    ["path", { "d": "M15 12h-5" }]
  ];
  return `${validate_component(Icon$1, "Icon").$$render($$result, Object.assign({}, { name: "scroll-text" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const ScrollText = Scroll_text;
let pfp = "https://avatars.githubusercontent.com/u/85725132?u=3684d798309c29d4f339936ce3f547cf5db94125&v=4";
const Kyle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="text-gray-400 bg-gray-800 rounded-lg"><div class="container px-5 py-8 mx-auto flex flex-col"><div class="lg:w-4/6 mx-auto"><div class="flex flex-col sm:flex-row mt-10"><div class="sm:w-1/3 text-center sm:pr-8 sm:py-8"><div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-800 text-gray-600">${validate_component(Avatar, "Avatar").$$render(
    $$result,
    {
      src: pfp,
      width: "w-16",
      rounded: "rounded-3xl"
    },
    {},
    {}
  )}</div> <div class="flex flex-col items-center text-center justify-center" data-svelte-h="svelte-g7z39e"><h2 class="font-medium title-font mt-4 text-white text-lg">Kyle Sting</h2> <div class="w-12 h-1 bg-current rounded mt-2 mb-4"></div> <p class="text-base text-gray-400">Software Engineer</p></div></div> <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left" data-svelte-h="svelte-goe446"><p class="leading-relaxed text-lg mb-4">Hello, my name is kyle sting.  asoftware engineer based in Nairobi Kenya. my hobbies are swiming and dancing. my lanugage of choice is C++ and Rust.
                Currently use React Native.</p> <a class="btn variant-filled-primary" href="https://github.com/kyle-304">My GitHub</a></div></div></div>  <div class="container px-5 py-24 mx-auto flex flex-wrap"><div class="flex flex-wrap -m-4"> <div class="p-4 lg:w-1/2 md:w-full"><div class="flex border-2 rounded-lg border-gray-400 p-8 sm:flex-row flex-col"><div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full flex-shrink-0">${validate_component(Dices$1, "Dices").$$render($$result, { strokeWidth: 2, size: 48 }, {}, {})}</div> <div class="flex-grow" data-svelte-h="svelte-ywad6o"><h2 class="text-lg title-font font-medium mb-3">Skills</h2> <p class="leading-relaxed text-base">problem-solving abilities, and a strong understanding of software development principles and practices.</p></div></div></div>  <div class="p-4 lg:w-1/2 md:w-full"><div class="flex border-2 rounded-lg border-gray-400 p-8 sm:flex-row flex-col"><div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full flex-shrink-0">${validate_component(ScrollText, "ScrollText").$$render($$result, { strokeWidth: 2, size: 48 }, {}, {})}</div> <div class="flex-grow" data-svelte-h="svelte-176zjgd"><h2 class="text-lg title-font font-medium mb-3">Education</h2> <p class="leading-relaxed text-base">Bachelor of Science in Applied Computer Technology, concentration Software Engineering.</p></div></div></div>  <div class="p-4 lg:w-1/2 md:w-full"><div class="flex border-2 rounded-lg border-gray-400 p-8 sm:flex-row flex-col"><div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full flex-shrink-0">${validate_component(Hourglass$1, "Hourglass").$$render($$result, { strokeWidth: 2, size: 48 }, {}, {})}</div> <div class="flex-grow" data-svelte-h="svelte-thz3uu"><h2 class="text-lg title-font font-medium mb-3">Work Experience</h2> <p class="leading-relaxed text-base">Interned at a start up software development company name JaokO Software Solutions  for 6 months.</p></div></div></div>  <div class="p-4 lg:w-1/2 md:w-full"><div class="flex border-2 rounded-lg border-gray-400 p-8 sm:flex-row flex-col"><div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full flex-shrink-0">${validate_component(Contact$1, "Contact").$$render($$result, { strokeWidth: 2, size: 48 }, {}, {})}</div> <div class="flex-grow" data-svelte-h="svelte-19ovuu"><h2 class="text-lg title-font font-medium mb-3">Work Experience</h2> <p class="leading-relaxed text-base">you can reach on phone (0712123453) or on email (kyle-304@github.com) between the hour of 8am till 5pm.</p></div></div></div></div></div></div></section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let db_projects_kyle = [];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<main><div class="container px-5 py-8 mx-auto flex flex-col"> <section><div class="py-4">${validate_component(Kyle, "Kyle").$$render($$result, {}, {}, {})}</div> <hr class="!border-t-8 !border-double py-2">  <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col"><div class="logo-cloud grid-cols-1 lg:grid-cols-2 gap-1 mx-auto"><button class="btn variant-filled-primary py-2" data-svelte-h="svelte-1j1pxhn">Github Overview</button> <button class="btn variant-filled-primary py-2" data-svelte-h="svelte-1w4lgfx">Projects Overview</button></div></div> <hr class="!border-t-8 !border-double py-2"> ${`<div><div class="container px-5 py-8 mx-auto">${db_projects_kyle.length > 0 ? `${each(db_projects_kyle, ({ id, ...item }) => {
    return `<div class="py-8 flex flex-wrap md:flex-nowrap"><div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col"><span class="font-semibold title-font">${escape(item.name)}</span></div> <div class="md:flex-grow"><h2 class="text-2xl font-medium title-font mb-2">${escape(item.technologies)}</h2> <p class="leading-relaxed">${escape(item.description)} <br></p> <br> <a${add_attribute("href", item.link, 0)} class="btn variant-filled-primary">github link</a> </div></div> <hr class="py-2">`;
  })}` : `<p data-svelte-h="svelte-1k2vj3f">Nothing here yet.</p>`}</div></div>`}</section></div></main>`;
});
export {
  Page as default
};
