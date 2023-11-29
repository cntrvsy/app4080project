

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.00e95366.js","_app/immutable/chunks/scheduler.81ced4c7.js","_app/immutable/chunks/index.3d272ea1.js","_app/immutable/chunks/navigation.13234113.js","_app/immutable/chunks/singletons.7bb06ba6.js","_app/immutable/chunks/index.f5c5a73b.js"];
export const stylesheets = [];
export const fonts = [];
