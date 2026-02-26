import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../../../../../chunks/astro/server_CZXttPcx.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../../../../../../chunks/Base_DMGW_6Ds.mjs';
import { $ as $$FolderLinks } from '../../../../../../chunks/FolderLinks_5Et2assD.mjs';
/* empty css                                                */
export { renderers } from '../../../../../../renderers.mjs';

const $$Astro = createAstro("https://katsumimaki.github.io");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const current = Astro2.url.pathname;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Inferiority" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FolderLinks", $$FolderLinks, { "current": current })} ${maybeRenderHead()}<article class="story" data-theme="dark"> <h1 class="story-page-title">Inferiority</h1> <div class="spacer"></div> <div class="spacer"></div> <div class="prose"> <p>Humanity can only be called such if it is humane. The way humans can treat each other can distort the vision of humanity itself.</p> <p>On the other hand, humanity can enrich and support each other. The most beautiful human moment can almost give pass to the worst. Does it make it alright? Can good explain away the bad?</p> <p>If one ponders the state of a cup, it can both be seen as half full and half empty. It is both at the same time, yet this would result in no forward mobility. There is no headway in the argument that it is one or the other. Because there is no leaning towards one or the other, that must mean that the inhumanity of humanity is just as much human as it is for them to be humane. That is, of course, assuming there is balance.</p> </div> </article> ` })}`;
}, "C:/Users/DAISY/GithubPages/vw.z/src/pages/topics/stories/originals/neon-fairy-lights/main-story/page-8/index.astro", void 0);

const $$file = "C:/Users/DAISY/GithubPages/vw.z/src/pages/topics/stories/originals/neon-fairy-lights/main-story/page-8/index.astro";
const $$url = "/topics/stories/originals/neon-fairy-lights/main-story/page-8/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
