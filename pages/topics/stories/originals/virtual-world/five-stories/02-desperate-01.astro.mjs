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
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "02 Desperate 01" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FolderLinks", $$FolderLinks, { "current": current })} ${maybeRenderHead()}<article class="story" data-theme="dark"> <h1 class="story-page-title">02 Desperate 01</h1> <div class="spacer"></div> <div class="spacer"></div> <div class="prose"> <p>Erik took another look at the graph, the downward spike piercing his heart, sending cold blood through his veins. They were crumbling. Inflation was through the roof, the value of the dollar was abysmal. After this was all over, they could use the dollars as tissue paper, because buying tissue paper would be less by volume.</p> <p>The rest of the meeting room had the same look on their face. The few faces missing were ones who sensed this shitshow from a mile away. They were smart to get out. For the rest of them, this was their last straw, and it showed. There were locks on the windows; Erik morbidly suspects it was because of this dreaded meeting.</p> <p>He takes a shaky breath and considers his alternatives. If he declares bankruptcy, he could possibly get awarded a Life Support subscription. That way, the rest of his meager life could be spent in the Virtual World. If his subscription runs out, then at least it would be a peaceful decline in a dreamland far away from this hellhole.</p> </div> </article> ` })}`;
}, "C:/Users/DAISY/GithubPages/vw.z/src/pages/topics/stories/originals/virtual-world/five-stories/02-desperate-01/index.astro", void 0);

const $$file = "C:/Users/DAISY/GithubPages/vw.z/src/pages/topics/stories/originals/virtual-world/five-stories/02-desperate-01/index.astro";
const $$url = "/topics/stories/originals/virtual-world/five-stories/02-desperate-01/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
