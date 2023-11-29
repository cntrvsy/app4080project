

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/editor/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.102e7f63.js","_app/immutable/chunks/scheduler.81ced4c7.js","_app/immutable/chunks/index.3d272ea1.js","_app/immutable/chunks/navigation.35389e46.js","_app/immutable/chunks/singletons.5a393c81.js","_app/immutable/chunks/index.f5c5a73b.js","_app/immutable/chunks/crud_absent.a5698afc.js"];
export const stylesheets = [];
export const fonts = [];
