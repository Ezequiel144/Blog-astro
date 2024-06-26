/* empty css                          */
import { e as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead, u as unescapeHTML } from '../astro_BptdOWPo.mjs';
import 'kleur/colors';
import 'html-escaper';
import { a as $$Layout } from './404_mG3vindj.mjs';

const $$LayoutPost = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Post" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <h1>hola</h1> </main> ` })}`;
}, "C:/Users/Ezequiel/Documents/Desarrollo Web/Astro/Blog/blog-main/src/layouts/LayoutPost.astro", void 0);

const html = "<h1 id=\"about-version-8\">about version 8</h1>\n<p>Publicado el: 2024-06-17</p>\n<ul>\n<li>about version 8</li>\n</ul>\n<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.\r\nVoluptatibus, quisquam. Eos sit odit voluptatibus libero. Lorem\r\nipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus,\r\nquisquam. Eos sit odit voluptatibus libero.\r\nLorem ipsum dolor sit, amet consectetur adipisicing elit.\r\nVoluptatibus, quisquam. Eos sit odit voluptatibus libero. Lorem\r\nipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus,\r\nquisquam. Eos sit odit voluptatibus libero.</p>";

				const frontmatter = {"layout":"../../layouts/LayoutPost.astro","title":"about version 8","pubDate":"2024-05-12T00:00:00.000Z","description":"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, quisquam. Eos sit odit voluptatibus libero. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, quisquam. Eos sit odit voluptatibus libero.","author":"Juan carlos - web developer","image":{"url":"/image/pexels-pixabay-40185.jpg","alt":"web developer - website"},"tags":["javascript","react"],"category":"code","slug":"/post/post-1-new"};
				const file = "C:/Users/Ezequiel/Documents/Desarrollo Web/Astro/Blog/blog-main/src/pages/post/post-1-new.md";
				const url = "/post/post-1-new";
				function rawContent() {
					return "\r\n# about version 8\r\n\r\nPublicado el: 2024-06-17\r\n\r\n- about version 8\r\n\r\nLorem ipsum dolor sit, amet consectetur adipisicing elit.\r\nVoluptatibus, quisquam. Eos sit odit voluptatibus libero. Lorem\r\nipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus,\r\nquisquam. Eos sit odit voluptatibus libero.\r\nLorem ipsum dolor sit, amet consectetur adipisicing elit.\r\nVoluptatibus, quisquam. Eos sit odit voluptatibus libero. Lorem\r\nipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus,\r\nquisquam. Eos sit odit voluptatibus libero.\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"about-version-8","text":"about version 8"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$LayoutPost, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

const post1New = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    Content,
    compiledContent,
    default: Content,
    file,
    frontmatter,
    getHeadings,
    rawContent,
    url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$LayoutPost as $, post1New as p };
