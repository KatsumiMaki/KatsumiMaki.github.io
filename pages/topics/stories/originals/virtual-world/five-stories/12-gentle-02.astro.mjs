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
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "12 Gentle 02" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FolderLinks", $$FolderLinks, { "current": current })} ${maybeRenderHead()}<article class="story" data-theme="dark"> <h1 class="story-page-title">12 Gentle 02</h1> <div class="spacer"></div> <div class="spacer"></div> <div class="prose"> <p>Pat doodles with Rainy. The little girl is calm now; she attempts to color within the lines. They had brought out a coloring book of a show they were watching together. Pat doesn’t mind the cartoons for littles, they can be quite fun, especially when they make self-aware jokes and break the fourth wall.</p> <p>Because of how the Meta Device worked, Rainy actually looked like an 8 year old version of her system. Every scan is accessible to the user, so people who grew up with the device would have every version of themself. Plenty of people needed the device as a medical tool, even from a young age, so these earlier scans were quite common in this new generation of Virtual World natives. The device would fetch the avatar that best suited the user’s mentality. This, among many other things, could be customized. However, that ability to customize the device was much harder if the user forgot that the Virtual World wasn’t real. However the settings were last adjusted typically stuck. These users were called Lost Ones.</p> <p>Pat had told so many alters how this is all a game, how they can filter out triggers and protect themselves. But when thoughts of triggers unwind progress and leave Pat to look after a child alter, it could get frustrating. They need a professional, but Pat didn’t know anything about who the system was in the Real World. They were stuck in PrivatePlayer with Pat. If they didn’t know that it was a game, even something as simple as disconnecting could be off the table.</p> <p>Pat tried the <em>Follow Me</em> technique, typically a technique used to exploit Lost Ones. It’s a nuance on how Artificial Intelligence interprets user requests. Basically, Pat would tell whichever alter was fronting to follow them, and then Pat would connect to a different session. With the Lost One left with the desire to follow them, the AI would send a request to Pat, and Pat could accept the join request. This could be used as a way to transport Lost Ones.</p> <p>The technique didn’t work, either a safety feature on Lucia’s part or the AI was not easily persuaded to send a join request. This means that Lucia’s PrivatePlayer instance was the only one they would connect to, so no therapist could enter. Pat wasn’t the administrator of the session, so they couldn’t permit anyone else to join, either.</p> <p>The entire world was shaped around the system’s mentality. If they thought something into existence, or Pat suggested that there was something, the system’s AI would make it appear.</p> </div> </article> ` })}`;
}, "C:/Users/DAISY/GithubPages/vw.z/src/pages/topics/stories/originals/virtual-world/five-stories/12-gentle-02/index.astro", void 0);

const $$file = "C:/Users/DAISY/GithubPages/vw.z/src/pages/topics/stories/originals/virtual-world/five-stories/12-gentle-02/index.astro";
const $$url = "/topics/stories/originals/virtual-world/five-stories/12-gentle-02/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
