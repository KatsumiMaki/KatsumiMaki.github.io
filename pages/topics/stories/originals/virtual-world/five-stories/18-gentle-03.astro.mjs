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
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "18 Gentle 03" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FolderLinks", $$FolderLinks, { "current": current })} ${maybeRenderHead()}<article class="story" data-theme="dark"> <h1 class="story-page-title">18 Gentle 03</h1> <div class="spacer"></div> <div class="spacer"></div> <div class="prose"> <p>Pat didn’t want to convince the system to disconnect. They could wake up in a bad environment, the shock could be too great for them. Also, selfishly, Pat wouldn’t be able to know what would happen after that. It could be that the system would never connect to the Virtual World again. They could disconnect with no way to come back, and Pat would never know what happened.</p> <p>There was also no way to learn Real World info from them. Doxxing was much harder with the systems of  anonymity in place. Only the most adept of people would be able to obtain that level of information, and even then it isn’t because of cracking the code, but through social coercion. Most of the systems wouldn’t be privy to that information anyway, the separate identities not being able to remember parts of the system’s memory. The ones that do are far too scared to talk about it.</p> <p>“I love you,” Rainy mumbled, hugging Pat, hand pulling on his shirt collar. She was one of the most affectionate alters. Pat pet her head as she rested it on his chest. He took a deep breath, exhaling slowly. He had lost contact with his various groups of friends; he hadn&#39;t left the PrivatePlayer instance with the system for a few months at this point. He found that he didn’t miss the endless party-life that his friends got wrapped up into. People were much more important, and he could never form strong attachments to people in those scenes.</p> <p>“I love you, too,” Pat said quietly, her eyes closing as she drifted away. It wasn’t long until her consciousness dipped enough to send her mind to SinglePlayer. Her avatar faded out, Pat left to mull over their strong emotions. He has such a strong drive to protect his friend. Protect from their past. He couldn’t undo what has been done, but he would be there for them every step of the way.</p> </div> </article> ` })}`;
}, "C:/Users/DAISY/GithubPages/vw.z/src/pages/topics/stories/originals/virtual-world/five-stories/18-gentle-03/index.astro", void 0);

const $$file = "C:/Users/DAISY/GithubPages/vw.z/src/pages/topics/stories/originals/virtual-world/five-stories/18-gentle-03/index.astro";
const $$url = "/topics/stories/originals/virtual-world/five-stories/18-gentle-03/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
