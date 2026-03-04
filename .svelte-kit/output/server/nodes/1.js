

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.46e31294.js","_app/immutable/chunks/scheduler.1c1a1096.js","_app/immutable/chunks/index.8296ea29.js","_app/immutable/chunks/stores.6935b1a1.js","_app/immutable/chunks/singletons.1bf6e33a.js","_app/immutable/chunks/paths.a643adb8.js"];
export const stylesheets = [];
export const fonts = [];
