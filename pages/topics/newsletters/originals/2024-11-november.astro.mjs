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
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Nov '24 Newsletter" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FolderLinks", $$FolderLinks, { "current": current })} ${maybeRenderHead()}<article class="newsletter"> <h1 class="nl-title">November 2024 Newsletter</h1> <p><br><em>From Dan, Your Friend and Master's Student at SDSU</em></p> <p>Dear Friends, Happy November! This month was packed with milestones, creative endeavors, and plenty of celebrations as I turned a year older and successfully defended my thesis.</p> ${renderComponent($$result2, "ManifestImage", $$ManifestImage, { "month": "2024-11-november", "file": "lips-drag-diner.jpg", "float": "right" })} <p>November kicked off with a bang as I celebrated my birthday and the completion of my thesis defense! To mark the occasion, my friend, celebrating an October birthday, and I enjoyed an evening at Lips, a drag queen diner. photoshows me posing between queens dressed as Glinda and Elphaba. I later saw the movie with my mother and we both enjoyed it greatly.</p> <div class="spacer"></div> ${renderComponent($$result2, "ManifestImage", $$ManifestImage, { "month": "2024-11-november", "file": "thanksgiving-cat.jpg", "float": "left" })} <p>Later in the month, I house-sat during Thanksgiving, keeping an eye on some sweet cats who have grown so much since I last looked after them (photo). Their playful company was a joy throughout the holiday.</p> <div class="spacer"></div> ${renderComponent($$result2, "ManifestImage", $$ManifestImage, { "month": "2024-11-november", "file": "pugs-thanksgiving.jpg", "float": "right" })} <p>Speaking of house-sitting, I also had the opportunity to care for three adorable dogs (photo). Pugs are growing on me; they are so cuddly. These bundles of energy kept me on my toes and added some delightful chaos to the festivities.</p> <div class="spacer"></div> ${renderComponent($$result2, "ManifestImage", $$ManifestImage, { "month": "2024-11-november", "file": "parents-christmas-tree.jpg", "float": "left" })} <p>As the holiday season began, my parents and I enjoyed some family time together. This photo shows them in front of the beautifully decorated Christmas tree at church. It was a special way to wrap up the month.</p> <div class="spacer"></div> ${renderComponent($$result2, "ManifestImage", $$ManifestImage, { "month": "2024-11-november", "file": "c3po-doodle.jpg", "float": "right" })} <p>Feeling inspired by the festive spirit, I skipped over Thanksgiving and dove straight into Christmas cheer. This photo is my doodle of C3PO in a Santa hat, capturing the holiday vibe perfectly.</p> <div class="spacer"></div> ${renderComponent($$result2, "ManifestImage", $$ManifestImage, { "month": "2024-11-november", "file": "denim-skirt.jpg", "float": "left" })} <p>In the sewing realm, I upcycled three pairs of ill-fitting jeans into a chevron-patterned skirt (photo). I love how the aged denim contrasts beautifully, and I still have more fabric left for future projects.</p> <p>One of my proudest projects this month was a candy corn plushie I made for my sewing final (photo). I’m already looking forward to the next class, where we’ll dive into pattern-making and designing our own clothes from scratch. Up until now, we have been learning to follow patterns and adjust them, but pattern making
</p><div class="spacer"></div> ${renderComponent($$result2, "ManifestImage", $$ManifestImage, { "month": "2024-11-november", "file": "candy-corn-plushie.jpg", "float": "right" })}
will open up an entirely new skill (and wardrobe potential) for me! <p>Finally, I created mini pillow Christmas ornaments (photo) to gift to friends. Like my candy corn plushie, they’re stuffed with fabric scraps for an eco-friendly touch, a technique my teacher shared with us.</p> <div class="spacer"></div> ${renderComponent($$result2, "ManifestImage", $$ManifestImage, { "month": "2024-11-november", "file": "mini-pillow-ornaments.jpg", "float": "left" })} <p>November has been a wonderful month of celebration, creativity, and reflection. Here’s to an equally exciting December!</p> </article> ` })}`;
}, "C:/Users/DAISY/KatsumiMaki/src/pages/topics/newsletters/originals/2024-11-november/index.astro", void 0);

const $$file = "C:/Users/DAISY/KatsumiMaki/src/pages/topics/newsletters/originals/2024-11-november/index.astro";
const $$url = "/topics/newsletters/originals/2024-11-november/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
