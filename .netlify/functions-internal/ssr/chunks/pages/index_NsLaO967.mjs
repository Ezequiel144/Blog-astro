/* empty css                          */
import { e as createComponent, r as renderTemplate, i as renderComponent, h as createAstro, m as maybeRenderHead } from '../astro__F21ntD0.mjs';
import 'kleur/colors';
import 'html-escaper';
import { t as tagCard, $ as $$CardFilter, a as $$LayouteFilterCode, b as $$Tag } from './_code__CS7lJ-wG.mjs';
import { $ as $$LayouteFilter } from './_tagDesign__CM04lI_E.mjs';
import { $ as $$Image, a as $$Layout } from './404_B10OF1pN.mjs';

const $$Astro$7 = createAstro();
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Index$2;
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"/src/pages/post/post-1-new.md": () => import('./post-1-new_BbDHUk6W.mjs').then(n => n.p),"/src/pages/post/post-2-new.md": () => import('./post-2-new_BfIyVI3g.mjs'),"/src/pages/post/post-3-new.md": () => import('./post-3-new_DGIGTghI.mjs'),"/src/pages/post/post-4-new.md": () => import('./post-4-new_DS_B8R5C.mjs'),"/src/pages/post/post-5-new.md": () => import('./post-5-new_tgDFG4Pd.mjs'),"/src/pages/post/post-6-new.md": () => import('./post-6-new_Dxf6v4hw.mjs'),"/src/pages/post/post-7-new.md": () => import('./post-7-new_B9f4jZ2M.mjs'),"/src/pages/post/post-8-new.md": () => import('./post-8-new_Cu4n2rx6.mjs'),"/src/pages/post/post-9-new.md": () => import('./post-9-new_HdwxQhuB.mjs')}), () => "/src/pages/post/*.md");
  const filterCode = allPosts.filter(
    (post) => post.frontmatter.category === "code"
  );
  return renderTemplate`${renderComponent($$result, "LayouteFilterCode", $$LayouteFilterCode, { "title": "code" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="w-full min-h-screen max-w-[1440px] mx-auto"> <ul class="max-w-[1440px] mx-auto grid grid-cols-gridPosts gap-y-8"> ${filterCode.map((item) => {
    const { image, tags, title, description } = item.frontmatter;
    let valueTag = tagCard.filter(
      (item2) => (
        /* item.name === tags[0] */
        tags.includes(item2.name)
      )
    );
    return renderTemplate`${renderComponent($$result2, "CardFilter", $$CardFilter, { "image": image.url, "title": title, "description": description, "tag": valueTag })}`;
  })} </ul> </section> ` })}`;
}, "C:/Users/Ezequiel/Documents/Desarrollo Web/Astro/Blog/blog-main/src/pages/code/index.astro", void 0);

const $$file$2 = "C:/Users/Ezequiel/Documents/Desarrollo Web/Astro/Blog/blog-main/src/pages/code/index.astro";
const $$url$2 = "/code";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$2,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$6 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Index$1;
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"/src/pages/post/post-1-new.md": () => import('./post-1-new_BbDHUk6W.mjs').then(n => n.p),"/src/pages/post/post-2-new.md": () => import('./post-2-new_BfIyVI3g.mjs'),"/src/pages/post/post-3-new.md": () => import('./post-3-new_DGIGTghI.mjs'),"/src/pages/post/post-4-new.md": () => import('./post-4-new_DS_B8R5C.mjs'),"/src/pages/post/post-5-new.md": () => import('./post-5-new_tgDFG4Pd.mjs'),"/src/pages/post/post-6-new.md": () => import('./post-6-new_Dxf6v4hw.mjs'),"/src/pages/post/post-7-new.md": () => import('./post-7-new_B9f4jZ2M.mjs'),"/src/pages/post/post-8-new.md": () => import('./post-8-new_Cu4n2rx6.mjs'),"/src/pages/post/post-9-new.md": () => import('./post-9-new_HdwxQhuB.mjs')}), () => "/src/pages/post/*.md");
  const filterDesign = allPosts.filter(
    (post) => post.frontmatter.category === "design"
  );
  return renderTemplate`${renderComponent($$result, "LayouteFilter", $$LayouteFilter, { "title": "blog-design" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="w-full min-h-screen"> <ul class="max-w-[1440px] mx-auto grid grid-cols-gridPosts gap-y-8"> ${filterDesign.map((item) => {
    const { image, tags, title, description } = item.frontmatter;
    let valueTag = tagCard.filter(
      (item2) => (
        /* item.name === tags[0] */
        tags.includes(item2.name)
      )
    );
    console.log(valueTag);
    return renderTemplate`${renderComponent($$result2, "CardFilter", $$CardFilter, { "image": image.url, "title": title, "description": description, "tag": valueTag })}`;
  })} </ul> </section> ` })}`;
}, "C:/Users/Ezequiel/Documents/Desarrollo Web/Astro/Blog/blog-main/src/pages/design/index.astro", void 0);

const $$file$1 = "C:/Users/Ezequiel/Documents/Desarrollo Web/Astro/Blog/blog-main/src/pages/design/index.astro";
const $$url$1 = "/design";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$5 = createAstro();
const $$CardMini = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$CardMini;
  const { tag, title, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="bg-white rounded-lg w-[30%] min-h-[320px] p-10 flex flex-col gap-y-6 shadow-lg"> ${renderComponent($$result, "Tag", $$Tag, { "tag": tag })} <section class="flex flex-col gap-y-2"> <h3 class="text-3xl font-bold">${title}</h3> <p class="font-normal text-sm">${description}</p> </section> </li>`;
}, "C:/Users/Ezequiel/Documents/Desarrollo Web/Astro/Blog/blog-main/src/components/CardMini.astro", void 0);

const $$Astro$4 = createAstro();
const $$Code = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Code;
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"/src/pages/post/post-1-new.md": () => import('./post-1-new_BbDHUk6W.mjs').then(n => n.p),"/src/pages/post/post-2-new.md": () => import('./post-2-new_BfIyVI3g.mjs'),"/src/pages/post/post-3-new.md": () => import('./post-3-new_DGIGTghI.mjs'),"/src/pages/post/post-4-new.md": () => import('./post-4-new_DS_B8R5C.mjs'),"/src/pages/post/post-5-new.md": () => import('./post-5-new_tgDFG4Pd.mjs'),"/src/pages/post/post-6-new.md": () => import('./post-6-new_Dxf6v4hw.mjs'),"/src/pages/post/post-7-new.md": () => import('./post-7-new_B9f4jZ2M.mjs'),"/src/pages/post/post-8-new.md": () => import('./post-8-new_Cu4n2rx6.mjs'),"/src/pages/post/post-9-new.md": () => import('./post-9-new_HdwxQhuB.mjs')}), () => "/src/pages/post/*.md");
  const filterTagsCode = allPosts.filter((post) => post.frontmatter.category === "code").slice(0, 6);
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto max-w-[1440px] py-12"> <article class="flex items-center justify-between max-w-[1440px] mx-auto mb-5"> <h2 class="text-3xl font-bold">
popular <span class="text-yellow-500">code</span> </h2> <p class="text-base font-semibold">explore code</p> </article> <ul class="flex flex-wrap justify-between gap-10"> ${filterTagsCode.map((card) => {
    const { tags, title, description } = card.frontmatter;
    let valueTag = tagCard.filter(
      (item) => item.name === tags[0]
    );
    return renderTemplate`${renderComponent($$result, "CardMini", $$CardMini, { "tag": valueTag[0], "title": title, "description": description })}`;
  })} </ul> </section>`;
}, "C:/Users/Ezequiel/Documents/Desarrollo Web/Astro/Blog/blog-main/src/components/code/Code.astro", void 0);

