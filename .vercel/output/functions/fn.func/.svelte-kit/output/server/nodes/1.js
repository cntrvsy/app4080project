

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.322606d9.js","_app/immutable/chunks/scheduler.81ced4c7.js","_app/immutable/chunks/index.3d272ea1.js","_app/immutable/chunks/stores.095bcb37.js","_app/immutable/chunks/singletons.7bb06ba6.js","_app/immutable/chunks/index.f5c5a73b.js"];
export const stylesheets = [];
export const fonts = [];
