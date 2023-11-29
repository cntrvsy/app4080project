

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.3b252451.js","_app/immutable/chunks/scheduler.81ced4c7.js","_app/immutable/chunks/index.3d272ea1.js","_app/immutable/chunks/stores.c4ddaa53.js","_app/immutable/chunks/singletons.5a393c81.js","_app/immutable/chunks/index.f5c5a73b.js"];
export const stylesheets = [];
export const fonts = [];
