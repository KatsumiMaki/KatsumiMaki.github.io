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
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Mar '25 Newsletter" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FolderLinks", $$FolderLinks, { "current": current })} ${maybeRenderHead()}<article class="newsletter"> <h1 class="nl-title">March 2025 Newsletter</h1> ${renderComponent($$result2, "ManifestImage", $$ManifestImage, { "month": "2025-03-march", "file": "3d-photo.jpg", "float": "right" })} <p><br><em>From Dan, Your Friend and Hermit</em></p> <p>Dear Friends,</p> <p>March has been a month of personal projects and creative expression. From 3d printing to sewing projects, this month has been all about diving deep into my interests.</p> <p>One highlight was playing Catan with family and friends. Not only the good company was a treat, but also the custom board: laser-cut and stained wood for the resources and ocean tiles. I contributed some 3D-printed pieces for some custom color choices beyond the original pallet, pink and purple pieces seen in photo.</p> <div class="spacer"></div> ${renderComponent($$result2, "ManifestImage", $$ManifestImage, { "month": "2025-03-march", "file": "catan-board.jpg", "float": "left" })} <p>I also had help rudy experimenting with a different kind of 3D printing, \`\`HueForge." We created a framed, embossed photo of Daisy and Annie (photo). This piece now hangs in my sewing room, and I am happy to see the room fill up with my art.</p> <p>Speaking of sewing, I also completed a tiny dress for my OC Annie, as a Nendoroid doll (photo). The pattern was designed by k\\_shujin, and I enjoyed bringing it to life with light green floral fabric. It’s a small project, but working with miniature garments presents its own unique challenges and rewards!</p> <div class="spacer"></div> ${renderComponent($$result2, "ManifestImage", $$ManifestImage, { "month": "2025-03-march", "file": "nendoroid-doll.jpg", "float": "right" })} <p>Beyond creative projects, I’ve been keeping my research skills sharp by exploring narrative structures, using cartoons and anime I’ve watched as a basis. Stories shape our perspectives, and analyzing them in depth has been a fulfilling exercise.</p> <p>April has arrived quickly, and with it, I’m embracing a new challenge: unplugging. From today until Saturday, I’ll be taking a break from communication and digital noise. If I find it beneficial, I may schedule more extended periods of silence in the future.</p> <p>I look forward to these breaks as a practice of spirituality and self-control. I have experienced many positive benefits from cutting social media out of my life, and it was a slow road but I widdled the apps down to a manageable level. However, there is a lot of noise in the news and society right now, so I found it neccessary to try one step further with bringing on a vow of silence to my spiritual journey, which will be expressed in periods of planned non-communication.</p> <p>You know I take an intentional approach to many things—whether it’s my projects, my research, or, for those who see me in person, my ever-growing hair length! I find meaning in these choices, and I hope you, too, are able to carve out intentional time for the things that bring you joy.</p> <p>March has been a month of focus and fulfillment, and I’m grateful to share these moments with you. I know my newsletters highlight select parts of my life, but I share what inspires me in the hope that it spreads positivity.</p> <p>Wishing you all a reflective and meaningful April ahead!</p> <p>plain<br>references</p> </article> ` })}`;
}, "C:/Users/DAISY/KatsumiMaki/src/pages/topics/newsletters/originals/2025-03-march/index.astro", void 0);

const $$file = "C:/Users/DAISY/KatsumiMaki/src/pages/topics/newsletters/originals/2025-03-march/index.astro";
const $$url = "/topics/newsletters/originals/2025-03-march/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
