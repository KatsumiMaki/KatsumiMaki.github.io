import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CZXttPcx.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../../chunks/Base_B9z84OHY.mjs';
import { $ as $$FolderLinks } from '../../chunks/FolderLinks_Cb3w_LRp.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://katsumimaki.github.io");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const current = Astro2.url.pathname;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "About \u2014 VW.Z" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FolderLinks", $$FolderLinks, { "current": current })} ${maybeRenderHead()}<div class="prose"> <p>This site is a folder-first index of my work. GENERAL has the basics; TOPICS contains Newsletter, Stories, Art, and Hobbies—each split into Originals/FanMade, then universes.</p> </div> ` })}`;
}, "C:/Users/DAISY/KatsumiMaki/src/pages/general/about/index.astro", void 0);

const $$file = "C:/Users/DAISY/KatsumiMaki/src/pages/general/about/index.astro";
const $$url = "/general/about/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
