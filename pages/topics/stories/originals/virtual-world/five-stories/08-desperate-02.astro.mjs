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
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "08 Desperate 02" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FolderLinks", $$FolderLinks, { "current": current })} ${maybeRenderHead()}<article class="story" data-theme="dark"> <h1 class="story-page-title">08 Desperate 02</h1> <div class="spacer"></div> <div class="spacer"></div> <div class="prose"> <p>Erik visits the front desk, looking around for anyone he recognizes. If they followed suit, there were plenty of these facilities to turn to. The front desk worker smiles at him, “Good day, Patron. Daily Facilities or Extended Stay?”</p> <p>“Extended Stay,” Erik says bluntly. No reason to entertain a bot with extra words.</p> <p>“Please scan your wrist for entry,” the bot gestures to a RFID reader on the table. A swipe of the wrist results in an electronic ding, and the tablet displays a form for him to fill. End date? Not Applicable.</p> <p>The initial deposit gets verified, and the bot instructs him to where he will be turning his body in. The extended stay is a long walk from the front desk, but that makes sense. You’ll only need to walk it once or twice, if you’re lucky.</p> <p>Erik walks past the wall of tubes, all darkened for privacy. One lights up, the contents emptied. A glass test tube, just for him. Cozy. He undresses and puts his clothes and personal things in the amusingly small cubby. The test tube opens, the glass doors sliding with manufactured precision. He plugs his device in and the glass darkens. Life Support fluid oozes through the grates beneath his feet, creeping up his legs. By the time it’s at his waist, the connection finishes and his mind is transported to the Virtual World.</p> </div> </article> ` })}`;
}, "C:/Users/DAISY/KatsumiMaki/src/pages/topics/stories/originals/virtual-world/five-stories/08-desperate-02/index.astro", void 0);

const $$file = "C:/Users/DAISY/KatsumiMaki/src/pages/topics/stories/originals/virtual-world/five-stories/08-desperate-02/index.astro";
const $$url = "/topics/stories/originals/virtual-world/five-stories/08-desperate-02/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
