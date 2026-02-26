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
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "21 Fading 04" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FolderLinks", $$FolderLinks, { "current": current })} ${maybeRenderHead()}<article class="story" data-theme="dark"> <h1 class="story-page-title">21 Fading 04</h1> <div class="spacer"></div> <div class="spacer"></div> <div class="prose"> <p>A fringe case. That’s what Rey’s brother could be. Rey couldn’t get the image out of his mind. His little brother had autism. The Meta Device has been known to be a miracle, giving a voice to the non-vocal, restoring movement, limbs, and so much more in the Virtual World. If it was successful, Rey might be able to have a back-and-forth conversation with his brother. If it wasn’t… Well, he saw what happened. It was still burned into his mind.</p> <p>The prone man, laying there. A stranger, no attachment. Suddenly, the stranger was replaced with his brother. Rey cried out, shaking his fist at the medic that stood by and did nothing.</p> <p>“Another retard,” they said dismissively. Rey’s heart broke, the nightmare waking him up in a cold sweat. His hands trembled in front of him, he brushed the awkwardly long bangs out of his face. His cheeks were wet with tears, his breath shallow and rapid. He hugged his legs and rocked back and forth, like his brother would do when he got upset.</p> <p>His little brother must have woken up, his loud grunts and screams conveying his emotion in the only way he could. After a bit, a light turned on and disheveled Mother entered to calm Huey. She took a second glance at Rey, noticing the older sibling&#39;s panic attack.</p> <p>“Baby, what’s wrong?” She was the most patient person on the planet, her love was big enough for both of her children.</p> <p>Eventually, Rey was able to tell her about what they saw earlier that day. She seemed similarly upset, Rey unable to mention the fears that it brought about little Huey. She knows the risks, there’s no doubting that. In the end, it will be up to her.</p> </div> </article> ` })}`;
}, "C:/Users/DAISY/GithubPages/vw.z/src/pages/topics/stories/originals/virtual-world/five-stories/21-fading-04/index.astro", void 0);

const $$file = "C:/Users/DAISY/GithubPages/vw.z/src/pages/topics/stories/originals/virtual-world/five-stories/21-fading-04/index.astro";
const $$url = "/topics/stories/originals/virtual-world/five-stories/21-fading-04/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
