/* empty css                          */
import { e as createComponent, r as renderTemplate, i as renderComponent, h as createAstro, m as maybeRenderHead, g as addAttribute } from '../astro__F21ntD0.mjs';
import 'kleur/colors';
import 'html-escaper';
import { c as $$Layout } from './404_CYc0shFE.mjs';

const $$Astro = createAstro();
const $$Collenctions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Collenctions;
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"/src/pages/post/post-1-new.md": () => import('./post-1-new_Cq426BW3.mjs').then(n => n.p),"/src/pages/post/post-2-new.md": () => import('./post-2-new_BTRaNhd1.mjs'),"/src/pages/post/post-3-new.md": () => import('./post-3-new_DlkGQD4i.mjs'),"/src/pages/post/post-4-new.md": () => import('./post-4-new_CmI7YNFQ.mjs'),"/src/pages/post/post-5-new.md": () => import('./post-5-new_BiwANr2V.mjs'),"/src/pages/post/post-6-new.md": () => import('./post-6-new_BYliB7Zk.mjs'),"/src/pages/post/post-7-new.md": () => import('./post-7-new_BzRFXCTB.mjs'),"/src/pages/post/post-8-new.md": () => import('./post-8-new_EKaFtBjX.mjs'),"/src/pages/post/post-9-new.md": () => import('./post-9-new_eTUNhKn4.mjs')}), () => "/src/pages/post/*.md");
  const collectionCode = allPosts.filter(
    (post) => post.frontmatter.category === "code"
  );
  const collectionDesign = allPosts.filter(
    (post) => post.frontmatter.category === "design"
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "page collections" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-[1440px] mx-auto flex items-start justify-between py-12"> <section class="w-[35%] flex flex-col gap-y-3"> <h1 class="text-6xl font-bold">Collection</h1> <p class="text-base">
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        optio, beatae dolor ab aliquam vero debitis consequatur cum.
</p> </section> <section> <article class="w-[600px] flex flex-col gap-y-10"> <!-- <h4 class="font-bold text-4xl">accessibility</h4> --> ${collectionCode && renderTemplate`<table class="table-auto bg-white rounded-md w-full"> <colgroup> <col class="border-blue-400"> </colgroup> <caption class="text-left font-bold text-4xl pb-2">
Code
</caption> <tbody> ${collectionCode.map((code) => renderTemplate`<tr class="w-full"> <th class="px-2 py-1.5 text-left hover:bg-green-200 transition-all duration-300"> <a${addAttribute(code.frontmatter.slug, "href")}>${code.frontmatter.title}</a> </th> </tr>`)} </tbody> </table>`} ${collectionDesign && renderTemplate`<table class="table-auto bg-white rounded-md w-full"> <colgroup> <col class="border-blue-400"> </colgroup> <caption class="text-left font-bold text-4xl pb-2">
Design
</caption> <tbody> ${collectionDesign.map((design) => renderTemplate`<tr class="w-full"> <th class="px-2 py-1.5 text-left hover:bg-green-200 transition-all duration-300"> <a${addAttribute(design.frontmatter.slug, "href")}>${design.frontmatter.title}</a> </th> </tr>`)} </tbody> </table>`} </article> </section> </main> ` })}`;
}, "C:/Users/Ezequiel/Documents/Desarrollo Web/Astro/Blog/blog-main/src/pages/collenctions.astro", void 0);

const $$file = "C:/Users/Ezequiel/Documents/Desarrollo Web/Astro/Blog/blog-main/src/pages/collenctions.astro";
const $$url = "/collenctions";

export { $$Collenctions as default, $$file as file, $$url as url };
