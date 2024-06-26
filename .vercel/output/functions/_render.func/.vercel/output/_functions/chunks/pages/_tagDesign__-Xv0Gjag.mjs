/* empty css                          */
import { e as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead, g as addAttribute, k as renderSlot, h as createAstro } from '../astro_BptdOWPo.mjs';
import 'kleur/colors';
import 'html-escaper';
import { l as listMenuDesign, t as tagCard, $ as $$CardFilter } from './_code__OPD-fEfu.mjs';
import { $ as $$Image, a as $$Layout } from './404_mG3vindj.mjs';

const $$LayouteFilter = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Filter design" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <section class="max-w-[1440px] h-[400px] mx-auto py-12 flex items-start justify-between gap-8"> <article class="w-[35%] flex flex-col gap-y-3"> <h1 class="text-6xl font-bold">design</h1> <p class="text-base">
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          optio, beatae dolor ab aliquam vero debitis consequatur cum.
</p> </article> <article class="w-fit h-full"> <ul class="w-fit flex flex-wrap justify-end gap-8"> ${listMenuDesign.map((menu) => renderTemplate`<li class="w-[250px] "> <a${addAttribute(menu.href, "href")} class="flex gap-x-2 items-center py-3 border-b border-gray-300"> <div class=" p-2 bg-white rounded-xl shadow-md"> ${renderComponent($$result2, "Image", $$Image, { "src": menu.icon, "width": 24, "height": 24, "alt": menu.name })} </div> <p class=" text-lg font-semibold">${menu.name}</p> </a> </li>`)} </ul> </article> </section> ${renderSlot($$result2, $$slots["default"])} </main> ` })}`;
}, "C:/Users/Ezequiel/Documents/Desarrollo Web/Astro/Blog/blog-main/src/layouts/LayouteFilter.astro", void 0);

const $$Astro = createAstro();
const Astro = $$Astro;
async function getStaticPaths() {
  const allPosts = await Astro.glob(/* #__PURE__ */ Object.assign({"/src/pages/post/post-1-new.md": () => import('./post-1-new_CaNlstKQ.mjs').then(n => n.p),"/src/pages/post/post-2-new.md": () => import('./post-2-new_Cl-G_E5J.mjs'),"/src/pages/post/post-3-new.md": () => import('./post-3-new_BOs5HrZx.mjs'),"/src/pages/post/post-4-new.md": () => import('./post-4-new_Dc3LCMtw.mjs'),"/src/pages/post/post-5-new.md": () => import('./post-5-new_uiWmLQEE.mjs'),"/src/pages/post/post-6-new.md": () => import('./post-6-new_D7DbgYT6.mjs'),"/src/pages/post/post-7-new.md": () => import('./post-7-new_BRpM1L7W.mjs'),"/src/pages/post/post-8-new.md": () => import('./post-8-new_CHDy9uM2.mjs'),"/src/pages/post/post-9-new.md": () => import('./post-9-new_Qdp2oRFI.mjs')}), () => "/src/pages/post/*.md");
  let allUnicTags = [];
  allPosts.forEach(
    (item) => item.frontmatter.tags.map((subItem) => {
      if (allUnicTags.includes(subItem)) ; else {
        allUnicTags = [
          ...allUnicTags,
          subItem
          /* .replace(/ /g, "-") */
        ];
      }
    })
  );
  return allUnicTags.map((item) => {
    const filterPosts = allPosts.filter((subItem) => {
      return subItem.frontmatter.tags.includes(item);
    }).flat();
    return {
      params: { tagDesign: item },
      props: { posts: filterPosts }
    };
  });
}
const $$tagDesign = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$tagDesign;
  const { tagDesign } = Astro2.params;
  const { posts } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "LayouteFilter", $$LayouteFilter, { "title": tagDesign }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<ul class="max-w-[1440px] mx-auto grid grid-cols-gridPosts gap-y-8"> ${posts.map((post) => {
    const { frontmatter } = post;
    let valueTag = tagCard.filter(
      (item) => (
        /* item.name === frontmatter.tags[0] */
        frontmatter.tags.includes(item.name)
      )
    );
    return renderTemplate`${renderComponent($$result2, "CardFilter", $$CardFilter, { "image": frontmatter.image.url, "title": frontmatter.title, "description": frontmatter.description, "tag": valueTag })}`;
  })} </ul> ` })}`;
}, "C:/Users/Ezequiel/Documents/Desarrollo Web/Astro/Blog/blog-main/src/pages/design/[tagDesign].astro", void 0);

const $$file = "C:/Users/Ezequiel/Documents/Desarrollo Web/Astro/Blog/blog-main/src/pages/design/[tagDesign].astro";
const $$url = "/design/[tagDesign]";

const _tagDesign_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$tagDesign,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$LayouteFilter as $, _tagDesign_ as _ };
