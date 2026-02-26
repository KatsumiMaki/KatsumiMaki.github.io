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
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "17 Shell" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FolderLinks", $$FolderLinks, { "current": current })} ${maybeRenderHead()}<article class="story" data-theme="dark"> <h1 class="story-page-title">17 Shell</h1> <div class="spacer"></div> <div class="spacer"></div> <div class="prose"> <p>Tom stood in the center of the room, eyes closed, a smile gracing his lips. In his hands, he held a balloon, feeling the vibrations of the music as they pulsed through the thin latex. He swayed to the rhythm, each thump resonating within his chest, allowing him to feel the music.</p> <p>The room was alive with movement, as members of Tom’s drum club gathered around traditional African drums, their hands expertly striking the taut skins. Most of the members were hard of hearing, or Deaf like Tom, but they found solace and connection in the deep rhythms of the drums.</p> <p>Shell entered the room, drawn by curiosity and the powerful reverberations emanating from within. The robot observed the scene before it, taking in the fluid motions of the drummers and the palpable energy in the room. The beat seemed to permeate every inch of the space, creating a kinetic tapestry that bound the people together.</p> <p>As Shell’s sensors analyzed the room, it quickly realized that most of the drummers were using ASL to communicate with one another. Intrigued, Shell approached the group, using basic ASL to greet them and fingerspell its name: S.H.E.L.L. The drum club members greeted the robot warmly, inviting it to sit down and join them.</p> <p>Sitting down at an empty drum, Shell’s robotic limbs proved to be staccato, its timing impeccable. SWING, they signed. The robot adjusted its tempo, smiling at the new friends. The drum club members cheered as the robot integrated itself into their music, enhancing the collective beat.</p> <p>As the drum session drew to a close, the drummers gathered around Shell, curious to learn more about their new companion. Shell used what he downloaded of ASL to explain its origins as a time-traveling robot, able to explore the multiverse and experience countless dimensions and moments in time.</p> <p>The members of the drum club watched in awe as Shell regaled them with stories of its travels. As the gathering came to an end, Shell thanked the group with a hand to its chin, for welcoming it into their world and sharing their unique passion for music.</p> </div> </article> ` })}`;
}, "C:/Users/DAISY/GithubPages/vw.z/src/pages/topics/stories/originals/virtual-world/commands/17-shell/index.astro", void 0);

const $$file = "C:/Users/DAISY/GithubPages/vw.z/src/pages/topics/stories/originals/virtual-world/commands/17-shell/index.astro";
const $$url = "/topics/stories/originals/virtual-world/commands/17-shell/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
