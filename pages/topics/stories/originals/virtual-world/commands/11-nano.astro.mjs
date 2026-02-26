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
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "11 Nano" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FolderLinks", $$FolderLinks, { "current": current })} ${maybeRenderHead()}<article class="story" data-theme="dark"> <h1 class="story-page-title">11 Nano</h1> <div class="spacer"></div> <div class="spacer"></div> <div class="prose"> <p>“Oww!” She cried, feeling like her joints were about to pop out. A particularly rude kid was prodding and tugging on her limbs. Not. A. Toy.</p> <p>Well, she was a doll. But how many dolls scream in pain when you play with them too harshly? Not cool.</p> <p>Nano was a bunny princess, a ball joint doll about 50 cm tall. Her sparkling white finish was immaculate, paired with white lacy clothes. Porcelain dolls weren’t often articulated anymore, due to the brittle nature of the material. However, her white finish would never discolor or fade, and it was difficult to chip her.</p> <p>He took her lacy dress off with a tug. She covered herself, her face flushing pink. She was anatomically correct, something she occasionally regretted with most of her clothes made of lace. She was seconds from transforming to her full-size Virtual Real avatar to run this kid off.</p> <p>However, she was saved by Lucy returning, “hey, don’t touch her!”</p> <p>The brute ran off, likely to terrorize some other toys. She shook her head, putting her arms up so that Lucy could put the new dress on her.</p> <p>“Sorry,” Lucy whispered. It’s ok. He doesn’t know any different. They just have a different way of playing, and that’s ok. Everyone was here to have a fun time.</p> <p>A daycare for littles. Ironically, minors were specifically excluded from joining. Everyone was at some level of age-verification, at least as much as one could these days. No, this was a world for those who wanted to revisit nostalgia, all for their own unique reasons.</p> <p>Nano loved her dolls as a child. She always wanted to see what they saw. Attend their tea parties, speak to them face-to-face. Dolls were never human-sized, and the ones that were… weren’t for children to play with. No, she wanted to be quite literally small, even back then.</p> <p>Now, all was possible. Lucy was her best friend. Nano saw herself in this little girl’s eyes. That innocent glance, the playful smile. Nano was so happy to play with Lucy.</p> <p>They both knew what this really was. Two adults, remembering the past. It gave them another chance. It was a way to pass the time, to destress. The friendship was there, even if neither of them acted like this with anyone else. It was fun to simply enjoy what they had.</p> </div> </article> ` })}`;
}, "C:/Users/DAISY/GithubPages/vw.z/src/pages/topics/stories/originals/virtual-world/commands/11-nano/index.astro", void 0);

const $$file = "C:/Users/DAISY/GithubPages/vw.z/src/pages/topics/stories/originals/virtual-world/commands/11-nano/index.astro";
const $$url = "/topics/stories/originals/virtual-world/commands/11-nano/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
