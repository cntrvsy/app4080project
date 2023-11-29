import * as server from '../entries/pages/home/_page.server.ts.js';

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/home/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/home/+page.server.ts";
export const imports = ["_app/immutable/nodes/10.4307c6fa.js","_app/immutable/chunks/scheduler.81ced4c7.js","_app/immutable/chunks/index.3d272ea1.js","_app/immutable/chunks/each.e7406bfc.js","_app/immutable/chunks/index.e80e6527.js","_app/immutable/chunks/ProgressBar.svelte_svelte_type_style_lang.7d286a49.js","_app/immutable/chunks/index.f5c5a73b.js"];
export const stylesheets = ["_app/immutable/assets/ProgressBar.4f1e9ba5.css"];
export const fonts = [];
