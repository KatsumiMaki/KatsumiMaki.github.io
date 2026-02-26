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
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Role Confusion" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FolderLinks", $$FolderLinks, { "current": current })} ${maybeRenderHead()}<article class="story" data-theme="dark"> <h1 class="story-page-title">Role Confusion</h1> <div class="spacer"></div> <div class="spacer"></div> <div class="prose"> <p>Humans come with expectations. When these expectations aren’t met, they find a way to force others into a box. The way that they treat each other ends up tipping the first domino, one on an infinite chain of replication. They submit, forming to the constraints they are burdened with. They live the rest of their lives with a mask, too scared to take it off. For if they take it off, all will see that they dare to be individual. It is much easier to form to the mold and go about unnoticed. It’s an infection, borne from the depths of the human subconsciousness. The ones who stand out are mocked, they are made into examples to scare others away from being individual. The most ironic part about it is the ones who mock have already been afflicted by the curse of shaping to the mold. That is why they make it their goal to spread the disease, so they aren’t alone in their propensity.</p> </div> </article> ` })}`;
}, "C:/Users/DAISY/GithubPages/vw.z/src/pages/topics/stories/originals/neon-fairy-lights/main-story/page-10/index.astro", void 0);

const $$file = "C:/Users/DAISY/GithubPages/vw.z/src/pages/topics/stories/originals/neon-fairy-lights/main-story/page-10/index.astro";
const $$url = "/topics/stories/originals/neon-fairy-lights/main-story/page-10/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
