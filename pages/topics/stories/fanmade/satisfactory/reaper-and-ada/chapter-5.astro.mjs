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
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Reaper and ADA - Ch. 5" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FolderLinks", $$FolderLinks, { "current": current })} ${maybeRenderHead()}<article class="story" data-theme="dark"> <h1 class="story-page-title">Chapter 5</h1> <div class="spacer"></div> <div class="spacer"></div> <div class="prose"> <p>Reaper reached towards the object, her body unable to resist the tempting offer before her. A terrifying cold slid across her palm. Her shadow magic responded, wrapping around her body, unbidden. Her breath left her. So did time.</p> <p>“<em>WITNESS.</em>”</p> <p>Dewdrops stopped mid-fall, each a caught star. Rustles stalled in the grass like held breath. In that bright pause, she felt a burning sensation in her stomach. Her hand raced to her abdomen, peeling up the armor. She watched in horror as a shape drew itself beneath her navel, as if ink were being poured from inside out. <em>The lines braid toward the center like veins finding an altar</em>, a violet sigil that thrummed at a frequency high enough to only be bothersome if she faced it directly.</p> <p>“Hazard classification updated,” ADA’s distorted voice echoed, cutting in and out midsentence. “Unscheduled Personnel-Adjacent Augmentation.”</p> <p>Reaper staggered back, hand flat on her stomach as if to contain the power throbbing in her womb. The hum in her bones died down. Time started ticking again. Dewdrops finished falling with the smallest clicks.</p> <p>Footsteps on the boardwalk Pie had laid through the mire. Helm tucked under her arm, braid damp with fog. She took in the frozen-scattering grass, the settling drops, Reaper bent and breathing. The pioneer’s features contorted with worry.</p> <p>“What did you do?” Pie asked, though the answer was all around them.</p> <p>Reaper swallowed and showed her. Fingers trembling, she lifted her cuirass just enough to reveal the new mark’s black/purple glow. Fear crept into her voice before she could wrestle it away. “I think I did something wrong.”</p> <p>Pie’s eyes widened, then softened. She didn’t step back this time. Curiosity and worry braided in her expression like cable. “May I?”</p> <p>Reaper nodded, throat too tight for yes.</p> <p>Pie reached out, hand steady. Her fingertips kissed the sigil.</p> </div> </article> ` })}`;
}, "C:/Users/DAISY/KatsumiMaki/src/pages/topics/stories/fanmade/satisfactory/reaper-and-ada/chapter-5/index.astro", void 0);

const $$file = "C:/Users/DAISY/KatsumiMaki/src/pages/topics/stories/fanmade/satisfactory/reaper-and-ada/chapter-5/index.astro";
const $$url = "/topics/stories/fanmade/satisfactory/reaper-and-ada/chapter-5/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
