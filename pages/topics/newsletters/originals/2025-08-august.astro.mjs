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
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Aug '25 Newsletter" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FolderLinks", $$FolderLinks, { "current": current })} ${maybeRenderHead()}<article class="newsletter"> <h1 class="nl-title">August 2025 Newsletter</h1> <p><br><em>From Dan, Your Friend and Artist</em></p> <p>Dear Friends,</p> <p>August was a whirlwind in the best way. Between new jobs, sunny skies, and creative sparks, I kept myself plenty busy, but also found little moments of calm. Here’s how it all shaped up.</p> ${renderComponent($$result2, "ManifestImage", $$ManifestImage, { "month": "2025-08-august", "file": "timecard.jpg", "float": "right" })} <p>This newsletter is a little delayed, and here’s why: I started <em>three</em> new jobs in one week (photo). I’m teaching an IT class, a Game Design class, and I’m now the digital media coordinator for my church (on top of still being the custodian). It’s a lot, but I love the work, and I’m really happy.</p> <div class="spacer"></div> ${renderComponent($$result2, "ManifestImage", $$ManifestImage, { "month": "2025-08-august", "file": "clouds.jpg", "float": "left" })} <p>Outside of work, the summer has been beautiful (photo). I love the clouds and even the heat. My house and car stay temperate, but I don’t mind that my room warms up or when I step outside and feel the sun beating down. It feels like summer should.</p> <div class="spacer"></div> ${renderComponent($$result2, "ManifestImage", $$ManifestImage, { "month": "2025-08-august", "file": "nora.jpg", "float": "right" })} <p>Of course, no month is complete without Nora (photo). You know Nora. She’s perfect. That’s all.</p> <div class="spacer"></div> ${renderComponent($$result2, "ManifestImage", $$ManifestImage, { "month": "2025-08-august", "file": "deertaur-magical-girls.jpg", "float": "left" })} <p>On the creative side, I drew some art of my deertaur daughters dressed as magical girls (photo). They’re original characters, inspired by a game I have fond memories of. Drawing them always makes me smile.</p> <div class="spacer"></div> ${renderComponent($$result2, "ManifestImage", $$ManifestImage, { "month": "2025-08-august", "file": "mabel-gregory-frog.jpg", "float": "right" })} <p>I also made a birthday drawing for a friend (photo). It’s Mabel Pines from <em>Gravity Falls</em> hugging Gregory’s frog from <em>Over the Garden Wall</em>. I love making art for people’s birthdays and hearing about the shows, cartoons, and stories that mean something to them. Do you have any favorite fandoms, whether cartoons, movies, or books? I’d love to know.</p> <div class="spacer"></div> <p>So that’s August… Work, warmth, and artwork. I’m keeping very busy, but in the best way. There’s also a bonus coming very soon! I won’t spoil the Art History topic yet, but keep an eye out for it.</p> <p>See you next time!</p> </article> ` })}`;
}, "C:/Users/DAISY/GithubPages/vw.z/src/pages/topics/newsletters/originals/2025-08-august/index.astro", void 0);

const $$file = "C:/Users/DAISY/GithubPages/vw.z/src/pages/topics/newsletters/originals/2025-08-august/index.astro";
const $$url = "/topics/newsletters/originals/2025-08-august/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
