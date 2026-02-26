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
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "03 Fading 01" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FolderLinks", $$FolderLinks, { "current": current })} ${maybeRenderHead()}<article class="story" data-theme="dark"> <h1 class="story-page-title">03 Fading 01</h1> <div class="spacer"></div> <div class="spacer"></div> <div class="prose"> <p>The White Van finally came for him. Richie knew this day would come. His friends kept telling him that he was too loud, too obnoxious. He yelled at them to shut up, but they always spoke over his voice.</p> <p>The White Glove Guys stepped over Richie’s dinner, careful not to stain their all-white attire. Richie attempted to scramble away, grabbing his most precious item. A barbie doll that he called Patricia, a reminder of his family. He has a wife and daughter. His daughter must be all grown up by now. </p> <p>They grabbed him roughly by the arms. His friends shouted at the officers, but they didn’t seem to pay any attention to their begging. Richie hung his head in defeat. He was too weak to resist. The back of the White Van approached. This was it. No one knew what lay beyond this point, because no one returned from the White Van.</p> <p>He struggled as they lifted him into the Van, but it was no use. They buzzed the back of his head, his tangled hair clogging up the buzzers and sloughing off of his head in thick dreadlocks. They told him to be still as they fitted a device to the back of his head. A cool sensation spread from the nape of his neck to his extremities and his tense muscles loosened.</p> <p>Patricia slipped from his grip and her brittle plastic clattered onto the smooth white floor. An overwhelming euphoria overcame him and his mind separated from his body. This was it, he was going to heaven. He watched the van grow smaller, and suddenly, he was in a completely different world.</p> <p>They were standing right in front of him. His beautiful wife and daughter. They were exactly how he remembered them. Tears welled up in the corners of his eyes. He hugged them both, the voices of his friends fading away. After all these years, he was finally happy.</p> </div> </article> ` })}`;
}, "C:/Users/DAISY/GithubPages/vw.z/src/pages/topics/stories/originals/virtual-world/five-stories/03-fading-01/index.astro", void 0);

const $$file = "C:/Users/DAISY/GithubPages/vw.z/src/pages/topics/stories/originals/virtual-world/five-stories/03-fading-01/index.astro";
const $$url = "/topics/stories/originals/virtual-world/five-stories/03-fading-01/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
