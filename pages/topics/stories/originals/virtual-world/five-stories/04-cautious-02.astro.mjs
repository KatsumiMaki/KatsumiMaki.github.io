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
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "04 Cautious 02" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FolderLinks", $$FolderLinks, { "current": current })} ${maybeRenderHead()}<article class="story" data-theme="dark"> <h1 class="story-page-title">04 Cautious 02</h1> <div class="spacer"></div> <div class="spacer"></div> <div class="prose"> <p>Sun stepped into the White Van. It was finally their turn, the line for these scanners was several hours long. There was a touchscreen with some paperwork, Sun filling it out in a surreal state. Genderfluid was listed! Of course it was, Sara told them about how accepting the Virtual World was. Their family could never.</p> <p>As soon as they submitted, they moved on to the fitting process. They undressed as instructed, embarrassed. The nurse soothed their nerves, speaking with them as the device slid behind their head. There was barely a pinprick, Sun had flu shots that were more painful. Endorphins rushed to the surface of their skin, their body flushing a new shade of red.</p> <p>“It’s acclimating to your body, step into the center so it can sync to your mental map. You’ll feel sensations as it adjusts. It should take just a moment, then you can get dressed into the outfit that will be your default,” they instructed, stepping out of the room. There was a huge curved screen with a diagram showing how Sun should hold their arms. A T-Pose felt quite silly, Sun seeing the little elementary students copying it at recess. Waves of curious feelings spread through their body and mind, pain, pleasure, nausea. The machine was memorizing it all.</p> <p>It was just as quick as the nurse said, Sun dressing in their favorite pair of joggers, a loose tee, and putting their hair up in a complex braided bun. The scanner passed by again, the feelings far more tactile this time. It wasn’t just scanning their feelings, but taking extremely accurate photos for the aptly named Virtual Real Avatar. That way, in the Virtual World, Sun will look exactly like they do in the Real World.</p> </div> </article> ` })}`;
}, "C:/Users/DAISY/KatsumiMaki/src/pages/topics/stories/originals/virtual-world/five-stories/04-cautious-02/index.astro", void 0);

const $$file = "C:/Users/DAISY/KatsumiMaki/src/pages/topics/stories/originals/virtual-world/five-stories/04-cautious-02/index.astro";
const $$url = "/topics/stories/originals/virtual-world/five-stories/04-cautious-02/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
