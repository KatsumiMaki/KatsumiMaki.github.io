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
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Prahlada and Malala - P. 4" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FolderLinks", $$FolderLinks, { "current": current })} ${maybeRenderHead()}<article class="story" data-theme="dark"> <h1 class="story-page-title">Page 4</h1> <div class="spacer"></div> <div class="spacer"></div> <div class="prose"> <p>Night falls on January 14, 2009. Malala lies awake on a floor mattress alongside her two younger brothers, listening to the rattle of distant gunfire in the Swat Valley. Each crack echoes off the mountains like the memory of a nightmare. Tomorrow, the Taliban’s ban on girls attending school officially takes effect. For Malala, only one night remains before her world possibly changes forever. She silently slips out from under the thin blanket, careful not to wake her brothers, and reaches for her diary and a flashlight. Boom!</p> <p>A sudden artillery shell explodes somewhere on the outskirts of Mingora, and the house shakes. The boys stir and whimper in their sleep. Malala’s heart leaps into her throat, but she steadies herself. Keep going, she thinks. In the faint beam of her flashlight, she sees dust drifting from a crack in the ceiling. Fear tightens her chest, but Malala takes a slow breath and opens the diary to a fresh page. If this is to be the last entry she ever writes from a desk as a student, she will make it count.</p> <p>Sitting on her bed, Malala scribbles down the date (<em>14 January 2009</em>) and pours her anxieties onto the page. She writes that the principal announced winter break today without a return date, confirming everyone’s worst fears. “I may not go to school again,” she notes bluntly, feeling a hollowness at the idea.</p> <p>Outside, another round of artillery booms, and the windowpane shivers. Malala’s hand trembles, leaving a slight ink smear. She recalls how after school she and her friends had lingered on the playground, laughing a little too loudly, trying to pretend it was a normal holiday eve. One classmate even talked about homework, “as if nothing out of the ordinary had happened,” Malala writes with a faint smile at her friend’s bravery.</p> <p>The truth is, they all knew what tomorrow brings. Malala presses her pen harder to keep the letters steady as another thud sounds in the distance. Focus, she tells herself. She describes the ominous radio announcements warning that any girl who dares show up at school will be attacked with bombs or even acid. “They can take our schools,” she writes, “but they can’t stop me from learning and speaking. I will keep using my voice.”</p> <p>For a moment, Malala pauses, hearing only her own quickened breathing and the ringing aftermath of explosions. In that pause, she makes a silent prayer: God, protect us. Give me strength to continue. She underlines her final sentence for the day. Just as she finishes, a loud pounding comes at the front door. Malala’s pen falls from her hand. Her father’s voice calls urgently from the next room, “Malala, come away from the window!”</p> <p>The flashlight flickers across the diary page, illuminating the last words she wrote. Malala’s eyes widen, adrenaline surging…</p> </div> </article> ` })}`;
}, "C:/Users/DAISY/KatsumiMaki/src/pages/topics/stories/fanmade/history/prahlada-and-malala/page-4/index.astro", void 0);

const $$file = "C:/Users/DAISY/KatsumiMaki/src/pages/topics/stories/fanmade/history/prahlada-and-malala/page-4/index.astro";
const $$url = "/topics/stories/fanmade/history/prahlada-and-malala/page-4/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
