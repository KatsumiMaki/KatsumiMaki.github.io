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
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Authour's Note" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FolderLinks", $$FolderLinks, { "current": current })} ${maybeRenderHead()}<article class="story" data-theme="dark"> <h1 class="story-page-title">Authour&#39;s Note</h1> <div class="spacer"></div> <div class="spacer"></div> <div class="prose"> <p>This novel is set in the future. Far in the future. Genetic modifications are so prevalent, the majourity of humanity has some combination of animal genes. Generally, mammalian DNA was used, but in some instances, other DNA was mixed, combined, and edited together. The main character, Aurora Borealis, is the pinnacle of the genetic sciences. Scientists in Japan created Aurora Borealis in a test tube, completely out of genes that they coded, the summation of all of genealogy.</p> <p>In light of these genetic constructions and tweaks, humans started calling the population of people who edited their own DNA “furries”. This was particularly to demean them at first, as it described fur that would start coating over the human skin. With some, they wanted that protective layer, especially in areas with cold temperatures. But it mostly came as a side effect that came with too many genetic changes. These terms worked themselves into common use, and no longer carries the rude connotation it used to have, especially as acceptance to these genetic changes increased.</p> <p>Most people became furries, especially in areas where they had enough money to make these changes. Poor areas still remained human, and some have formed “pure” communities, meaning that they would abstain from any genetic changes. This sometimes results in a shallow genetic pool, so they have to contact other pure communities to arrange marriages. They would not permit people to marry furries in the communities, but they do allow children a coming-of-age trial of spending a week in an “impure” community. If they wished to stay there, that was their life choice.</p> <p>The world is in tense political times. Nuclear weapons have long since had the ability to destroy the planet, but the cold war that never really left is beginning to develop hot spots again. Fights between first world countries are sometimes completely resolved without deaths. One nation just sends more drones to fight the other’s.</p> </div> </article> ` })}`;
}, "C:/Users/DAISY/GithubPages/vw.z/src/pages/topics/stories/originals/northern-lights/main-story/page-1/index.astro", void 0);

const $$file = "C:/Users/DAISY/GithubPages/vw.z/src/pages/topics/stories/originals/northern-lights/main-story/page-1/index.astro";
const $$url = "/topics/stories/originals/northern-lights/main-story/page-1/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
