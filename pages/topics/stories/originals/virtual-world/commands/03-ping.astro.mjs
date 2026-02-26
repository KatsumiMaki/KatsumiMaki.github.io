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
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "03 Ping" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FolderLinks", $$FolderLinks, { "current": current })} ${maybeRenderHead()}<article class="story" data-theme="dark"> <h1 class="story-page-title">03 Ping</h1> <div class="spacer"></div> <div class="spacer"></div> <div class="prose"> <p>“How long has it been? Do you have to log off soon, Ping?” </p> <p>Ping smiled brightly. This was the surprise he was waiting to tell for the whole day. He shook his head.</p> <p>“No, you didn’t,” her face turned to shock, “You didn’t!”</p> <p>She shoved him playfully, warning him to not joke about this. She was a fiery little thing, barely standing up to his chest height. Her short stature was misleading; she was far stronger than him.</p> <p>She was a Virtual World native, otherwise known as a 24/7. She didn’t need to log off, for her Real body was on life support. And now, he was too.</p> <p>“I did…” He smirked, her expressive responses always entertaining to him.</p> <p>She sat down on a nearby log, her mind blown, “this changes so much. Seriously. I mean, you can now do anything you want, whenever you want.”</p> <p>“I can sleep here now,” He teased; her face flushing. She got up, looking like she was going to rip his head off, but restrained herself. </p> <p>“I mean, yeah… That’s how 24/7 works,” She muttered once she realized that might not have been targeted at her. They had a flirty relationship, and he kept her on her toes. But he never went too far, and she respected that about him. </p> <p>But people change once they go 24/7. They can’t help but to treat the Virtual World differently once it’s all they have. Some had endless parties of escapism. Others enveloped themselves in their choice of reality. This was a new chapter in Ping’s life, and Ava was glad to be a part of it.</p> </div> </article> ` })}`;
}, "C:/Users/DAISY/GithubPages/vw.z/src/pages/topics/stories/originals/virtual-world/commands/03-ping/index.astro", void 0);

const $$file = "C:/Users/DAISY/GithubPages/vw.z/src/pages/topics/stories/originals/virtual-world/commands/03-ping/index.astro";
const $$url = "/topics/stories/originals/virtual-world/commands/03-ping/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
