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
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "06 Gentle 01" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FolderLinks", $$FolderLinks, { "current": current })} ${maybeRenderHead()}<article class="story" data-theme="dark"> <h1 class="story-page-title">06 Gentle 01</h1> <div class="spacer"></div> <div class="spacer"></div> <div class="prose"> <p>Her face morphed into that of a child. She was shorter, her curves flattened out, her body language retreated, fearful.</p> <p>“I didn’t mean to scare you,” he apologized, but it was too late. The alter had taken over, defending the system. He pushed her too far, he knew talking about her triggers could have consequences. How would they know what to avoid without talking about it? It must have been too much, all at once. She doesn’t want to remember what happened. She can’t remember, as long as the alters protect her. </p> <p>Rainy was an 8 year old girl, an alter that bears the memory. Seeing her was extremely disheartening, because it felt like every time she fronted, it was like the trauma just happened to her. </p> <p>Each time he met Rainy, he got a bit better at calming her down. He figured out what to say, what things distracted her. She loved ponies, cartoons, and especially candy. She was an adorable little girl if you were very careful to not upset her. Simple things could completely set her off. Flashing lights, loud music, smoke. These were never explained, so Pat had to find out the hard way when it happened.</p> <p>If he just knew what happened, he could help her. Very few of the verbal alters can even remember it, and none of them can talk about it without switching to a child alter. The child alters could provide context clues, but from a distorted perspective and was more often based upon things they were afraid of.</p> <p>At some point, Pat started journaling his findings. The system’s birth name was Lucia, but she rarely fronted. Pat had first met Myles, a self-proclaimed tomboy. They bonded over being gender neutral, as Pat fell in the LGBT Spectrum, too. Each of these personalities, these alters, now have pages with bullet points and associated diary entries. Their identities were detailed, Pat being able to recognize the more frequent alters by body language alone.</p> </div> </article> ` })}`;
}, "C:/Users/DAISY/KatsumiMaki/src/pages/topics/stories/originals/virtual-world/five-stories/06-gentle-01/index.astro", void 0);

const $$file = "C:/Users/DAISY/KatsumiMaki/src/pages/topics/stories/originals/virtual-world/five-stories/06-gentle-01/index.astro";
const $$url = "/topics/stories/originals/virtual-world/five-stories/06-gentle-01/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
