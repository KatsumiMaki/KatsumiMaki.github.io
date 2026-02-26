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
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "27 Fading 05" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FolderLinks", $$FolderLinks, { "current": current })} ${maybeRenderHead()}<article class="story" data-theme="dark"> <h1 class="story-page-title">27 Fading 05</h1> <div class="spacer"></div> <div class="spacer"></div> <div class="prose"> <p>“Hello,” Huey said with a strong lisp. It was the first words that he ever spoke. Rey cried tears of joy, hugging his younger brother.</p> <p>Huey was in critical condition in the Real World, but in the device, in his mind, he was living more than ever. The scanning process was far more involved than a normal Meta-Van scan. They were at an industrial facility, with racks of computers all working away at keeping Huey’s mind and body together. </p> <p>It was frightening to see Huey’s comatose body, but the doctors reassured them that it could be a very different story in the Virtual World. They were right.</p> <p>“I love you,” Huey said to his crying brother. He’s been attempting to say those words for years. The doctor was waking mother up, she had fallen asleep after staying up for several days as it scanned his mind. It wasn’t long before she connected to the Virtual World and hugged her sons.</p> <p>They were going to be ok. There might be complications and tough times ahead, but they were going to go through it together, as a family.</p> <p>They were all tired to the bone, but Huey had to tell them everything. Every thought, feeling, and desire he had been unable to say, all this time. No one knew how much longer they had, but for now, for this little slice of time, it’s all worth it.</p> <p>Huey slipped into SinglePlayer, his mind overwhelmed with all the new connections it was forming and destroying. The process was a shocking work of technology, but just as terrifying. Each one of these devices connected to the back of their skulls easily held the power that could tear a mind to shreds. They were lucky that it was on their side.</p> </div> </article> ` })}`;
}, "C:/Users/DAISY/GithubPages/vw.z/src/pages/topics/stories/originals/virtual-world/five-stories/27-fading-05/index.astro", void 0);

const $$file = "C:/Users/DAISY/GithubPages/vw.z/src/pages/topics/stories/originals/virtual-world/five-stories/27-fading-05/index.astro";
const $$url = "/topics/stories/originals/virtual-world/five-stories/27-fading-05/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
