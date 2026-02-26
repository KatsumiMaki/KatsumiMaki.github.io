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
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Sept '24 Newsletter" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FolderLinks", $$FolderLinks, { "current": current })} ${maybeRenderHead()}<article class="newsletter"> <h1 class="nl-title">September 2024 Newsletter</h1> <p><em>From Dan, Your Friend and Master's student at SDSU</em></p> ${renderComponent($$result2, "ManifestImage", $$ManifestImage, { "month": "2024-09-september", "file": "halloween-house-decorated.jpg", "float": "right" })} <p>Dear Friends, I hope this newsletter finds you well!</p> <p>As Halloween is upon us, it's clear that my neighbors are also excited for the holiday. photoshows a house that my mom and I saw on our walks in the morning with our dog Kodi.</p> <div class="spacer"></div> ${renderComponent($$result2, "ManifestImage", $$ManifestImage, { "month": "2024-09-september", "file": "me-and-rudy-checking-out-my-new-monitor-and-playing-games-together.jpg", "float": "left" })} <p>In addition to celebrating Halloween, I've also been spending quality time with my friend Rudy. As shown in photo, my new monitor has been a staple in entertainment when we have free time.</p> <div class="spacer"></div> ${renderComponent($$result2, "ManifestImage", $$ManifestImage, { "month": "2024-09-september", "file": "making-a-cloak-from-scratch-for-halloween.jpg", "float": "right" })} <p>Another creative project I've been working on is making a cloak from scratch for Halloween. As shown in photo, the intricate details and craftsmanship that go into creating such a garment are truly impressive.</p> <div class="spacer"></div> ${renderComponent($$result2, "ManifestImage", $$ManifestImage, { "month": "2024-09-september", "file": "made-a-dice-bag-for-dungeons-and-dragons.jpg", "float": "left" })} <p>To cap off our gaming sessions, I made a dice bag for Dungeons and Dragons, seen in photo, which has become an essential item for any serious tabletop gamer. Its design and functionality make it perfect for storing and carrying around the various polyhedral dice we use in the game. We are soon to have our halloween one-shot session, where I get to be a werewolf barbarian!</p> <div class="spacer"></div> ${renderComponent($$result2, "ManifestImage", $$ManifestImage, { "month": "2024-09-september", "file": "pressed-flowers-for-special-people-in-my-life.jpg", "float": "right" })} <p>Lastly, I wanted to take a moment to appreciate the beauty of pressed flowers. These delicate and intricate creations seen in photohave become a symbol of love and appreciation for special people in my life. They remind me of the importance of cherishing memories and holding onto the things that bring us joy. I gave them to those I look up to at SDSU.</p> </article> ` })}`;
}, "C:/Users/DAISY/GithubPages/vw.z/src/pages/topics/newsletters/originals/2024-09-september/index.astro", void 0);

const $$file = "C:/Users/DAISY/GithubPages/vw.z/src/pages/topics/newsletters/originals/2024-09-september/index.astro";
const $$url = "/topics/newsletters/originals/2024-09-september/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
