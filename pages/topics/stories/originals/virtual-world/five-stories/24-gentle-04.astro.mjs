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
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "24 Gentle 04" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FolderLinks", $$FolderLinks, { "current": current })} ${maybeRenderHead()}<article class="story" data-theme="dark"> <h1 class="story-page-title">24 Gentle 04</h1> <div class="spacer"></div> <div class="spacer"></div> <div class="prose"> <p>Pat wanders aimlessly. Without admin permissions, this world stays stagnant in the absence of the system. Toys, pillow forts, and playground equipment were scattered around, reminders of the fun times they had together. It was really simple to connect with the young alters. But they were stuck at such an early developmental stage. Pat had a few good deep conversations with the older alters, but they don’t tend to stick around for long. Some topic will come up that’s dangerous to the system and they regress yet again.</p> <p>They step onto a canoe at the edge of a lake. The vessel bobs, then carries them gently to deeper waters. Pat sits down, head in his hands. The rhythm of the lake sends their sullen and tired mind into a trance. It isn’t long before they fall asleep, returning to SinglePlayer.</p> <p>The world melts and Pat is at his old home. They peek through the dusty blinds, the window surrounded by piles of stuff that nearly meets the ceiling. Outside there’s commotion, people in yellow space suits carrying a pile of sheets on a stiff board between them. They place it into the back of an ambulance before getting in and driving off. The wails of the vehicle fade away. It’s safe to open the door and collect the boxes from the porch. What arrived this time, Pat hasn’t a clue. It’s like their birthday when the boxes arrive.</p> <p>Pat looks around for a knife, toppling one of the stacks in their excitement. They roll their eyes and build it back up. Toenail clippers were found first, so they use the file to break the weak plastic. Bags of food and bottles of water fill this one, so they hide it in one of the smaller stacks. The next one has an action figure. Pat rejoices, ripping the packaging apart to release G.I. Joseph. The trooper immediately scans his surroundings, scaling one of the teetering towers to scout where the next mission will take place.</p> </div> </article> ` })}`;
}, "C:/Users/DAISY/GithubPages/vw.z/src/pages/topics/stories/originals/virtual-world/five-stories/24-gentle-04/index.astro", void 0);

const $$file = "C:/Users/DAISY/GithubPages/vw.z/src/pages/topics/stories/originals/virtual-world/five-stories/24-gentle-04/index.astro";
const $$url = "/topics/stories/originals/virtual-world/five-stories/24-gentle-04/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
