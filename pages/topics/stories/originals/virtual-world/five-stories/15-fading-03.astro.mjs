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
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "15 Fading 03" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FolderLinks", $$FolderLinks, { "current": current })} ${maybeRenderHead()}<article class="story" data-theme="dark"> <h1 class="story-page-title">15 Fading 03</h1> <div class="spacer"></div> <div class="spacer"></div> <div class="prose"> <p>The researcher scans the logs. The debugging console spits out detailed information, and several keystrokes filter the warnings and critical errors to make more sense.</p> <p>“Here it is,” they pointed at the screen, a scrawny intern looking at the text over their shoulder, “The emotion boost had a feedback loop. During the scanning process, it’s only supposed to raise user emotions by 10 percent, and no more than 20. This spiked to 400 percent over the course of a few milliseconds. The effects are similar to a seizure, but much quicker.”</p> <p>“Oh my god,” the intern hadn’t seen a dead body before, much less witness a Real Death, “why do you think that happened?”</p> <p>“At this point, we have a few clues. The Emotion booster is one of the best ways to map the mind, but without a completed map, the seizure protocols aren’t in place. In this case, we suspect it was Schizophrenia that caused this exponential runaway of synapses firing.”</p> <p>“Would this happen to Sensitivity or Consciousness boosts?” Rey asked, fiddling with his thumbs and nervously glancing at the prone person that lay just a few feet away.</p> <p>“Similar things have happened with those methods, but the user will usually have other conditions, like autism or severe OCD. Consciousness boosting is surface-level and Sensitivity boosting only operates on the parts of the brain that deal with sensory input. It’s possible to make a partial map with these boosting methods, and we do use them during the scan, but it isn’t sufficient to make a complete map for the seizure-preventative protocols.”</p> <p>“So the scanner is poking around, trying to figure out what the mind looks like, and accidentally hits some wrong buttons,” the intern responds, shifting his weight to lean on the researcher’s chair.</p> <p>“That’s a way to put it. A more detailed report with our data will be sent off to Research and Development for analysis, but all we have to do now is fill out a field report. This will point them in the right direction when looking all of this over. Maybe next time, the scanner will have better luck dealing with these fringe cases.”</p> </div> </article> ` })}`;
}, "C:/Users/DAISY/KatsumiMaki/src/pages/topics/stories/originals/virtual-world/five-stories/15-fading-03/index.astro", void 0);

const $$file = "C:/Users/DAISY/KatsumiMaki/src/pages/topics/stories/originals/virtual-world/five-stories/15-fading-03/index.astro";
const $$url = "/topics/stories/originals/virtual-world/five-stories/15-fading-03/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
