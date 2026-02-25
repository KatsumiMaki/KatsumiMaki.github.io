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
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "16 Cautious 06" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FolderLinks", $$FolderLinks, { "current": current })} ${maybeRenderHead()}<article class="story" data-theme="dark"> <h1 class="story-page-title">16 Cautious 06</h1> <div class="spacer"></div> <div class="spacer"></div> <div class="prose"> <p>“So a SafeWord takes me to SinglePlayer?” Sun asks, the setup asking them to make a safe word.</p> <p>“Yeah, by default. You can also specify for it to be a PrivatePlayer instance, and it will notify those users. Like emergency contacts,” Markus informs, giving Sun a reassuring smile.</p> <p>“And if you wanted, the three of us can have a safeword of our own. You can make SafeWords that calm you down, maybe turn down or off some sensations. It doesn’t always have to rip you out of the instance,” Sara noted, giving Sun’s hand a reassuring squeeze.</p> <p>“Thanks, guys. It means a lot that you’re here,” Sun jotted down a couple SafeWords, taking their advice and agreeing on a word that they all could use with each other. They made the words numb all sexual stimulation, as well as dim bright lights and quiet loud sounds. They kept the default SafeWord of “safeword” as the one that would take them to SinglePlayer.</p> <p>“So you’ll just say ‘I need a break’ and the AI will enable all these safety settings, and give us a notification,” Markus summarizes, pointing at the list of features they checked.</p> <p>“Feel free to let us know if we do anything that makes you uncomfortable, even beyond these filters” Sara said with kind eyes, hoping that her friend would feel safe enough to.</p> <p>Sun gives the two friends a quick hug, just glad to be past the hardest part of the setup.</p> </div> </article> ` })}`;
}, "C:/Users/DAISY/KatsumiMaki/src/pages/topics/stories/originals/virtual-world/five-stories/16-cautious-06/index.astro", void 0);

const $$file = "C:/Users/DAISY/KatsumiMaki/src/pages/topics/stories/originals/virtual-world/five-stories/16-cautious-06/index.astro";
const $$url = "/topics/stories/originals/virtual-world/five-stories/16-cautious-06/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
