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
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "30 Gentle 05" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FolderLinks", $$FolderLinks, { "current": current })} ${maybeRenderHead()}<article class="story" data-theme="dark"> <h1 class="story-page-title">30 Gentle 05</h1> <div class="spacer"></div> <div class="spacer"></div> <div class="prose"> <p>Lucia looks at the smoking pistol. She pulled the trigger, the deed was done. Her tormentor’s brains coated the wall, his face was unrecognizable. Red and blue flashing lights were already starting to illuminate the blinds, the familiar sound of sirens getting louder.</p> <p>The pistol turned towards herself. Her hand shook, unsteady. She did it once. Just one little twitch, a tug of the finger, and she would escape this personal hell.</p> <p>She retched, unable to stand the overpowering stench of blood. Her emotions swirled, she spiraled into a panic attack. The weapon clattered harmlessly to the floor. Such a small object, so easily able to change everything.</p> <p>Thuds at the door let her know how this would end. They found her, and there was nothing she could do. She was petrified, the murder weapon far from reach.</p> <p>Her awareness faded away as they roughly bound her hands and placed her in the cop car. She was no longer Lucia, no longer in control. They were safe. He was gone.</p> </div> </article> ` })}`;
}, "C:/Users/DAISY/GithubPages/vw.z/src/pages/topics/stories/originals/virtual-world/five-stories/30-gentle-05/index.astro", void 0);

const $$file = "C:/Users/DAISY/GithubPages/vw.z/src/pages/topics/stories/originals/virtual-world/five-stories/30-gentle-05/index.astro";
const $$url = "/topics/stories/originals/virtual-world/five-stories/30-gentle-05/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
