import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_BmNTdIBE.mjs';
import { manifest } from './manifest_C2RAP2kl.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/admin/login.astro.mjs');
const _page2 = () => import('./pages/admin/posts/new.astro.mjs');
const _page3 = () => import('./pages/admin/posts/_slug_/edit.astro.mjs');
const _page4 = () => import('./pages/admin/posts.astro.mjs');
const _page5 = () => import('./pages/admin.astro.mjs');
const _page6 = () => import('./pages/posts/_slug_.astro.mjs');
const _page7 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/admin/login.astro", _page1],
    ["src/pages/admin/posts/new.astro", _page2],
    ["src/pages/admin/posts/[slug]/edit.astro", _page3],
    ["src/pages/admin/posts/index.astro", _page4],
    ["src/pages/admin/index.astro", _page5],
    ["src/pages/posts/[slug].astro", _page6],
    ["src/pages/index.astro", _page7]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "1c59d7ef-9c0a-40d9-bf83-54679b8b6a67",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
