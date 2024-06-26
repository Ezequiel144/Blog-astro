import { renderers } from './renderers.mjs';
import { manifest } from './manifest_D6YO-0Cn.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_BeGo_xuq.mjs');
const _page1 = () => import('./chunks/404_D7EWMr_B.mjs');
const _page2 = () => import('./chunks/about_DqDoMIMH.mjs');
const _page3 = () => import('./chunks/_code__C-CNiRoX.mjs');
const _page4 = () => import('./chunks/index_DhO7Ptv1.mjs');
const _page5 = () => import('./chunks/collenctions_CzUGMC_-.mjs');
const _page6 = () => import('./chunks/contact_CJJbCPsM.mjs');
const _page7 = () => import('./chunks/_design__5QskcQRH.mjs');
const _page8 = () => import('./chunks/index_LpGgn1uB.mjs');
const _page9 = () => import('./chunks/post-1-new_DN9t6P3p.mjs');
const _page10 = () => import('./chunks/post-2-new_C0iDdLl1.mjs');
const _page11 = () => import('./chunks/post-3-new_C9gDdBY3.mjs');
const _page12 = () => import('./chunks/post-4-new_6NNd3QU-.mjs');
const _page13 = () => import('./chunks/post-5-new_B6of6t4Q.mjs');
const _page14 = () => import('./chunks/post-6-new_Dw_HygiW.mjs');
const _page15 = () => import('./chunks/post-7-new_CE8azaFN.mjs');
const _page16 = () => import('./chunks/post-8-new_BEgW-kEV.mjs');
const _page17 = () => import('./chunks/post-9-new_DSxYA-Oe.mjs');
const _page18 = () => import('./chunks/index_Bi2oW7iC.mjs');
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
    "middlewareSecret": "76af7fb1-5eec-4031-aa0c-d6b88ac17d41"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
