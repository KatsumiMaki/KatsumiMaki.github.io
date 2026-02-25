import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../../../../../chunks/astro/server_CZXttPcx.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../../../../../../chunks/Base_B9z84OHY.mjs';
import { $ as $$FolderLinks } from '../../../../../../chunks/FolderLinks_Cb3w_LRp.mjs';
/* empty css                                                */
export { renderers } from '../../../../../../renderers.mjs';

const $$Astro = createAstro("https://katsumimaki.github.io");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const current = Astro2.url.pathname;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "The GM Sets the Stage" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FolderLinks", $$FolderLinks, { "current": current })} ${maybeRenderHead()}<article class="story" data-theme="dark"> <h1 class="story-page-title">The GM Sets the Stage</h1> <div class="spacer"></div> <div class="spacer"></div> <div class="prose"> <p>Around a table strewn with rulebooks, character sheets, and colorful dice, four friends lean in as the Game Master clears his throat. In the dim light of the living room, he spreads his hands theatrically and begins to speak in a measured, evocative tone. “Welcome to Vesk-3, everyone. Our campaign begins on this tropical industrial world—originally the Skittermanders’ home planet, Oeddertchonk, now called Vesk-3 under the Veskarium’s rule.” His eyes sweep across the eager faces of Alice, Tyrone, and Cora, ensuring they’re imagining it too. “Picture humid jungles scarred by mining facilities and refineries,” he continues, voice low and immersive. “The Veskarium’s military and corporate interests have occupied the planet for decades, exploiting its resources and workforce. The native Skittermanders – small, furry, six-armed folks known for their boundless helpfulness – are used as cheap labor by off-world companies. They’ll cheerfully ‘help’ anyone, and the companies take shameless advantage of that. But lately, tension is growing. Some Skittermanders have begun to realize they’re being taken advantage of and have started pushing back. It’s a powder keg of colonial occupation and local resentment. This is the backdrop for our story.”</p> <p>As the GM speaks, the players can almost see it: a steamy green jungle horizon dotted with smoke-belching stacks. Rusting pipeline networks crisscross above the canopy, and massive strip mines gouge the earth. Vesk shock troopers in heavy armor patrol the perimeter of shiny prefabricated refineries, while out in the ramshackle shantytowns, the locals cling to their sense of community. The GM’s voice softens, drawing the focus to a specific spot. “There’s a food bank in one of these settlements,” he narrates, “where weary Skittermander families line up after long shifts in the mines. That’s where our adventure will kick off.” He smiles, leaning back slightly. “So,” he says, looking between the players, “let’s talk about who you all want to play in this setting.”</p> </div> </article> ` })}`;
}, "C:/Users/DAISY/KatsumiMaki/src/pages/topics/stories/fanmade/pathfinder/occupation-on-vesk-3/page-1/index.astro", void 0);

const $$file = "C:/Users/DAISY/KatsumiMaki/src/pages/topics/stories/fanmade/pathfinder/occupation-on-vesk-3/page-1/index.astro";
const $$url = "/topics/stories/fanmade/pathfinder/occupation-on-vesk-3/page-1/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
