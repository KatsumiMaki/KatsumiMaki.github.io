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
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Jul '25 Newsletter" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FolderLinks", $$FolderLinks, { "current": current })} ${maybeRenderHead()}<article class="newsletter"> <h1 class="nl-title">July 2025 Newsletter</h1> <p><br><em>From Dan, Your Friend and Trekkie</em></p> <p>Dear Friends,</p> <p>July was a sweet month. Sometimes literally. Between baking, crafts, pets, and parades, I found little joys in every corner. Here’s a peek into what made the month so fun.</p> ${renderComponent($$result2, "ManifestImage", $$ManifestImage, { "month": "2025-07-july", "file": "cupcakes-cake.jpg", "float": "right" })} <p>I got the urge to bake, so I whipped up cupcakes and a small cake just for fun (photo). No special occasion, just vibes and frosting. There’s something therapeutic about making treats for no reason.</p> <div class="spacer"></div> ${renderComponent($$result2, "ManifestImage", $$ManifestImage, { "month": "2025-07-july", "file": "cut-layer-cake.jpg", "float": "left" })} <p>But there was one real occasion: my mom’s birthday. I made her a little layer cake (photo). She was grateful. I was... hungry. We both won.</p> <p>House sitting returned this month, and so did the orange cat, Beau (photo). He’s an outdoor cat, but he shows up every time I play fetch with the golden retrievers. He likes to watch them play.</p> <div class="spacer"></div> ${renderComponent($$result2, "ManifestImage", $$ManifestImage, { "month": "2025-07-july", "file": "petting-orange-cat.jpg", "float": "right" })} <p>In my free time with friends, I put together some Magic: the Gathering proxy cards (photo). These aren’t official in any capacity, of course, so I generated art for them. Full custom deck! We’re plann
</p><div class="spacer"></div> ${renderComponent($$result2, "ManifestImage", $$ManifestImage, { "month": "2025-07-july", "file": "proxy-cards.jpg", "float": "left" })}
ing a play session soon, and I can’t wait to see how they hold up. <p>Pride 2025 was as joyful as ever. I walked in the San Diego parade again and said hi to the SD Furries afterward (photo). This has become a little tradition now. Good vibes all around.</p> <div class="spacer"></div> ${renderComponent($$result2, "ManifestImage", $$ManifestImage, { "month": "2025-07-july", "file": "pride-selfie-furry.jpg", "float": "right" })} <p>Outside of Comic-Con, I hung out with friends and bumped into some amazing K-Pop Demon Hunters cosplayers (photo). I’ve seen that movie five times now: once the day it released, and four times introducing it to others. I regret nothing, and I'll do it again.</p> <div class="spacer"></div> ${renderComponent($$result2, "ManifestImage", $$ManifestImage, { "month": "2025-07-july", "file": "kpop-demon-hunters.jpg", "float": "left" })} <p>Anyway, what a lovely month. July had its share of sugar, color, and community. Summer’s still hanging on for August, so I plan to make the most of it. Drink water, take naps, and try doing something just for fun.</p> <p>See you next time!</p> </article> ` })}`;
}, "C:/Users/DAISY/KatsumiMaki/src/pages/topics/newsletters/originals/2025-07-july/index.astro", void 0);

const $$file = "C:/Users/DAISY/KatsumiMaki/src/pages/topics/newsletters/originals/2025-07-july/index.astro";
const $$url = "/topics/newsletters/originals/2025-07-july/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
