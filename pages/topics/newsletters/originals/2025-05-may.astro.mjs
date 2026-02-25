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
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "May '25 Newsletter" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FolderLinks", $$FolderLinks, { "current": current })} ${maybeRenderHead()}<article class="newsletter"> <h1 class="nl-title">May 2025 Newsletter</h1> <p><br><em>From Dan, Your Friend and Nerd</em></p> <p>Dear Friends,</p> <p>May was bursting with fun, nostalgia, and family. I spent a lot of time with loved ones this month.</p> <div class="spacer"></div> ${renderComponent($$result2, "ManifestImage", $$ManifestImage, { "month": "2025-05-may", "file": "clone-helmet.jpg", "float": "left" })} <p>May the Fourth be with you! I celebrated Star Wars Day with friends (photo). We watched Clone Wars, Star Wars Tales on Disney+, and nerded out over all things jedi and clone-related. Naturally, I wore my Clone Trooper helmet for the occasion.</p> <div class="spacer"></div> ${renderComponent($$result2, "ManifestImage", $$ManifestImage, { "month": "2025-05-may", "file": "vulture-droid-bow.png", "float": "right" })} <p>I also drew my favorite droid, a vulture droid, but with a pink bow (photo). Call her my vulture droid girlfriend. Droidikas and IG-88 are top-tier too. And no, I don’t count General Grievous as a droid, but he is very cool with his claw feet and quadruple lightsabers. Honestly, I want four arms.</p> <div class="spacer"></div> ${renderComponent($$result2, "ManifestImage", $$ManifestImage, { "month": "2025-05-may", "file": "family-selfie.jpg", "float": "left" })} <p>My brother came to town, and most of the month revolved around that (photo). We spent lots of quality time together. His girlfriend was here, too! It was really nice to all be in the same space again.</p> <div class="spacer"></div> ${renderComponent($$result2, "ManifestImage", $$ManifestImage, { "month": "2025-05-may", "file": "dog-cat-window.jpg", "float": "right" })} <p>More dog-sitting this month! One of my usual dogs met eyes with the neighborhood cat through the glass (photo). Sadly, the cat had to stay out in the cold, since he doesn’t get along with one of the visiting pups. He's a tough outdoor cat, though... I’m sure he’ll reclaim his territory soon enough.</p> <div class="spacer"></div> ${renderComponent($$result2, "ManifestImage", $$ManifestImage, { "month": "2025-05-may", "file": "graduation.jpg", "float": "left" })} <p>I graduated! You probably already knew that. But this month, we had the actual ceremony (photo). I altered my bachelor's gown into a master's style and decided to give myself longer sleeves... because why not? Felt powerful.</p> <div class="spacer"></div> ${renderComponent($$result2, "ManifestImage", $$ManifestImage, { "month": "2025-05-may", "file": "star-trek-outfit.jpg", "float": "right" })} <p>As a final project for patternmaking, I made this blue Star Trek outfit (photo). So now I’m a science officer ensign! While I may not have been through Starfleet Academy, I think I could totally thrive in space. Especially if there's a holodeck.</p> <div class="spacer"></div> ${renderComponent($$result2, "ManifestImage", $$ManifestImage, { "month": "2025-05-may", "file": "blackjack-again.jpg", "float": "left" })} <p>And yes, I had the pleasure of seeing Blackjack again (photo). He’s getting so big! Every time I watch him, he finds new ways to make me laugh. What a character.</p> <div class="spacer"></div> ${renderComponent($$result2, "ManifestImage", $$ManifestImage, { "month": "2025-05-may", "file": "lego-awesome.jpg", "float": "right" })} <p>I’ll close May with a tribute to the month ahead. I picked up the Lego "Everyone is Awesome" set (photo) to celebrate the start of Pride. Stay strong, stay kind, and stay proud. Everyone is awesome and I love you all.</p> <p>Here’s to another month of sincerity, silliness, and self-expression. Dan out.</p> </article> ` })}`;
}, "C:/Users/DAISY/KatsumiMaki/src/pages/topics/newsletters/originals/2025-05-may/index.astro", void 0);

const $$file = "C:/Users/DAISY/KatsumiMaki/src/pages/topics/newsletters/originals/2025-05-may/index.astro";
const $$url = "/topics/newsletters/originals/2025-05-may/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
