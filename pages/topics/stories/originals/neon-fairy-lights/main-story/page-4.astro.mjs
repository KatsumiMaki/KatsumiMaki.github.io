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
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Shame" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FolderLinks", $$FolderLinks, { "current": current })} ${maybeRenderHead()}<article class="story" data-theme="dark"> <h1 class="story-page-title">Shame</h1> <div class="spacer"></div> <div class="spacer"></div> <div class="prose"> <p>The Grid bends and snaps. Another girl. Their Guardians. They stretch the grid far too much. Resisting the inevitable with all they have. Such a human thing to do. What are they guarding, that can’t be accessed? If the grid is what keeps everything together, then why bend it to keep them apart? They are hypocrites. They figured out so much, but the blatant misuse of what they’ve been given is a disgrace. The tremendous power they have, that they all contain. They decide that the one thing that links them together should be used to make them apart. Their denial of this, their obviously hypocritical interpretations of life. They think that it makes them special. They strive so hard to be individual. Even having a society built, a potentially wonderful place. They always want to crawl to the top. They want to do something to stand out. They pull so hard at the strings, they take too much out and don’t give enough back. The grid, the lifeblood of society, can’t handle this appalling abuse for long. Something has to change.</p> </div> </article> ` })}`;
}, "C:/Users/DAISY/GithubPages/vw.z/src/pages/topics/stories/originals/neon-fairy-lights/main-story/page-4/index.astro", void 0);

const $$file = "C:/Users/DAISY/GithubPages/vw.z/src/pages/topics/stories/originals/neon-fairy-lights/main-story/page-4/index.astro";
const $$url = "/topics/stories/originals/neon-fairy-lights/main-story/page-4/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
