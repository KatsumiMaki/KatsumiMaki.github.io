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
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "02 Cat" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FolderLinks", $$FolderLinks, { "current": current })} ${maybeRenderHead()}<article class="story" data-theme="dark"> <h1 class="story-page-title">02 Cat</h1> <div class="spacer"></div> <div class="spacer"></div> <div class="prose"> <p>Daz and Cat were sitting on the swings at the park, swaying gently back and forth. They had met earlier that day and quickly realized that they had a lot in common. Cat asked Daz if he wanted to play on the jungle gym, and he agreed. They climbed and played together, pretending to be pirates searching for treasure. As the day went on, they played on the slide and the seesaw, laughing and joking.</p> <p>While playing on the jungle gym, Daz noticed that there were no other kids at the park. At first, he thought it was just a coincidence, but as he looked around, he realized that the park was completely empty. It was a beautiful day, so he couldn’t understand why there wasn’t anyone else there.</p> <p>He climbed down from the jungle gym and wandered around the park, looking for other kids. But the park was completely deserted, and it was starting to feel eerie. Just as Daz was about to give up, he heard Cat calling his name. She was running towards him, panting a little.</p> <p>“Daz! I’m so glad I found you,” Cat said. “I was starting to get worried that I was the only one here… I don’t know where everyone else went.”</p> <p>As they sat on the swings, they looked around at the empty park. “Do you think we’re dreaming?” Daz asked Cat. “Maybe this is all just a weird dream that we’re having.”</p> <p>“I don’t know,” Cat said. “It seems pretty real to me. But I’ve heard of people having dreams that felt just as real as this.”</p> <p>The silence of the park was getting uncomfortably loud, the cyclical squeaking of the swings a reminder that they were the only ones here.</p> <p>“Maybe it’s a simulation,” Cat said, her eyes lighting up. “You know, like in the movies! Maybe we’re part of some kind of experiment, and this is all just a computer program.”</p> <p>“That’s a really interesting idea,” Daz said, his curiosity piqued. “But how would we ever know for sure?”</p> <p>“I don’t know,” Cat said with a shrug. “But it’s definitely something to think about. It would explain a lot of things.”</p> <p>“What do you think it would explain?” Daz asked Cat.</p> <p>Cat thought for a moment. “Like how the sun never seems to move in the sky. And how the temperature is always the same, no matter what time of day it is. And how we never seem to get hungry or tired. It’s like everything is frozen in time, except for us.”</p> <p>Daz was quiet for a moment, thinking about what she had said. There really was a distinct lack of uncomfort. Nothing was bad or good, because there wasn’t anything to compare and contrast.</p> <p>“So you think we’re in a simulation?” he asked.</p> <p>“I don’t know for sure,” Cat pondered. “But it’s definitely a possibility. And if it is a simulation, it’s a really good one. Everything feels so real… But I can’t shake the feeling that something is missing.”</p> </div> </article> ` })}`;
}, "C:/Users/DAISY/GithubPages/vw.z/src/pages/topics/stories/originals/virtual-world/commands/02-cat/index.astro", void 0);

const $$file = "C:/Users/DAISY/GithubPages/vw.z/src/pages/topics/stories/originals/virtual-world/commands/02-cat/index.astro";
const $$url = "/topics/stories/originals/virtual-world/commands/02-cat/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
