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
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "10 Cautious 04" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FolderLinks", $$FolderLinks, { "current": current })} ${maybeRenderHead()}<article class="story" data-theme="dark"> <h1 class="story-page-title">10 Cautious 04</h1> <div class="spacer"></div> <div class="spacer"></div> <div class="prose"> <p>Sun lays on the big bed, between Markus and Sara. All their devices are plugged into the wall, Sara telling them how to start the connection sequence. As soon as Sun drifts off into the Virtual World, Sara and Markus follow suit.</p> <p>Large floating letters say “Welcome, We’re Glad You’re Here…” with the ellipses bouncing as it loads. Sun’s headache slows down, the horrible sensations a bit more under control.</p> <p>The configuration starts up in SinglePlayer, just as Sara mentioned. Sun permits PrivatePlayer, and the two are able to join. They will help out with setting everything up. There was a lot to do, but this was starting off their time in the Virtual World on the right foot. The settings could be changed at any time, but being careful and thorough would literally shape their new reality and how they experience it.</p> <p>The three talked for a long time, starting out with simple, fun things like different ways to integrate the user interface into the game. Sun wanted something futuristic, so they ended up with a holographic display. They made it have a pretty pink shimmer with light blue accents. The three also discussed really heavy topics, like what triggers that Sun had, and how strict the filters were for each. Content Filters could change, cover up, or completely remove concepts from an individual&#39;s Virtual World experience.</p> <p>Sun didn’t like blood, especially not in violent video games. One of the suggestions that they thought could be more manageable would be paint. That isn’t to say blood would always be colored like paint, but in situations that called for weapons, like guns, they would be paintball guns and only leave welts and a splash of paint.</p> <p>There were options that Sun could only dream of before the Meta Device. Immediately upon being presented the option, Sun turned off their menstrual cycle. They laughed with even more gusto as Sara explained that it also soothed the symptoms considerably or even completely in the Real World, too. Few people ever removed their device after the first scan, it had a battery and low power mode to manage everything portably.</p> <p>The Meta Device was connected directly to the mind. A large portion of medication released in the Real World is targeted at the mind. Aside from some biological treatments, the Meta Device can simulate and monitor the effects of most medicine. With this level of connection, old science can be partnered with new techniques to manage the body and mind with the Artificial Intelligence of the device.</p> </div> </article> ` })}`;
}, "C:/Users/DAISY/KatsumiMaki/src/pages/topics/stories/originals/virtual-world/five-stories/10-cautious-04/index.astro", void 0);

const $$file = "C:/Users/DAISY/KatsumiMaki/src/pages/topics/stories/originals/virtual-world/five-stories/10-cautious-04/index.astro";
const $$url = "/topics/stories/originals/virtual-world/five-stories/10-cautious-04/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
