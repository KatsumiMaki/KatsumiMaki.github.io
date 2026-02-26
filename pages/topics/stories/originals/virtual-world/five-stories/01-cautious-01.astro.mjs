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
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "01 Cautious 01" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FolderLinks", $$FolderLinks, { "current": current })} ${maybeRenderHead()}<article class="story" data-theme="dark"> <h1 class="story-page-title">01 Cautious 01</h1> <div class="spacer"></div> <div class="spacer"></div> <div class="prose"> <p>“You’ve really never been in the Virtual World…” Markus wondered aloud. It was rare to encounter people who didn’t have a Meta Device. Such a large part of the human experience, absent from their life.</p> <p>“It was my grandparents, they don’t trust BCIs,” Sun admitted, a bit embarrassed. Homeschooled, helicopter-parented, everything was new to them, now that they are on their own.</p> <p>“That makes sense, this technology was Dystopian SciFi, back in their day,” Sara shrugged. They were here now, moments away from getting Sun their Meta Device, a Brain-Computer Interface developed by Meta Labs.</p> <p>The friends were a ragtag trio, Sun and Sara growing up in the same local community, but from completely different ethnic, religious, and political backgrounds. Markus was from halfway across the globe, moving to be closer to Sara. Few people cared where their Real Life bodies were located, as long as they were kept alive. The Virtual World was where the majority of the hustle and bustle of daily life occurred.</p> <p>Sara placed a hand on Sun’s shoulder, taking them aside. She looked at her friend seriously, asking, “Are you sure you want to do this? This life is yours to live, I don’t want you to feel like either of us are pressuring you to connect to the Virtual World.”</p> <p>Sun thinks it over, then nods, “I want to do this. I can’t let my family’s fears hold me back. I’m not afraid.”</p> <p>Sara drew a breath of relief. It almost felt selfish for her to feel so strongly about Sun getting into the Virtual World after all this time. Of course she wanted her friend to be able to experience the magic of the Virtual World. It had to be their decision though, an honest one. They were an adult now, these were life-changing decisions.</p> </div> </article> ` })}`;
}, "C:/Users/DAISY/GithubPages/vw.z/src/pages/topics/stories/originals/virtual-world/five-stories/01-cautious-01/index.astro", void 0);

const $$file = "C:/Users/DAISY/GithubPages/vw.z/src/pages/topics/stories/originals/virtual-world/five-stories/01-cautious-01/index.astro";
const $$url = "/topics/stories/originals/virtual-world/five-stories/01-cautious-01/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
