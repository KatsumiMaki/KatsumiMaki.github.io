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
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Reaper and ADA - Ch. 6" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FolderLinks", $$FolderLinks, { "current": current })} ${maybeRenderHead()}<article class="story" data-theme="dark"> <h1 class="story-page-title">Chapter 6</h1> <div class="spacer"></div> <div class="spacer"></div> <div class="prose"> <p>If stepping through shadow was like skipping between the strokes of a heartbeat, this was like being the heartbeat… One long, slow thrum that filled the world in her ears.</p> <p>“<em>HARMONIZE WITH US.</em>”</p> <p>Reaper saw the scene split down an invisible seam. On one side stood herself, small and black-armored, ears alert, knives at each side. On the other stood Pie, taller, grease on her knuckles, her tired brave face.</p> <p>The scene shifted again.</p> <p>Reaper found herself in a wider stance, her back erect. She felt an unusual weight on her chest. Not the comforting swaddle of her armor. The weight shifted as she shifted, rose and fell with the breath in her body. </p> <p>Somewhere in the back of her head, there was a ghost image of a checklist: belts to reroute, gas masks to craft, electricity requirements to meet. Her hand went to her head, as if to shoo off the invasive thoughts.</p> <p>Her hand did not come up to meet her, but an unfamiliar hand. The pioneer’s glove. Her eyes whipped back into focus at the form in front of her. Her own body stood there, just as confused as she was.</p> <p>The little Elin warrior’s shocked jaw told the whole story. They swapped bodies. The glow of the purple sigil disappeared quickly, with the finality of a door slamming shut.</p> <p>Pie saw fleeting memories of lanterns pinned to bridge rails over a lake. Elina’s wet hair plastered to her forehead after a rainstorm, the paint on her little brush dotting nails with constellations. She saw the ash-years arrive fast and everywhere at once. She saw an orcan’s blade, the acceptance in becoming a shadow warrior, and the name she had been before.</p> <p>“Nalia,” Pie said, in a borrowed voice, certain without knowing how she knew. She looked down at the slight hands that weren’t hers, at the chain-scars around the wrists, and began to understand the person who owned them in a wholly unstrategic way.</p> <p>Reaper reeled under a different flood. Pie’s body remembered the first wake on MASSAGE. A single set of prints in damp sand leading away from a falling pod. The relief the day the first Constructor chewed without jamming. The loneliness of a hundred mornings when the belts kept moving, and no one else did. The words “save humanity” as marketing copy and also as something like prayer. Being called Pioneer because someone thought it would be easier than calling you a person.</p> <p>“Observation,” ADA said crisply, and for once it sounded like reverence. “Bidirectional cognitive entanglement detected. HR will have opinions.”</p> </div> </article> ` })}`;
}, "C:/Users/DAISY/KatsumiMaki/src/pages/topics/stories/fanmade/satisfactory/reaper-and-ada/chapter-6/index.astro", void 0);

const $$file = "C:/Users/DAISY/KatsumiMaki/src/pages/topics/stories/fanmade/satisfactory/reaper-and-ada/chapter-6/index.astro";
const $$url = "/topics/stories/fanmade/satisfactory/reaper-and-ada/chapter-6/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
