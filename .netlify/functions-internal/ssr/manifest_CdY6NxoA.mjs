import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import './chunks/astro_DgodCIhJ.mjs';
import 'clsx';
import 'html-escaper';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"code/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/code","isIndex":true,"type":"page","pattern":"^\\/code\\/?$","segments":[[{"content":"code","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/code/index.astro","pathname":"/code","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"collenctions/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/collenctions","isIndex":false,"type":"page","pattern":"^\\/collenctions\\/?$","segments":[[{"content":"collenctions","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/collenctions.astro","pathname":"/collenctions","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"contact/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"design/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/design","isIndex":true,"type":"page","pattern":"^\\/design\\/?$","segments":[[{"content":"design","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/design/index.astro","pathname":"/design","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"post/post-1-new/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/post/post-1-new","isIndex":false,"type":"page","pattern":"^\\/post\\/post-1-new\\/?$","segments":[[{"content":"post","dynamic":false,"spread":false}],[{"content":"post-1-new","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/post/post-1-new.md","pathname":"/post/post-1-new","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"post/post-2-new/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/post/post-2-new","isIndex":false,"type":"page","pattern":"^\\/post\\/post-2-new\\/?$","segments":[[{"content":"post","dynamic":false,"spread":false}],[{"content":"post-2-new","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/post/post-2-new.md","pathname":"/post/post-2-new","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"post/post-3-new/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/post/post-3-new","isIndex":false,"type":"page","pattern":"^\\/post\\/post-3-new\\/?$","segments":[[{"content":"post","dynamic":false,"spread":false}],[{"content":"post-3-new","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/post/post-3-new.md","pathname":"/post/post-3-new","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"post/post-4-new/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/post/post-4-new","isIndex":false,"type":"page","pattern":"^\\/post\\/post-4-new\\/?$","segments":[[{"content":"post","dynamic":false,"spread":false}],[{"content":"post-4-new","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/post/post-4-new.md","pathname":"/post/post-4-new","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"post/post-5-new/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/post/post-5-new","isIndex":false,"type":"page","pattern":"^\\/post\\/post-5-new\\/?$","segments":[[{"content":"post","dynamic":false,"spread":false}],[{"content":"post-5-new","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/post/post-5-new.md","pathname":"/post/post-5-new","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"post/post-6-new/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/post/post-6-new","isIndex":false,"type":"page","pattern":"^\\/post\\/post-6-new\\/?$","segments":[[{"content":"post","dynamic":false,"spread":false}],[{"content":"post-6-new","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/post/post-6-new.md","pathname":"/post/post-6-new","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"post/post-7-new/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/post/post-7-new","isIndex":false,"type":"page","pattern":"^\\/post\\/post-7-new\\/?$","segments":[[{"content":"post","dynamic":false,"spread":false}],[{"content":"post-7-new","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/post/post-7-new.md","pathname":"/post/post-7-new","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"post/post-8-new/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/post/post-8-new","isIndex":false,"type":"page","pattern":"^\\/post\\/post-8-new\\/?$","segments":[[{"content":"post","dynamic":false,"spread":false}],[{"content":"post-8-new","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/post/post-8-new.md","pathname":"/post/post-8-new","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"post/post-9-new/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/post/post-9-new","isIndex":false,"type":"page","pattern":"^\\/post\\/post-9-new\\/?$","segments":[[{"content":"post","dynamic":false,"spread":false}],[{"content":"post-9-new","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/post/post-9-new.md","pathname":"/post/post-9-new","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Ezequiel/Documents/Desarrollo Web/Astro/Blog/blog-main/src/pages/post/post-1-new.md",{"propagation":"none","containsHead":true}],["C:/Users/Ezequiel/Documents/Desarrollo Web/Astro/Blog/blog-main/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Ezequiel/Documents/Desarrollo Web/Astro/Blog/blog-main/src/pages/code/[code].astro",{"propagation":"none","containsHead":true}],["C:/Users/Ezequiel/Documents/Desarrollo Web/Astro/Blog/blog-main/src/pages/code/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Ezequiel/Documents/Desarrollo Web/Astro/Blog/blog-main/src/pages/collenctions.astro",{"propagation":"none","containsHead":true}],["C:/Users/Ezequiel/Documents/Desarrollo Web/Astro/Blog/blog-main/src/pages/design/[design].astro",{"propagation":"none","containsHead":true}],["C:/Users/Ezequiel/Documents/Desarrollo Web/Astro/Blog/blog-main/src/pages/design/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Ezequiel/Documents/Desarrollo Web/Astro/Blog/blog-main/src/pages/post/post-2-new.md",{"propagation":"none","containsHead":true}],["C:/Users/Ezequiel/Documents/Desarrollo Web/Astro/Blog/blog-main/src/pages/post/post-3-new.md",{"propagation":"none","containsHead":true}],["C:/Users/Ezequiel/Documents/Desarrollo Web/Astro/Blog/blog-main/src/pages/post/post-4-new.md",{"propagation":"none","containsHead":true}],["C:/Users/Ezequiel/Documents/Desarrollo Web/Astro/Blog/blog-main/src/pages/post/post-5-new.md",{"propagation":"none","containsHead":true}],["C:/Users/Ezequiel/Documents/Desarrollo Web/Astro/Blog/blog-main/src/pages/post/post-6-new.md",{"propagation":"none","containsHead":true}],["C:/Users/Ezequiel/Documents/Desarrollo Web/Astro/Blog/blog-main/src/pages/post/post-7-new.md",{"propagation":"none","containsHead":true}],["C:/Users/Ezequiel/Documents/Desarrollo Web/Astro/Blog/blog-main/src/pages/post/post-8-new.md",{"propagation":"none","containsHead":true}],["C:/Users/Ezequiel/Documents/Desarrollo Web/Astro/Blog/blog-main/src/pages/post/post-9-new.md",{"propagation":"none","containsHead":true}],["C:/Users/Ezequiel/Documents/Desarrollo Web/Astro/Blog/blog-main/src/pages/404.astro",{"propagation":"none","containsHead":true}],["C:/Users/Ezequiel/Documents/Desarrollo Web/Astro/Blog/blog-main/src/pages/about.astro",{"propagation":"none","containsHead":true}],["C:/Users/Ezequiel/Documents/Desarrollo Web/Astro/Blog/blog-main/src/pages/contact.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-manifest":"manifest_CdY6NxoA.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_B2d5w5wq.mjs","\u0000@astro-page:src/pages/404@_@astro":"chunks/404_BobetPMv.mjs","\u0000@astro-page:src/pages/about@_@astro":"chunks/about_B29XiYXB.mjs","\u0000@astro-page:src/pages/code/[code]@_@astro":"chunks/_code__LZWFm-Ln.mjs","\u0000@astro-page:src/pages/code/index@_@astro":"chunks/index_DHYODn2s.mjs","\u0000@astro-page:src/pages/collenctions@_@astro":"chunks/collenctions_BKYrM0sW.mjs","\u0000@astro-page:src/pages/contact@_@astro":"chunks/contact_DV6kG8YI.mjs","\u0000@astro-page:src/pages/design/[design]@_@astro":"chunks/_design__clHl6vUd.mjs","\u0000@astro-page:src/pages/design/index@_@astro":"chunks/index_ygF5oNUh.mjs","\u0000@astro-page:src/pages/post/post-1-new@_@md":"chunks/post-1-new_BvzZL-NW.mjs","\u0000@astro-page:src/pages/post/post-2-new@_@md":"chunks/post-2-new_BM0bIvLY.mjs","\u0000@astro-page:src/pages/post/post-3-new@_@md":"chunks/post-3-new_DiWtAy-5.mjs","\u0000@astro-page:src/pages/post/post-4-new@_@md":"chunks/post-4-new_BhsNzi7B.mjs","\u0000@astro-page:src/pages/post/post-5-new@_@md":"chunks/post-5-new_DtuXIsGg.mjs","\u0000@astro-page:src/pages/post/post-6-new@_@md":"chunks/post-6-new_DP50SFTF.mjs","\u0000@astro-page:src/pages/post/post-7-new@_@md":"chunks/post-7-new_BUqmHFTp.mjs","\u0000@astro-page:src/pages/post/post-8-new@_@md":"chunks/post-8-new_jS7crMh_.mjs","\u0000@astro-page:src/pages/post/post-9-new@_@md":"chunks/post-9-new_BfOini8r.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_C4F6avDt.mjs","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/public-sans-vietnamese-wght-normal.BCRJOvr-.woff2","/_astro/public-sans-latin-wght-normal.RswtdM0r.woff2","/_astro/public-sans-latin-ext-wght-normal.D4Umos5N.woff2","/_astro/about.53CXd6aX.css","/favicon.svg","/_redirects","/image/pexels-pixabay-40185.jpg","/image/pexels-tranmautritam-326502.jpg","/svg/header-about.svg","/svg/header-code.svg","/svg/header-contact.svg","/svg/header-design.svg","/svg/tag-angular.svg","/svg/tag-animation.svg","/svg/tag-calendar.svg","/svg/tag-colour.svg","/svg/tag-css.svg","/svg/tag-design.svg","/svg/tag-develop.svg","/svg/tag-js.svg","/svg/tag-patterns.svg","/svg/tag-quickTip.svg","/svg/tag-react.svg","/svg/tag-resources.svg","/svg/tag-typescript.svg","/svg/tag-typography.svg","/svg/tag-visualDesign.svg","/svg/tag-webSite.svg","/404.html","/about/index.html","/code/index.html","/collenctions/index.html","/contact/index.html","/design/index.html","/post/post-1-new/index.html","/post/post-2-new/index.html","/post/post-3-new/index.html","/post/post-4-new/index.html","/post/post-5-new/index.html","/post/post-6-new/index.html","/post/post-7-new/index.html","/post/post-8-new/index.html","/post/post-9-new/index.html","/index.html"],"buildFormat":"directory","checkOrigin":false,"rewritingEnabled":false,"experimentalEnvGetSecretEnabled":false});

export { manifest };
