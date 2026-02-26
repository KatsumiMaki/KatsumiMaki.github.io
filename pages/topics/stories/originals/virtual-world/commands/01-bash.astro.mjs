import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../../../../../chunks/astro/server_CZXttPcx.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../../../../../../chunks/Base_DMGW_6Ds.mjs';
import { $ as $$FolderLinks } from '../../../../../../chunks/FolderLinks_5Et2assD.mjs';
/* empty css                                                */
export { renderers } from '../../../../../../renderers.mjs';

const $$Astro = createAstro("https://katsumimaki.github.io");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const current = Astro2.url.pathname;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "01 Bash" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FolderLinks", $$FolderLinks, { "current": current })} ${maybeRenderHead()}<article class="story" data-theme="dark"> <h1 class="story-page-title">01 Bash</h1> <div class="spacer"></div> <div class="spacer"></div> <div class="prose"> <p>In the town’s library, Bash was sitting on a creaky rocking chair, in the children’s section surrounded by bean bags, vibrant wooden blocks, and a few miniature doll houses. The room was bathed in bright natural light coming in from the windows, with bright posters on the walls and shelves upon shelves of picture books.</p> <p>The children’s section was a lively and cheerful place, with kids of all ages browsing the shelves, playing with the toys and games, and listening to Bash read aloud. Bash was a favorite of the young patrons, known for his engaging storytelling and friendly manner.</p> <p>As Bash began to read the picture book, the children gathered around, their eyes wide with anticipation. The book was filled with colorful illustrations and a story that would spark the children’s imaginations. Bash’s soothing voice drew the children into the story as he read about a Virtual World where their wildest dreams could come true.</p> <p>As Bash read, the children’s faces lit up with excitement. They imagined themselves soaring through the skies, swimming with dolphins in the ocean, and exploring far-off lands. The Virtual World was a place of wonder and adventure, and the children were eager to explore every corner of it.</p> <p>Bash smiled as he watched the children’s excitement take flight. He knew that the library was not just a place to find books and information, but also a place where children could let their imaginations soar and their curiosity thrive. He felt a deep sense of pride in his work, knowing that he was helping to inspire the next generation of thinkers, dreamers, and explorers.</p> <p>As Bash closed the book and the children began to gather their things, he felt a sense of fulfillment knowing that he had helped them escape into a world of fantasy and wonder. As the children ran off to continue their adventures in the library, Bash felt a renewed sense of purpose, knowing that he was exactly where he was meant to be.</p> </div> </article> ` })}`;
}, "C:/Users/DAISY/GithubPages/vw.z/src/pages/topics/stories/originals/virtual-world/commands/01-bash/index.astro", void 0);

const $$file = "C:/Users/DAISY/GithubPages/vw.z/src/pages/topics/stories/originals/virtual-world/commands/01-bash/index.astro";
const $$url = "/topics/stories/originals/virtual-world/commands/01-bash/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
