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
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "19 Sed" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FolderLinks", $$FolderLinks, { "current": current })} ${maybeRenderHead()}<article class="story" data-theme="dark"> <h1 class="story-page-title">19 Sed</h1> <div class="spacer"></div> <div class="spacer"></div> <div class="prose"> <p>In the Virtual World, the vibrant matrix of code and polygons painted a lively, vivid picture for most. For Sed, however, this visual array was replaced by an intricate symphony of text. With their extraordinary ability to process text-based stimuli and interpret the underlying code, they navigated the Virtual World using an accessibility layer powered by AI. To Sed, the Virtual World was an ever-shifting, elegant dance of characters and code, interwoven like an ethereal tapestry.</p> <p>As Sed strolled along the virtual beach, they sensed an errant beach ball bouncing in their direction. In an instant, their AI calculated the trajectory of the projectile and relayed the information to Sed. Effortlessly, Sed deflected the ball, surprising the nearby group of volleyball players.</p> <p>The players approached Sed, curiosity piqued by their unusual dexterity. “I thought you were blind,” one of them remarked, still trying to wrap their head around what they had just witnessed.</p> <p>“I am,” Sed replied calmly, sensing their confusion. They went on to explain their unique Extrasensory Perception. They described how they could sense everyone’s position, facial features, and even body language, all without any visual stimuli.</p> <p>The group listened intently, enthralled by Sed’s exceptional gift. Eventually, one of the players asked, “So, who do you think is the most attractive person here?” The group laughed nervously, wondering how Sed would respond.</p> <p>Sed chuckled at the question, clarifying that they were nonbinary and asexual. However, after a moment of contemplation, they added, “But if I were to analyze it mathematically, the girl in the third row, second column relative to me, is the most attractive.” The shy plus-sized woman in question blushed, unaccustomed to such compliments. Her friends rallied around her, teasing and celebrating her newfound status as objectively the most beautiful person on the virtual beach.</p> </div> </article> ` })}`;
}, "C:/Users/DAISY/KatsumiMaki/src/pages/topics/stories/originals/virtual-world/commands/19-sed/index.astro", void 0);

const $$file = "C:/Users/DAISY/KatsumiMaki/src/pages/topics/stories/originals/virtual-world/commands/19-sed/index.astro";
const $$url = "/topics/stories/originals/virtual-world/commands/19-sed/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
