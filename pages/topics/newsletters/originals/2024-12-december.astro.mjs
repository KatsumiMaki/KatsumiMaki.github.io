import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../../../chunks/astro/server_CZXttPcx.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../../../../chunks/Base_DMGW_6Ds.mjs';
import { $ as $$FolderLinks } from '../../../../chunks/FolderLinks_5Et2assD.mjs';
/* empty css                                          */
import { $ as $$ManifestImage } from '../../../../chunks/ManifestImage_D8GAQ5ll.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Astro = createAstro("https://katsumimaki.github.io");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const current = Astro2.url.pathname;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Dec '24 Newsletter" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FolderLinks", $$FolderLinks, { "current": current })} ${maybeRenderHead()}<article class="newsletter"> <h1 class="nl-title">December 2024 Newsletter</h1> <p><br><em>From Dan, Your Friend and Master's Student at SDSU</em></p> <p>Dear Friends, Happy December! Merry Christmas and Happy New Year. This month marked a wonderful milestone as I graduated and reflected on the past year, surrounded by friends, family, and festive cheer.</p> ${renderComponent($$result2, "ManifestImage", $$ManifestImage, { "month": "2024-12-december", "file": "finals-sidewalk.jpg", "float": "right" })} <p>As finals season approached, the supportive spirit on campus was evident in little messages of encouragement. photoshows one such message, reminding me to stay focused. I \`\`locked in" and completed my final classes, officially graduating this month!</p> <div class="spacer"></div> ${renderComponent($$result2, "ManifestImage", $$ManifestImage, { "month": "2024-12-december", "file": "gingerbread-ornament.jpg", "float": "left" })} <p>This season, I explored creative projects like making a gingerbread house ornament. photoshowcases my attempt, crafted with 3D printed walls and roof, using a 3D pen as frosting. The picture makes it look larger than it is, but I loved the process.</p> <div class="spacer"></div> ${renderComponent($$result2, "ManifestImage", $$ManifestImage, { "month": "2024-12-december", "file": "pony-ocs.jpg", "float": "right" })} <p>Another highlight was receiving a beautiful painting of my original characters, Chim and Stella, from a dear friend (photo). These characters, originally from a fanfiction I wrote in 2016, hold special memories. Revisiting their story for a rewrite is on my agenda now that I’ve graduated.</p> <p>My friend also embarked on his tattoo journey this month. photocaptures the precise artistry as he got a baby cow tattooed on his calf. I played the role of emotional support, a role I’ll reprise as he begins work on a full sleeve. The sleeve will not include baby calves, however.</p> <div class="spacer"></div> ${renderComponent($$result2, "ManifestImage", $$ManifestImage, { "month": "2024-12-december", "file": "calf-tattoo.jpg", "float": "left" })} <p>December also brought festive family gatherings. photoshows Vintersaga, a mulled fruit drink blend that added a cozy touch to our Christmas lunch, where tacos were the main dish—a delightful and unconventional holiday feast with my aunts.</p> <div class="spacer"></div> ${renderComponent($$result2, "ManifestImage", $$ManifestImage, { "month": "2024-12-december", "file": "vintersaga.jpg", "float": "right" })} <p>Over Christmas break, I had the joy of house-sitting for Blackjack, a two-month-old pitbull mix (photo). His boundless energy kept me busy, but during his nap times, I revisited my childhood by reading the Erec Rex series, finishing three books in just three days.</p> <div class="spacer"></div> ${renderComponent($$result2, "ManifestImage", $$ManifestImage, { "month": "2024-12-december", "file": "blackjack-puppy.jpg", "float": "left" })} <p>December was a month of milestones, celebrations, and heartwarming moments. Here’s to a joyful and fulfilling New Year ahead!</p> <p>My New Year's resolution for 2025 is to start drinking caffeine again, as my resolution for 2024 was to no longer drink it (and I was successful). But it has positive effects on cognitive function, including improved alertness and focus, enhanced mental performance, and better memory retention. It could even protect against certain neurodegenerative diseases. All in moderation of course, but I do quite enjoy my cloying tasting drinks, like nasty zero sugar drinks that are claiming to be bottled rainbows or whatever. Don't worry, I couldn't ever drink a full can in a day and won't start with the hard stuff right away. But it can be a fun treat, especially for gaming sessions where I need to "lock in."</p> </article> ` })}`;
}, "C:/Users/DAISY/GithubPages/vw.z/src/pages/topics/newsletters/originals/2024-12-december/index.astro", void 0);

const $$file = "C:/Users/DAISY/GithubPages/vw.z/src/pages/topics/newsletters/originals/2024-12-december/index.astro";
const $$url = "/topics/newsletters/originals/2024-12-december/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
