import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../../../chunks/astro/server_CZXttPcx.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../../../../chunks/Base_DMGW_6Ds.mjs';
import { $ as $$FolderLinks } from '../../../../chunks/FolderLinks_5Et2assD.mjs';
/* empty css                                          */
import { $ as $$ManifestImage } from '../../../../chunks/ManifestImage_D8GAQ5ll.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Astro = createAstro("https://katsumimaki.github.io");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const current = Astro2.url.pathname;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Jun '25 Newsletter" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "FolderLinks", $$FolderLinks, { "current": current })} ${maybeRenderHead()}<article class="newsletter"> <h1 class="nl-title">June 2025 Newsletter</h1> <p><br><em>From Dan, Your Friend and Nerd</em></p> <p>Dear Friends,</p> <p>June brought a wave of energy with creative projects, tech experiments, deep cleaning, and even deeper friendships. Here's a slice of life from the past month.</p> ${renderComponent($$result2, "ManifestImage", $$ManifestImage, { "month": "2025-06-june", "file": "daisy-annie-pixel.jpg", "float": "right" })} <p>I’ve been experimenting with pixel art on paper, and made 32x32 versions of Daisy and Annie (photo). I used a digital plan to map out the colors first, then filled it in by hand using Posca pens. It was oddly soothing, but wow :0 it took much longer than expected!</p> <div class="spacer"></div> ${renderComponent($$result2, "ManifestImage", $$ManifestImage, { "month": "2025-06-june", "file": "vr-face-tracking.jpg", "float": "left" })} <p>For a bit of engineering fun, I fitted a fisheye camera onto my VR headset using a spare microcontroller (photo). The goal: face tracking! I used Project Babble to get it working. It’s a bit janky and could use stronger plastic parts, but for a weekend prototype, it worked way better than I expected.</p> <div class="spacer"></div> ${renderComponent($$result2, "ManifestImage", $$ManifestImage, { "month": "2025-06-june", "file": "decorated-corner.jpg", "float": "right" })} <p>While my parents were on a trip, I took the opportunity to fully clean my room (photo). And I mean fully. Every shelf emptied, every dust bunny evicted. It nearly did my back in, but it also gave me the chance to put up some long-awaited decorations before the furniture came back in. Saving all the pretty art from boxes sure paid off!</p> <div class="spacer"></div> ${renderComponent($$result2, "ManifestImage", $$ManifestImage, { "month": "2025-06-june", "file": "blackjack-daggerheart.jpg", "float": "left" })} <p>You know him, you love him: Blackjack’s back (photo). This month, he joined me as my friends and I prep to try out Daggerheart, an RPG by Critical Role. Blackjack won't be rolling dice (without consuming them anyway), but he is a very charismatic companion.</p> <div class="spacer"></div> ${renderComponent($$result2, "ManifestImage", $$ManifestImage, { "month": "2025-06-june", "file": "switch2-mario.jpg", "float": "right" })} <p>A lot of my social time lately has revolved around the new Switch 2 (photo). Mario Kart World’s open design really suits my style, and it’s been the perfect excuse to gather people, whether at home or on the go.</p> <div class="spacer"></div> ${renderComponent($$result2, "ManifestImage", $$ManifestImage, { "month": "2025-06-june", "file": "shadow-friends.jpg", "float": "left" })} <p>One of the most meaningful new habits: weekly walks with friends (photo). Whether it's along trails, around lakes, or through parks, it’s become a treasured part of my week. It's something consistent, grounding, and shared.</p> <div class="spacer"></div> <p>Beyond these snapshots, you’ve also been receiving my Art History papers. I'm thrilled that some of you are diving into them. It's a more thoughtful, long-form outlet where I can reflect and expand on themes that have lived in my head for years. Whether you're there for the pictures, the writing, or both, thank you for taking the time. It’s become a new kind of newsletter on its own... one that stretches a little further, and requires more (rewarding) work on my part.</p> <p>Here’s to more exploration, connection, and creativity. Stay safe!</p> </article> ` })}`;
}, "C:/Users/DAISY/GithubPages/vw.z/src/pages/topics/newsletters/originals/2025-06-june/index.astro", void 0);

const $$file = "C:/Users/DAISY/GithubPages/vw.z/src/pages/topics/newsletters/originals/2025-06-june/index.astro";
const $$url = "/topics/newsletters/originals/2025-06-june/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
