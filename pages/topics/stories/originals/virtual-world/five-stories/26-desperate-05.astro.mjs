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
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "26 Desperate 05" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FolderLinks", $$FolderLinks, { "current": current })} ${maybeRenderHead()}<article class="story" data-theme="dark"> <h1 class="story-page-title">26 Desperate 05</h1> <div class="spacer"></div> <div class="spacer"></div> <div class="prose"> <p>He didn’t tell his AI to Fuck Off. He closed his eyes, the hatred for himself flaring up. He couldn’t look at her after that.</p> <p>“Wh- Why wasn’t that filtered?” His voice cracked, unsteady. Nothing had stopped him.</p> <p>“User actions are not filtered, regardless if the sensitive material would have been,” The fucking heartless robot answered as if nothing was wrong.</p> <p>“God…” God was dead. This program was so far beyond God, “Can’t you erase my memories of this?”</p> <p>“No.”</p> <p>Of course it couldn’t. The Virtual World was limitless, but fixing his fucked up brain was beyond repair.</p> <p>“Erase everything else then,” and when he opened his eyes everything was stark white. He was sick to his stomach. You could actually do anything in this Virtual World. It didn’t feel like a game to him anymore. That shit… He couldn’t even comprehend how detailed it was, how easy it was to confuse with reality. With the greater majority of the world owning these devices, all with their personal universes inside, it was incredible that the world lasted this long. He can see why it was falling apart, why businesses just pack up shop and that’s it. There’s nothing to gain in the Real World if no one is living in it. Anything was possible, there were no limits.</p> </div> </article> ` })}`;
}, "C:/Users/DAISY/GithubPages/vw.z/src/pages/topics/stories/originals/virtual-world/five-stories/26-desperate-05/index.astro", void 0);

const $$file = "C:/Users/DAISY/GithubPages/vw.z/src/pages/topics/stories/originals/virtual-world/five-stories/26-desperate-05/index.astro";
const $$url = "/topics/stories/originals/virtual-world/five-stories/26-desperate-05/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
