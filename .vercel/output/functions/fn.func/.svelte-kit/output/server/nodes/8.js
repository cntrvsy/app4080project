

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/editor/delete/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.16d93b00.js","_app/immutable/chunks/scheduler.81ced4c7.js","_app/immutable/chunks/each.e7406bfc.js","_app/immutable/chunks/index.3d272ea1.js","_app/immutable/chunks/crud_absent.a5698afc.js","_app/immutable/chunks/stores.6d42c9a7.js","_app/immutable/chunks/index.f5c5a73b.js","_app/immutable/chunks/ProgressBar.svelte_svelte_type_style_lang.7d286a49.js"];
export const stylesheets = ["_app/immutable/assets/ProgressBar.4f1e9ba5.css"];
export const fonts = [];
