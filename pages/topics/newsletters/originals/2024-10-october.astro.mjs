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
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Oct '24 Newsletter" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FolderLinks", $$FolderLinks, { "current": current })} ${maybeRenderHead()}<article class="newsletter"> <h1 class="nl-title">October 2024 Newsletter</h1> <p><br><em>From Dan, Your Friend and Master's student at SDSU</em></p> <p>Dear Friends, I hope this newsletter finds you well and enjoying the season of Halloween and cozy autumn days!</p> ${renderComponent($$result2, "ManifestImage", $$ManifestImage, { "month": "2024-10-october", "file": "halloween-cloak.jpg", "float": "right" })} <p>October was packed with creative projects and fun gatherings! I started off the month by completing a Halloween cloak, which I made from scratch to dress up as a werewolf for a D&D one-shot campaign (see photo). The cloak was the perfect touch to bring my character to life and added to the excitement of the game.</p> <div class="spacer"></div> ${renderComponent($$result2, "ManifestImage", $$ManifestImage, { "month": "2024-10-october", "file": "parents-visiting.jpg", "float": "left" })} <p>Next, my parents had a wonderful trip to visit their nephews and niece, spending quality time with family. This photo captures a heartfelt moment from their visit.</p> <div class="spacer"></div> ${renderComponent($$result2, "ManifestImage", $$ManifestImage, { "month": "2024-10-october", "file": "cat-sitting.jpg", "float": "right" })} <p>During my parents' trip, I had the responsibility of house-sitting for them, including taking care of our cat (see photo). It was nice to have her company and to bond while they were away. She now sits on my lap while I'm at the computer, to keep warm.</p> <div class="spacer"></div> ${renderComponent($$result2, "ManifestImage", $$ManifestImage, { "month": "2024-10-october", "file": "golden-retrievers.jpg", "float": "left" })} <p>Right after that, I also house-sat for a neighbor, taking care of two golden retrievers who kept me on my toes. They were full of energy, and as you can see in photo, they added plenty of joy to my October.</p> <div class="spacer"></div> ${renderComponent($$result2, "ManifestImage", $$ManifestImage, { "month": "2024-10-october", "file": "dream-outfit.jpg", "float": "right" })} <p>One of my classes this semester is costume design, where I created a watercolor drawing of my dream outfit (see photo). I’m hoping to make this outfit a reality one day and bring my vision to life.</p> <div class="spacer"></div> ${renderComponent($$result2, "ManifestImage", $$ManifestImage, { "month": "2024-10-october", "file": "overlock-machine.jpg", "float": "left" })} <p>To boost my sewing projects, I invested in an overlock machine, shown in photo. It’s been a game-changer since it can hem and sew at the same time, speeding up my work and making it easier to create clean, professional-looking finishes that will last a long time.</p> <div class="spacer"></div> ${renderComponent($$result2, "ManifestImage", $$ManifestImage, { "month": "2024-10-october", "file": "pinkie-pie-costume.jpg", "float": "right" })} <p>Finally, Halloween wouldn’t be complete without dressing up! This year, I went as Pinkie Pie, and the photo shows my costume. It was so much fun to embody the bubbly, energetic character for the day. Of course the rest of the Costume Design class dressed up, so it was a really fun time as I was finishing my Master's Thesis. I will publish it soon, so keep an eye out for that!</p> </article> ` })}`;
}, "C:/Users/DAISY/KatsumiMaki/src/pages/topics/newsletters/originals/2024-10-october/index.astro", void 0);

const $$file = "C:/Users/DAISY/KatsumiMaki/src/pages/topics/newsletters/originals/2024-10-october/index.astro";
const $$url = "/topics/newsletters/originals/2024-10-october/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
