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
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "09 Sudo" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FolderLinks", $$FolderLinks, { "current": current })} ${maybeRenderHead()}<article class="story" data-theme="dark"> <h1 class="story-page-title">09 Sudo</h1> <div class="spacer"></div> <div class="spacer"></div> <div class="prose"> <p>Stacy stormed into her room, slamming the door behind her and jumped onto the bed angrily. She plugged her device into power and put her head on the pillow. The Real World fizzled out as she was sent to SinglePlayer. </p> <p>A wizard’s cloak materialized, replacing the crop top and short shorts that her stepmom made her wear. Here, she was Sudo the Wizard, whose magic was as powerful as his white beard.</p> <p>From beyond the trees, a hunchbacked old hag hobbled out, waving a stick back and forth. It swished and sliced the air, the leaves on the end as threatening as a cat of nine tails. Sudo’s anger swirled, he gathered it up between his palms and turned it into red magic. With a swirl of his right hand, and a flick of his left, he sent a scurry of energy at her.</p> <p>The makeshift switch in her hand glowed red, taking on Sudo’s anger. It animated, jumping out of her calloused grasp and swiping at her instead. She covered her head, hobbling back into the forest with surprising speed.</p> <p>Good Riddance, Sudo thought to himself. The stick flew to his hand, perching upon it like a bird of prey. Just a tool, the switch was harmless when not in that bitch’s hand. He pat its head; the rough leaves tickling, rather than torturous.</p> <p>There was a beauty in it, resting peacefully in his control. Here, the entire plane of existence was under his control. He could change everything and anything with his infinite power.</p> </div> </article> ` })}`;
}, "C:/Users/DAISY/KatsumiMaki/src/pages/topics/stories/originals/virtual-world/commands/09-sudo/index.astro", void 0);

const $$file = "C:/Users/DAISY/KatsumiMaki/src/pages/topics/stories/originals/virtual-world/commands/09-sudo/index.astro";
const $$url = "/topics/stories/originals/virtual-world/commands/09-sudo/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