const $$Astro$3 = createAstro();
const $$Design = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Design;
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"/src/pages/post/post-1-new.md": () => import('./post-1-new_BbDHUk6W.mjs').then(n => n.p),"/src/pages/post/post-2-new.md": () => import('./post-2-new_BfIyVI3g.mjs'),"/src/pages/post/post-3-new.md": () => import('./post-3-new_DGIGTghI.mjs'),"/src/pages/post/post-4-new.md": () => import('./post-4-new_DS_B8R5C.mjs'),"/src/pages/post/post-5-new.md": () => import('./post-5-new_tgDFG4Pd.mjs'),"/src/pages/post/post-6-new.md": () => import('./post-6-new_Dxf6v4hw.mjs'),"/src/pages/post/post-7-new.md": () => import('./post-7-new_B9f4jZ2M.mjs'),"/src/pages/post/post-8-new.md": () => import('./post-8-new_Cu4n2rx6.mjs'),"/src/pages/post/post-9-new.md": () => import('./post-9-new_HdwxQhuB.mjs')}), () => "/src/pages/post/*.md");
  const filterTagsdesign = allPosts.filter((post) => post.frontmatter.category === "design").slice(0, 6);
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto max-w-[1440px] py-12"> <article class="flex items-center justify-between max-w-[1440px] mx-auto mb-5"> <h2 class="text-3xl font-bold">
popular <span class="text-orange-500">design</span> </h2> <p class="text-base font-semibold">explore design</p> </article> <ul class="flex flex-wrap justify-between gap-10"> ${filterTagsdesign.map((card) => {
    const { tags, title, description } = card.frontmatter;
    let valueTag = tagCard.filter(
      (item) => item.name === tags[0]
    );
    return renderTemplate`${renderComponent($$result, "CardMini", $$CardMini, { "tag": valueTag[0], "title": title, "description": description })}`;
  })} </ul> </section>`;
}, "C:/Users/Ezequiel/Documents/Desarrollo Web/Astro/Blog/blog-main/src/components/design/Design.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col gap-y-2"> <h1 class="text-5xl text-center mx-auto font-extrabold max-w-[380px]">
exploring web design craft
</h1> <p class="text-base font-normal mx-auto text-center max-w-[280px]">
tips and tutorials about the design and build of web interfaces
</p> <article class="flex gap-3 w-fit mx-auto"> <div class="flex gap-x-2 items-center"> <div class="p-2 rounded-full bg-darkGreen-300"> ${renderComponent($$result, "Image", $$Image, { "src": "/svg/header-design.svg", "width": 16, "height": 16, "alt": "explore design" })} </div> <p>explore design</p> </div> <div class="flex gap-x-2 items-center"> <div class="p-2 rounded-full bg-darkGreen-300 flex items-center justify-center"> ${renderComponent($$result, "Image", $$Image, { "src": "/svg/header-code.svg", "width": 16, "height": 16, "alt": "explore code" })} </div> <p>explore code</p> </div> </article> </section>`;
}, "C:/Users/Ezequiel/Documents/Desarrollo Web/Astro/Blog/blog-main/src/components/hero/Hero.astro", void 0);

