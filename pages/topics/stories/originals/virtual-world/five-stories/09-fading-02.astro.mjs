import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../../../../../chunks/astro/server_CZXttPcx.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../../../../../../chunks/Base_B9z84OHY.mjs';
import { $ as $$FolderLinks } from '../../../../../../chunks/FolderLinks_Cb3w_LRp.mjs';
/* empty css                                                */
export { renderers } from '../../../../../../renderers.mjs';

const $$Astro = createAstro("https://katsumimaki.github.io");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const current = Astro2.url.pathname;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "09 Fading 02" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FolderLinks", $$FolderLinks, { "current": current })} ${maybeRenderHead()}<article class="story" data-theme="dark"> <h1 class="story-page-title">09 Fading 02</h1> <div class="spacer"></div> <div class="spacer"></div> <div class="prose"> <p>“Another Skitzo…” The Medic shakes his head. The man sprawled out before him smelled foul, even before he lost bowel control.</p> <p>The Scanner could deal with Epileptics, Paraplegics, you name it. Consistently the worst mortality rate was Skitzophrenics. Even if they were scanned before their symptoms were obvious, it seemed to set off something in their mind that would exponentially run away.</p> <p>The VirtualHome Initiative was created to give the homeless a place in society. With society moving to the Virtual World, it was easier to place the homeless in centers that would provide for their every need. Life Support was free for the rest of their natural life, the connection to SinglePlayer, PrivatePlayer, and MultiPlayer were unrestricted. There were volunteer groups from every religion and charity organization that would educate the homeless on how to safely access the Virtual World. Lessons on Content Filters, Safe Words, User Settings, all the support they needed to be a functioning member of the next society, the Virtual Society.</p> <p>All the while, the backbone of what made the VirtualHome Initiative so successful was the testing. People were too nervous to implement new techniques into scanners, for fear of losing their life. The VirtualHome Initiative was able to pioneer new techniques with a populace that didn’t have a choice. Under the guise of providing a luxurious life of safety, the promise of a forever home only made it to the ones who survived the scanning process. If a few didn’t make it, not many would know or care. Each technique was meticulously logged and studied from, so the future would be safer for everyone.</p> <p>Every year, there was celebration of homeless levels plummeting and VirtualHome centers being filled up, yet it was never taken into question of how many didn’t make it.</p> </div> </article> ` })}`;
}, "C:/Users/DAISY/KatsumiMaki/src/pages/topics/stories/originals/virtual-world/five-stories/09-fading-02/index.astro", void 0);

const $$file = "C:/Users/DAISY/KatsumiMaki/src/pages/topics/stories/originals/virtual-world/five-stories/09-fading-02/index.astro";
const $$url = "/topics/stories/originals/virtual-world/five-stories/09-fading-02/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
