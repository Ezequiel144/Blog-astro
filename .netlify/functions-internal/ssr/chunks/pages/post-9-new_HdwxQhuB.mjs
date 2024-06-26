/* empty css                          */
import { e as createComponent, r as renderTemplate, i as renderComponent, u as unescapeHTML } from '../astro__F21ntD0.mjs';
import 'kleur/colors';
import { $ as $$LayoutPost } from './post-1-new_BbDHUk6W.mjs';

const html = "<h1 id=\"about-version-8\">about version 8</h1>\n<p>Publicado el: 2024-06-17</p>\n<ul>\n<li>about version 8</li>\n</ul>\n<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.\r\nVoluptatibus, quisquam. Eos sit odit voluptatibus libero. Lorem\r\nipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus,\r\nquisquam. Eos sit odit voluptatibus libero.\r\nLorem ipsum dolor sit, amet consectetur adipisicing elit.\r\nVoluptatibus, quisquam. Eos sit odit voluptatibus libero. Lorem\r\nipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus,\r\nquisquam. Eos sit odit voluptatibus libero.</p>";

				const frontmatter = {"layout":"../../layouts/LayoutPost.astro","title":"about version 8","pubDate":"2024-05-12T00:00:00.000Z","description":"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, quisquam. Eos sit odit voluptatibus libero. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, quisquam. Eos sit odit voluptatibus libero.","author":"Juan carlos - web developer","image":{"url":"/image/pexels-pixabay-40185.jpg","alt":"web developer - website"},"tags":["website","code","javascript"],"category":"code","slug":"/post/post-9-new"};
				const file = "C:/Users/Ezequiel/Documents/Desarrollo Web/Astro/Blog/blog-main/src/pages/post/post-9-new.md";
				const url = "/post/post-9-new";
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

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
