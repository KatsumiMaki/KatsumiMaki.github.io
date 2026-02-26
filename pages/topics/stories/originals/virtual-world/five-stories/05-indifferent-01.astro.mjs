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
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "05 Indifferent 01" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FolderLinks", $$FolderLinks, { "current": current })} ${maybeRenderHead()}<article class="story" data-theme="dark"> <h1 class="story-page-title">05 Indifferent 01</h1> <div class="spacer"></div> <div class="spacer"></div> <div class="prose"> <p>Carl plugged the Meta Device in, his computer fans whirring up as his computer loads the script.</p> <p>“Are you sure this is safe?” Fox asks, fidgeting in his nervousness.</p> <p>“I told you, I’d be lying if I said it was. But I’ve done this to almost 10 devices, and none of our classmates have had a problem,” Carl picked up his Big Gulp and drew a surprising quantity in one inhale. His computer finished loading, a few quick keystrokes with his heavy fingers and it was done. </p> <p>“Alright furface, parental controls are completely lifted. And you can generate your fursuit, or whatever you want,” After a look from Fox, Carl added, “hey, I don’t judge, I’ve seen much worse the first time I took off parental controls. So much worse. Use filters or you’re in for a shock. I mean it.”</p> <p>“Thanks man. Here’s the cash,” Fox placed a generous amount on the table. Carl suspected this would be a returning customer. Furries tend to pay well for the really weird shit. He chuckled, “Cya at school. Don’t go too crazy with mods or the school’s going to notice, even if your parents don’t give a damn.”</p> </div> </article> ` })}`;
}, "C:/Users/DAISY/GithubPages/vw.z/src/pages/topics/stories/originals/virtual-world/five-stories/05-indifferent-01/index.astro", void 0);

const $$file = "C:/Users/DAISY/GithubPages/vw.z/src/pages/topics/stories/originals/virtual-world/five-stories/05-indifferent-01/index.astro";
const $$url = "/topics/stories/originals/virtual-world/five-stories/05-indifferent-01/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
