import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../../../chunks/astro/server_CZXttPcx.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../../../../chunks/Base_B9z84OHY.mjs';
import { $ as $$FolderLinks } from '../../../../chunks/FolderLinks_Cb3w_LRp.mjs';
/* empty css                                          */
import { $ as $$ManifestImage } from '../../../../chunks/ManifestImage_DjUjFjTw.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Astro = createAstro("https://katsumimaki.github.io");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const current = Astro2.url.pathname;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Jan '25 Newsletter" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FolderLinks", $$FolderLinks, { "current": current })} ${maybeRenderHead()}<article class="newsletter"> <h1 class="nl-title">January 2025 Newsletter</h1> <p><br><em>From Dan, Your Friend and Graduated Student</em></p> <p>Dear Friends, Happy New Year! January has been a quiet but productive month as I hunkered down indoors, working on creative projects and enjoying the winter break.</p> ${renderComponent($$result2, "ManifestImage", $$ManifestImage, { "month": "2025-01-january", "file": "mannequin-dress.jpg", "float": "right" })} <p>This month, I ventured further into sewing. This photo shows a dress I made using New Look 6202 with beautiful polka dot fabrics from CaliFabrics. My mom thinks it has potential to be gifted to my second cousin, but either way, I’m quickly becoming the sewing cousin alongside my 3D printing skills! My mom loves it when I print out gifts, like puzzles or figures, for them.</p> <div class="spacer"></div> ${renderComponent($$result2, "ManifestImage", $$ManifestImage, { "month": "2025-01-january", "file": "dress-form.jpg", "float": "left" })} <p>Speaking of sewing, I recently got a dress form (photo) to start learning draping. Vannessa Storm the Dress Form is a spitting image of myself, aren't they? That was through the work of photogrammetry and an impressive multi-axis CNC mill from the folx over at Beatrice Forms.</p> <p>I’ll be participating in a drape-a-long with an online forum, following along with Kiisel’s \`\`Draping: The Complete Course." I’ll also be taking a pattern-making class in the fall to further my skills. I'm already considering investing in a coverlock machine for professional hems, as knit fabric has proven to be my favorite to work with.</p> <div class="spacer"></div> ${renderComponent($$result2, "ManifestImage", $$ManifestImage, { "month": "2025-01-january", "file": "sony-trip.jpg", "float": "right" })} <p>Although I’m no longer a TA, I still maintain friendships with the new TAs and my professor. This photo captures a field trip to Sony, where the class recorded crowd samples. It’s been rewarding to see the course continue to flourish after my five semesters of TA-ing!</p> <div class="spacer"></div> ${renderComponent($$result2, "ManifestImage", $$ManifestImage, { "month": "2025-01-january", "file": "valentines-fundip.jpg", "float": "left" })} <p>Valentine’s Day is around the corner, and I’ve continued my yearly tradition of handing out cards with Fun Dip (photo). I found some black-and-white art from my favorite fandoms and colored them in with my mom. A perk of only having a black-and-white printer is the creative solutions I find!</p> <p>That’s all for this month! I’ve been something of a hermit, mostly staying indoors, listening to music and audiobooks, drawing, and playing video games. I do go outside for walks with my mom and talk to her plenty, but otherwise, it’s been a quiet winter break. I’ve also enjoyed watching YouTube videos of creative people making things —and sometimes I even try to do as many of these activities at once, now with caffeine in hand. My resolution to drink it again has gone splendidly.</p> <p>Though my brain may rot, I am at the whim of my hyperfixations. Feel free to ask me about all the art I've made, and I can share some of the results! I'm nearing 15 artworks since December, each takes around 3-6 hours. That's plenty of time to listen to audio books, as well! Though, I honestly enjoy music enough to do nothing but listen to it (maybe for a much-needed break).</p> <p>Here’s to a productive and creative February!</p> </article> ` })}`;
}, "C:/Users/DAISY/KatsumiMaki/src/pages/topics/newsletters/originals/2025-01-january/index.astro", void 0);

const $$file = "C:/Users/DAISY/KatsumiMaki/src/pages/topics/newsletters/originals/2025-01-january/index.astro";
const $$url = "/topics/newsletters/originals/2025-01-january/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
