import { renderers } from './renderers.mjs';
import { manifest } from './manifest_CdY6NxoA.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_B2d5w5wq.mjs');
const _page1 = () => import('./chunks/404_BobetPMv.mjs');
const _page2 = () => import('./chunks/about_B29XiYXB.mjs');
const _page3 = () => import('./chunks/_code__LZWFm-Ln.mjs');
const _page4 = () => import('./chunks/index_DHYODn2s.mjs');
const _page5 = () => import('./chunks/collenctions_BKYrM0sW.mjs');
const _page6 = () => import('./chunks/contact_DV6kG8YI.mjs');
const _page7 = () => import('./chunks/_design__clHl6vUd.mjs');
const _page8 = () => import('./chunks/index_ygF5oNUh.mjs');
const _page9 = () => import('./chunks/post-1-new_BvzZL-NW.mjs');
const _page10 = () => import('./chunks/post-2-new_BM0bIvLY.mjs');
const _page11 = () => import('./chunks/post-3-new_DiWtAy-5.mjs');
const _page12 = () => import('./chunks/post-4-new_BhsNzi7B.mjs');
const _page13 = () => import('./chunks/post-5-new_DtuXIsGg.mjs');
const _page14 = () => import('./chunks/post-6-new_DP50SFTF.mjs');
const _page15 = () => import('./chunks/post-7-new_BUqmHFTp.mjs');
const _page16 = () => import('./chunks/post-8-new_jS7crMh_.mjs');
const _page17 = () => import('./chunks/post-9-new_BfOini8r.mjs');
const _page18 = () => import('./chunks/index_C4F6avDt.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/code/[code].astro", _page3],
    ["src/pages/code/index.astro", _page4],
    ["src/pages/collenctions.astro", _page5],
    ["src/pages/contact.astro", _page6],
    ["src/pages/design/[design].astro", _page7],
    ["src/pages/design/index.astro", _page8],
    ["src/pages/post/post-1-new.md", _page9],
    ["src/pages/post/post-2-new.md", _page10],
    ["src/pages/post/post-3-new.md", _page11],
    ["src/pages/post/post-4-new.md", _page12],
    ["src/pages/post/post-5-new.md", _page13],
    ["src/pages/post/post-6-new.md", _page14],
    ["src/pages/post/post-7-new.md", _page15],
    ["src/pages/post/post-8-new.md", _page16],
    ["src/pages/post/post-9-new.md", _page17],
    ["src/pages/index.astro", _page18]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "31e1aed9-cca4-4165-8c99-f996760089df"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
