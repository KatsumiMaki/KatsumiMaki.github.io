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
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "33 Fading 06" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FolderLinks", $$FolderLinks, { "current": current })} ${maybeRenderHead()}<article class="story" data-theme="dark"> <h1 class="story-page-title">33 Fading 06</h1> <div class="spacer"></div> <div class="spacer"></div> <div class="prose"> <p>Bees. Huey was surrounded by a swarm of bees, a whirlpool of buzzing. Rey reached a hand out, but a few landed on his arm and stung him. Mother had fallen asleep again, she was off in SinglePlayer. Rey had admin rights, but the doctors suggested that he wouldn’t do anything drastic, no matter how bad it seemed. Huey’s mind was working through some really tough times, and it manifested into the Virtual World to make him feel better.</p> <p>Rey turned down his sense of pain, opting to let Huey calm down. He started playing a song on the ukulele, just like he would when Huey got angry in the Real World. Mother would be back soon, she was always able to help her kids feel better.</p> <p>The cloud of bees burst on fire, singeing Rey’s clothes and crawling into the ukulele. This was only a nightmare, but Huey wasn’t being sent to SinglePlayer. The Meta Device has a much harder time differentiating what is and isn’t purposeful when interpreting Huey’s thoughts.</p> <p>“Huey dearie,” Mother was awake again, looking much worse than last time. She wasn’t unfamiliar with the long days, but the stress of the procedure was distinctly more draining.</p> <p>The swarm lifted off of the huddled boy. The sound of her voice calmed the bees. They landed nearby, murmuring to themselves with little dancing movements.</p> <p>He reached out, her super-mom strength able to pick him up again, after all these years. He clutched at her shirt, tears in his eyes.</p> <p>“It hurts, they’re crawling around my mind,” he whimpered, the Meta Devices activity now painfully obvious as the anesthesia wore off.</p> <p>“I know baby, I know,” she rocked him back and forth, wooing and reassuring her youngest. Rey quietly strummed the ukulele and hummed along, the bees now placidly crawling around. He liked to think they were dancing to the music, too.</p> </div> </article> ` })}`;
}, "C:/Users/DAISY/GithubPages/vw.z/src/pages/topics/stories/originals/virtual-world/five-stories/33-fading-06/index.astro", void 0);

const $$file = "C:/Users/DAISY/GithubPages/vw.z/src/pages/topics/stories/originals/virtual-world/five-stories/33-fading-06/index.astro";
const $$url = "/topics/stories/originals/virtual-world/five-stories/33-fading-06/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
