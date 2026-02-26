import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CZXttPcx.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../../chunks/Base_DMGW_6Ds.mjs';
import { $ as $$SubFolderLinks } from '../../chunks/SubFolderLinks_vf0V8EJ8.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://katsumimaki.github.io");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const current = Astro2.url.pathname;
  const pageTitle = "Hobbies";
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": pageTitle }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SubFolderLinks", $$SubFolderLinks, { "current": current, "kicker": pageTitle, "ariaLabel": `${pageTitle} subfolders` })} ${maybeRenderHead()}<div class="prose"> <p>Things I make and collect, organized by universe where it makes sense.</p> </div> ` })}`;
}, "C:/Users/DAISY/GithubPages/vw.z/src/pages/topics/hobbies/index.astro", void 0);

const $$file = "C:/Users/DAISY/GithubPages/vw.z/src/pages/topics/hobbies/index.astro";
const $$url = "/topics/hobbies/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
