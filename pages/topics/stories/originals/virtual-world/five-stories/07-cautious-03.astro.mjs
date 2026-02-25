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
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "07 Cautious 03" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FolderLinks", $$FolderLinks, { "current": current })} ${maybeRenderHead()}<article class="story" data-theme="dark"> <h1 class="story-page-title">07 Cautious 03</h1> <div class="spacer"></div> <div class="spacer"></div> <div class="prose"> <p>“Let’s get you to our apartment, it’s important to connect after the scan,” Sara noted, remembering how she felt after the first scan. The feelings that ran through your mind were immense, far stronger than one could comprehend. The only way for the device to sort it out was to become familiar with your mind. The community called it the <em>burn in</em> time, an old adage that means fresh electronics need to run constantly for a bit before settling into normal operations. It just felt a lot more personal when all of that <em>burn in</em> was going through your mind.</p> <p>The three split an apartment to make due. It was Sun’s 18th birthday only a few days ago, and they were glad to be free of their house. Sara can imagine how it feels to be LGBT in a traditional family. She was lucky that her family was accepting of her sexuality, but plenty of people don’t have it so easy.</p> <p>Sara watched Sun on the drive back. They slumped against the window, their breath fogging the glass. The sensations must be overwhelming at this point.</p> <p>“Can I touch you?” Sara asks, worried, but feeling unable to help. Sun manages a nod, their eyes practically rolling back in their head. Sara places a hand on Sun’s shoulder, seeing her friend come back to reality for just a moment.</p> <p>“We’re almost there,” Markus says, glancing in the rear view mirror at the two in the back seat.</p> <p>Sara’s hand on their shoulder feels like velvet, Sun appreciating that they are with their two best friends. They trust them with their life. They can get through this together.</p> </div> </article> ` })}`;
}, "C:/Users/DAISY/KatsumiMaki/src/pages/topics/stories/originals/virtual-world/five-stories/07-cautious-03/index.astro", void 0);

const $$file = "C:/Users/DAISY/KatsumiMaki/src/pages/topics/stories/originals/virtual-world/five-stories/07-cautious-03/index.astro";
const $$url = "/topics/stories/originals/virtual-world/five-stories/07-cautious-03/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
