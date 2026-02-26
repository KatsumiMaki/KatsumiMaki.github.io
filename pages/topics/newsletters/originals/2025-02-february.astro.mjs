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
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Feb '25 Newsletter" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FolderLinks", $$FolderLinks, { "current": current })} ${maybeRenderHead()}<article class="newsletter"> <h1 class="nl-title">February 2025 Newsletter</h1> <p><br><em>From Dan, Your Friend and Lifelong Learner</em></p> <p>Dear Friends,</p> <p>February has been a month of exciting changes and new opportunities! From house-sitting to teaching certifications and furthering my sewing skills, this month has been an incredible journey of growth.</p> <p>I had the chance to house-sit for my neighbors, which, of course, meant I got to spend time with their amazing dog (photo). Few things are better than petting a fluffy friend after a long day.</p> ${renderComponent($$result2, "ManifestImage", $$ManifestImage, { "month": "2025-02-february", "file": "petting-dog.jpg", "float": "right" })} <div class="spacer"></div> ${renderComponent($$result2, "ManifestImage", $$ManifestImage, { "month": "2025-02-february", "file": "spider.jpg", "float": "left" })} <p>Sorry, arachnophobes! But everyone else look at this amazing trapdoor spider I saw after a rainy day (photo). These spiders are nearly blind and spend most of their lives underground. This one was either rained out of her cozy home or on a nuptial journey. Funny enough, I used to be afraid of spiders until one landed on me during a game of hide and seek. Surprisingly, I didn't freak out. Now, I think they’re fascinating—though I’d still prefer they don’t land on me!</p> <div class="spacer"></div> ${renderComponent($$result2, "ManifestImage", $$ManifestImage, { "month": "2025-02-february", "file": "certification.png", "float": "right" })} <p>Big news! I earned a certification to teach an entry-level IT course for adult learners (photo). This is my first job related to my master’s degree, and I couldn’t be more excited. I want to thank my friends, colleagues, and everyone who has supported me through my academic journey. Meaning you, dear reader! Just like my students, I plan to be a lifelong learner.</p> <div class="spacer"></div> ${renderComponent($$result2, "ManifestImage", $$ManifestImage, { "month": "2025-02-february", "file": "dress-form-sleeve.jpg", "float": "left" })} <p>Speaking of lifelong learning, my patternmaking class has been incredibly fun. This photo shows a pagoda sleeve I made with a classmate. We looked at a picture, and flat patterned how we thought it should go together. It’s rewarding to see my skills grow with each new project.</p> <div class="spacer"></div> ${renderComponent($$result2, "ManifestImage", $$ManifestImage, { "month": "2025-02-february", "file": "sewing-machine.jpg", "float": "right" })} <p>To support my growing sewing hobby, I got a vintage dressmaker sewing machine (photo). It seems to have the capability for twin needles, so I’m excited to experiment with parallel topstitching. Contrast threads stitched by twin needles can add such a polished look to garments!</p> <p>That’s a wrap on February! This month has been all about stepping forward into new opportunities and embracing creative growth. I’m so grateful to have you all along for the journey. Here’s to a wonderful March ahead!</p> </article> ` })}`;
}, "C:/Users/DAISY/GithubPages/vw.z/src/pages/topics/newsletters/originals/2025-02-february/index.astro", void 0);

const $$file = "C:/Users/DAISY/GithubPages/vw.z/src/pages/topics/newsletters/originals/2025-02-february/index.astro";
const $$url = "/topics/newsletters/originals/2025-02-february/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
