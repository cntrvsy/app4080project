import * as server from '../entries/pages/auth/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/auth/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/auth/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.07a9e197.js","_app/immutable/chunks/scheduler.81ced4c7.js","_app/immutable/chunks/index.3d272ea1.js","_app/immutable/chunks/navigation.13234113.js","_app/immutable/chunks/singletons.7bb06ba6.js","_app/immutable/chunks/index.f5c5a73b.js","_app/immutable/chunks/index.e80e6527.js","_app/immutable/chunks/stores.6d42c9a7.js","_app/immutable/chunks/ProgressBar.svelte_svelte_type_style_lang.7d286a49.js","_app/immutable/chunks/stores.095bcb37.js","_app/immutable/chunks/parse.7d180a0f.js"];
export const stylesheets = ["_app/immutable/assets/3.984e8fd2.css","_app/immutable/assets/ProgressBar.4f1e9ba5.css"];
export const fonts = [];
