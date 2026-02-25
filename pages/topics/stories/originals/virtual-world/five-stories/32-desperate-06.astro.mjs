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
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "32 Desperate 06" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FolderLinks", $$FolderLinks, { "current": current })} ${maybeRenderHead()}<article class="story" data-theme="dark"> <h1 class="story-page-title">32 Desperate 06</h1> <div class="spacer"></div> <div class="spacer"></div> <div class="prose"> <p>“Why did you hurt me?” She asked, an image of her flitting through his mind. </p> <p>“Fuck off,” Erik was fed up with his mind, “please filter her…”</p> <p>And with that statement, her voice and likeness faded from his thoughts. The AI at least attempted to guide his conscious mind away from the memories, even if they couldn’t be erased. Sounds healthy.</p> <p>He said the SafeWord too late, the damage had been done. Was he really subjected to this virtual nightmare? Outside the Virtual World wasn’t any better, but at least he wasn’t uniquely responsible for what happened there. He didn’t help or hurt the problems the Real World had, simply because of how long they had been building up for, spanning generations.</p> <p>The flat whiteness dispersed, a moody city glowed through a layer of fog before him. The sky above him blackened, a handful of stars and the crescent moon shining dimly. The slight wind was cool to the touch, uniformly flowing up the cliff he stood atop.</p> <p>Even his ‘Happy Place’ was depressing. It evoked a calm, sobering perspective on how small he was. It was comforting to not matter.</p> </div> </article> ` })}`;
}, "C:/Users/DAISY/KatsumiMaki/src/pages/topics/stories/originals/virtual-world/five-stories/32-desperate-06/index.astro", void 0);

const $$file = "C:/Users/DAISY/KatsumiMaki/src/pages/topics/stories/originals/virtual-world/five-stories/32-desperate-06/index.astro";
const $$url = "/topics/stories/originals/virtual-world/five-stories/32-desperate-06/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
