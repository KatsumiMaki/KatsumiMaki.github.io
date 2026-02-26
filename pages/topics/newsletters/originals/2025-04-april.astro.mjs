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
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Apr '25 Newsletter" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FolderLinks", $$FolderLinks, { "current": current })} ${maybeRenderHead()}<article class="newsletter"> <h1 class="nl-title">April 2025 Newsletter</h1> <p><br><em>From Dan, Your Friend and Hobbiest</em></p> ${renderComponent($$result2, "ManifestImage", $$ManifestImage, { "month": "2025-04-april", "file": "friend-bookcase.jpg", "float": "right" })} <p>Dear Friends,</p> <p>April has been a gentle, creative month—full of gifts, reading, baking, and sharing quiet moments with others. I’ve continued to invest time in the little things that make each day more meaningful.</p> <div class="spacer"></div> ${renderComponent($$result2, "ManifestImage", $$ManifestImage, { "month": "2025-04-april", "file": "easter-gift.jpg", "float": "left" })} <p>Happy Easter! I wanted to highlight the small celebration I put together (photo). I made a card and gift package for my parents, complete with seasonal flowers. A bit of warmth and gratitude to close out the month.</p> <div class="spacer"></div> ${renderComponent($$result2, "ManifestImage", $$ManifestImage, { "month": "2025-04-april", "file": "kindle-solo.jpg", "float": "right" })} <p>This month, I’ve been consuming more audiobooks, and even reading from my Kindle when no audio version is available (photo). Solo Leveling has been my current read, especially timely with its new anime season. But my favorite in this genre remains So I'm A Spider, So What? and its audiobook version is exceptional. I’m continuing the story on e-ink now, often while listening to good music.</p> <p>Speaking of e-ink, I have been looking around for an e-ink phone to switch to, as a part of my unplugging journey. However, the market isn't quite where I'd like it to be for dumb phones. But I plan on downsizing (literally) to my mom's iPhone SE, as the small screen size may be just what I'm after. It can hold me over until a really inticing e-ink phone comes out for those trying to distance themselves from the addictive devices.</p> <div class="spacer"></div> ${renderComponent($$result2, "ManifestImage", $$ManifestImage, { "month": "2025-04-april", "file": "cookies.jpg", "float": "left" })} <p>Baking has been another joy this month. I made cookies for a friend (photo) and he thought it was hilarious. The process was calming, and I’m already planning my first cake attempt.</p> <div class="spacer"></div> ${renderComponent($$result2, "ManifestImage", $$ManifestImage, { "month": "2025-04-april", "file": "blackjack.jpg", "float": "right" })} <p>Speaking of that friend, his dog Blackjack (photo) has grown a lot since I last shared a photo. He’s a real character now, with plenty of energy. Watching him grow has been delightful.</p> <p>I also helped that same friend build an IKEA BILLY bookcase (photo). The difference in his apartment’s shared space is incredible, and it was satisfying to bring it all together with some teamwork and a screwdriver. I'm really proud of how it turned out.</p> <div class="spacer"></div> ${renderComponent($$result2, "ManifestImage", $$ManifestImage, { "month": "2025-04-april", "file": "astro-bot.jpg", "float": "left" })} <p>Finally, a bit of media joy: I’ve been playing Astro Bot on my PlayStation (photo). It's the only game I play on the PlayStation. It's one of a very few PlayStation exclusives, but it's worth it. I also stream Peacock TV on the same console, thanks to Rudy who forgot to log out. No complaints here.</p> <p>April has been kind, and I continue to seek joy in the meaningful, the funny, and the handmade. As always, I hope these reflections bring you a bit of inspiration or at least a smile.</p> <p>Wishing you a joyful and grounded May ahead!</p> </article> ` })}`;
}, "C:/Users/DAISY/GithubPages/vw.z/src/pages/topics/newsletters/originals/2025-04-april/index.astro", void 0);

const $$file = "C:/Users/DAISY/GithubPages/vw.z/src/pages/topics/newsletters/originals/2025-04-april/index.astro";
const $$url = "/topics/newsletters/originals/2025-04-april/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
