/* empty css                          */
import { e as createComponent, r as renderTemplate, m as maybeRenderHead, i as renderComponent, h as createAstro, g as addAttribute, k as renderSlot } from '../astro_BptdOWPo.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Image, a as $$Layout } from './404_mG3vindj.mjs';

const $$Astro$2 = createAstro();
const $$Tag = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Tag;
  const { tag } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center gap-x-2 py-0.5"> <div class="p-1.5 rounded-lg shadow-md"> ${renderComponent($$result, "Image", $$Image, { "src": tag.icon, "width": 24, "height": 24, "alt": tag.name })} </div> <h5 class="text-base font-medium">${tag.name}</h5> </div>`;
}, "C:/Users/Ezequiel/Documents/Desarrollo Web/Astro/Blog/blog-main/src/components/news/Tag.astro", void 0);

const $$Astro$1 = createAstro();
const $$CardFilter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CardFilter;
  const { image, title, description, tag } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="w-[300px] h-[500px] bg-white rounded-xl shadow-lg"> ${renderComponent($$result, "Image", $$Image, { "src": image, "class": "rounded-t-lg w-full h-[250px] object-cover", "width": 300, "height": 250, "format": "webs", "alt": "image-design-card-title" })} <div class="w-full h-[300px] rounded-b-lg px-4 py-3 flex flex-col gap-y-4"> <section class="flex items-center gap-x-2 w-full overflow-auto"> ${tag.map((item) => renderTemplate`${renderComponent($$result, "Tag", $$Tag, { "tag": item })}`)} </section> <!-- <Tag tag={tag} /> --> <h2 class="text-3xl font-bold">${title}</h2> <p class="text-sm font-normal text-ellipsis w-full"> ${description} </p> </div> </li>`;
}, "C:/Users/Ezequiel/Documents/Desarrollo Web/Astro/Blog/blog-main/src/components/CardFilter.astro", void 0);

const listMenuCode = [
  {
    href: "/code/animation",
    icon: "/svg/tag-animation.svg",
    name: "animation"
  },
  {
    href: "/code/css",
    icon: "/svg/tag-css.svg",
    name: "css"
  },
  {
    href: "/code/patterns",
    icon: "/svg/tag-patterns.svg",
    name: "patterns"
  },
  {
    href: "/code/javascript",
    icon: "/svg/tag-js.svg",
    name: "javascript"
  },
  {
    href: "/code/angular",
    icon: "/svg/tag-angular.svg",
    name: "angular"
  },
  {
    href: "/code/react",
    icon: "/svg/tag-react.svg",
    name: "react"
  }
];

const $$LayouteFilterCode = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "filter Code" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <section class="max-w-[1440px] h-[400px] mx-auto py-12 flex items-start justify-between gap-8"> <article class="w-[35%] flex flex-col gap-y-3"> <h1 class="text-6xl font-bold">Code</h1> <p class="text-base">
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          optio, beatae dolor ab aliquam vero debitis consequatur cum.
</p> </article> <article class="w-fit h-full"> <ul class="w-fit flex flex-wrap justify-end gap-8"> ${listMenuCode.map((menu) => renderTemplate`<li class="w-[250px] "> <a${addAttribute(menu.href, "href")} class="flex gap-x-2 items-center py-3 border-b border-gray-300"> <div class=" p-2 bg-white rounded-xl shadow-md"> ${renderComponent($$result2, "Image", $$Image, { "src": menu.icon, "width": 24, "height": 24, "alt": menu.name })} </div> <p class=" text-lg font-semibold">${menu.name}</p> </a> </li>`)} </ul> </article> </section> ${renderSlot($$result2, $$slots["default"])} </main> ` })}`;
}, "C:/Users/Ezequiel/Documents/Desarrollo Web/Astro/Blog/blog-main/src/layouts/LayouteFilterCode.astro", void 0);

const tagCard = [
  {
    icon: "/svg/tag-quickTip.svg",
    name: "quickTip"
  },
  {
    icon: "/svg/tag-webSite.svg",
    name: "website"
  },
  {
    icon: "/svg/tag-develop.svg",
    name: "developer"
  },
  {
    icon: "/svg/tag-design.svg",
    name: "design"
  },
  {
    icon: "/svg/tag-typography.svg",
    name: "typography"
  },
  {
    icon: "/svg/tag-angular.svg",
    name: "angular"
  },
  {
    icon: "/svg/tag-animation.svg",
    name: "animation"
  },
  {
    icon: "/svg/tag-colour.svg",
    name: "colour"
  },
  {
    icon: "/svg/tag-css.svg",
    name: "css"
  },
  {
    icon: "/svg/tag-js.svg",
    name: "javascript"
  },
  {
    icon: "/svg/tag-typescript.svg",
    name: "typescript"
  },
  {
    icon: "/svg/tag-patterns.svg",
    name: "patterns"
  },
  {
    icon: "/svg/tag-react.svg",
    name: "react"
  },
  {
    icon: "/svg/tag-visualDesign.svg",
    name: "visualDesign"
  },
  {
    icon: "/svg/tag-resources.svg",
    name: "resources"
  }
];

const listMenuDesign = [
  {
    href: "/design/quickTip",
    icon: "/svg/tag-quickTip.svg",
    name: "quickTip"
  },
  {
    href: "/design/typography",
    icon: "/svg/tag-typography.svg",
    name: "typography"
  },
  {
    href: "/design/colour",
    icon: "/svg/tag-colour.svg",
    name: "colour"
  },
  {
    href: "/design/design",
    icon: "/svg/tag-design.svg",
    name: "design"
  },
  {
    href: "/design/resources",
    icon: "/svg/tag-resources.svg",
    name: "resources"
  },
  {
    href: "/design/visualDesign",
    icon: "/svg/tag-visualDesign.svg",
    name: "visualDesign"
  }
];

const $$Astro = createAstro();
const Astro = $$Astro;
async function getStaticPaths() {
  const allPosts = await Astro.glob(/* #__PURE__ */ Object.assign({"/src/pages/post/post-1-new.md": () => import('./post-1-new_CaNlstKQ.mjs').then(n => n.p),"/src/pages/post/post-2-new.md": () => import('./post-2-new_Cl-G_E5J.mjs'),"/src/pages/post/post-3-new.md": () => import('./post-3-new_BOs5HrZx.mjs'),"/src/pages/post/post-4-new.md": () => import('./post-4-new_Dc3LCMtw.mjs'),"/src/pages/post/post-5-new.md": () => import('./post-5-new_uiWmLQEE.mjs'),"/src/pages/post/post-6-new.md": () => import('./post-6-new_D7DbgYT6.mjs'),"/src/pages/post/post-7-new.md": () => import('./post-7-new_BRpM1L7W.mjs'),"/src/pages/post/post-8-new.md": () => import('./post-8-new_CHDy9uM2.mjs'),"/src/pages/post/post-9-new.md": () => import('./post-9-new_Qdp2oRFI.mjs')}), () => "/src/pages/post/*.md");
  let allUnicTags = [];
  allPosts.forEach(
    (item) => item.frontmatter.tags.map((subItem) => {
      if (!allUnicTags.includes(subItem)) {
        allUnicTags = [...allUnicTags, subItem];
      }
    })
  );
  return allUnicTags.map((item) => {
    const filterPosts = allPosts.filter((subItem) => subItem.frontmatter.tags.includes(item)).flat();
    return {
      params: { code: item },
      props: { posts: filterPosts }
    };
  });
}
const $$code = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$code;
  const { code } = Astro2.params;
  const { posts } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "LayouteFilterCode", $$LayouteFilterCode, { "title": code }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-[1440px] mx-auto"> <ul class="max-w-[1440px] mx-auto grid grid-cols-gridPosts gap-y-8"> ${posts.map((post) => {
    const { frontmatter } = post;
    let valueTag = tagCard.filter(
      (item) => (
        /* item.name === frontmatter.tags[0] */
        frontmatter.tags.includes(
          item.name
        )
      )
    );
    return renderTemplate`${renderComponent($$result2, "CardFilter", $$CardFilter, { "image": frontmatter.image.url, "title": frontmatter.title, "description": frontmatter.description, "tag": valueTag })}`;
  })} </ul> </main> ` })}`;
}, "C:/Users/Ezequiel/Documents/Desarrollo Web/Astro/Blog/blog-main/src/pages/code/[code].astro", void 0);

const $$file = "C:/Users/Ezequiel/Documents/Desarrollo Web/Astro/Blog/blog-main/src/pages/code/[code].astro";
const $$url = "/code/[code]";

const _code_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$code,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$CardFilter as $, _code_ as _, $$LayouteFilterCode as a, $$Tag as b, listMenuDesign as l, tagCard as t };
