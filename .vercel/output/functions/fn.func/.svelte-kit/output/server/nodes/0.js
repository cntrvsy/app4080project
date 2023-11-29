import * as universal from '../entries/pages/_layout.ts.js';
import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.04530db5.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.81ced4c7.js","_app/immutable/chunks/index.3d272ea1.js","_app/immutable/chunks/index.f5c5a73b.js","_app/immutable/chunks/stores.6d42c9a7.js","_app/immutable/chunks/ProgressBar.svelte_svelte_type_style_lang.7d286a49.js","_app/immutable/chunks/index.e80e6527.js","_app/immutable/chunks/each.e7406bfc.js","_app/immutable/chunks/navigation.13234113.js","_app/immutable/chunks/singletons.7bb06ba6.js","_app/immutable/chunks/stores.095bcb37.js"];
export const stylesheets = ["_app/immutable/assets/0.24c5d758.css","_app/immutable/assets/ProgressBar.4f1e9ba5.css"];
export const fonts = ["_app/immutable/assets/montserrat-cyrillic-ext-wght-normal.a0c152a7.woff2","_app/immutable/assets/montserrat-cyrillic-wght-normal.637f5453.woff2","_app/immutable/assets/montserrat-vietnamese-wght-normal.26a448d7.woff2","_app/immutable/assets/montserrat-latin-ext-wght-normal.6e1f71b0.woff2","_app/immutable/assets/montserrat-latin-wght-normal.bb2f9008.woff2"];
