

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.e212acb6.js","_app/immutable/chunks/scheduler.1c1a1096.js","_app/immutable/chunks/index.8296ea29.js","_app/immutable/chunks/stores.5697a7d2.js","_app/immutable/chunks/singletons.80536923.js","_app/immutable/chunks/paths.46b7849c.js"];
export const stylesheets = [];
export const fonts = [];
