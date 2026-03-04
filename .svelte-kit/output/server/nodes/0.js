import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.03756faa.js","_app/immutable/chunks/scheduler.1c1a1096.js","_app/immutable/chunks/index.8296ea29.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/paths.46b7849c.js","_app/immutable/chunks/stores.5697a7d2.js","_app/immutable/chunks/singletons.80536923.js"];
export const stylesheets = ["_app/immutable/assets/0.1c7851a2.css"];
export const fonts = [];