const $$Astro$2 = createAstro();
const $$Date = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Date;
  const { date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center gap-x-2"> <div class="p-1.5 rounded-lg shadow-md  "> ${renderComponent($$result, "Image", $$Image, { "src": "/svg/tag-calendar.svg", "width": 24, "height": 24, "alt": "web site" })} </div> <p class="text-base font-medium">${date.slice(0, 10).split("-").reverse().join("/")}</p> </div>`;
}, "C:/Users/Ezequiel/Documents/Desarrollo Web/Astro/Blog/blog-main/src/components/news/Date.astro", void 0);

const $$Astro$1 = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Card;
  const { image, tag, date, title, description } = Astro2.props;
  console.log(tag);
  return renderTemplate`${maybeRenderHead()}<li class="w-[48%] h-full rounded-lg shadow-lg">  ${renderComponent($$result, "Image", $$Image, { "src": image, "class": "rounded-t-lg object-cover h-[60%] w-full", "width": 620, "height": 300, "alt": "image blog" })}  <section class="flex flex-col justify-between bg-white h-[40%] rounded-b-lg gap-y-5 p-10">  <article class="flex items-center gap-x-5"> ${renderComponent($$result, "Tag", $$Tag, { "tag": tag })} ${renderComponent($$result, "Date", $$Date, { "date": date })} </article> <h3 class="text-5xl font-bold">${title}</h3> <p class="text-base font-regular">${description}</p> </section> </li>`;
}, "C:/Users/Ezequiel/Documents/Desarrollo Web/Astro/Blog/blog-main/src/components/news/Card.astro", void 0);

const $$Astro = createAstro();
const $$New = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$New;
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"/src/pages/post/post-1-new.md": () => import('./post-1-new_BbDHUk6W.mjs').then(n => n.p),"/src/pages/post/post-2-new.md": () => import('./post-2-new_BfIyVI3g.mjs'),"/src/pages/post/post-3-new.md": () => import('./post-3-new_DGIGTghI.mjs'),"/src/pages/post/post-4-new.md": () => import('./post-4-new_DS_B8R5C.mjs'),"/src/pages/post/post-5-new.md": () => import('./post-5-new_tgDFG4Pd.mjs'),"/src/pages/post/post-6-new.md": () => import('./post-6-new_Dxf6v4hw.mjs'),"/src/pages/post/post-7-new.md": () => import('./post-7-new_B9f4jZ2M.mjs'),"/src/pages/post/post-8-new.md": () => import('./post-8-new_Cu4n2rx6.mjs'),"/src/pages/post/post-9-new.md": () => import('./post-9-new_HdwxQhuB.mjs')}), () => "/src/pages/post/*.md");
  const postFilterNews = allPosts.sort(
    (item1, item2) => new Date(item2.frontmatter.pubDate).getTime() - new Date(item1.frontmatter.pubDate).getTime()
  ).slice(0, 4);
  console.log(postFilterNews);
  return renderTemplate`${maybeRenderHead()}<section class="max-w-[1440px] mx-auto py-12"> <article class="flex items-center justify-between max-w-[1440px] mx-auto mb-5"> <h2 class="text-3xl font-bold">What´s new</h2> <p class="text-base font-semibold">view the archive</p> </article> <ul class="flex flex-wrap justify-between gap-y-11"> ${postFilterNews.map((data) => {
    const { image, tags, pubDate, title, description } = data.frontmatter;
    let valueTag = tagCard.filter(
      (item) => item.name === tags[0]
    );
    return renderTemplate`${renderComponent($$result, "Card", $$Card, { "image": image.url, "tag": valueTag[0], "date": pubDate, "title": title, "description": description })}`;
  })} </ul> </section>`;
}, "C:/Users/Ezequiel/Documents/Desarrollo Web/Astro/Blog/blog-main/src/components/news/New.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "blog-inicio" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="w-full min-h-screen"> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "New", $$New, {})} ${renderComponent($$result2, "Design", $$Design, {})} ${renderComponent($$result2, "Code", $$Code, {})} <!-- <ContactUs /> --> </main> ` })}`;
}, "C:/Users/Ezequiel/Documents/Desarrollo Web/Astro/Blog/blog-main/src/pages/index.astro", void 0);

const $$file = "C:/Users/Ezequiel/Documents/Desarrollo Web/Astro/Blog/blog-main/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index$1 as a, index as b, index$2 as i };
