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
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Prahlada and Malala - P. 1" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FolderLinks", $$FolderLinks, { "current": current })} ${maybeRenderHead()}<article class="story" data-theme="dark"> <h1 class="story-page-title">Page 1</h1> <div class="spacer"></div> <div class="spacer"></div> <div class="prose"> <p>Prahlāda is only five years old, yet his heart is already filled with unshakable devotion. Even before he was born, while still in his mother’s womb, the divine sage Nārada had instructed him in the path of bhagavata-dharma: loving service to the Supreme. Though the boy cannot recall those lessons as ordinary memories, their essence lives in him. At dawn in his father’s palace, Prahlāda sits with legs crossed and eyes half-closed, observing the world through a veil of serenity. In the soft pink light of morning, servants bustle past new crimson banners hailing Hiraṇyakaśipu as ‘Lord of Lords’; a herald rehearses lines about stamping out Viṣṇu-bhakti… Yet Prahlāda remains apart, listening to the quieter voice within. He silently repeats a lesson that seems to arise from his very soul: one who is truly wise begins serving God from the earliest days of childhood. A rare bloom of a lotus peeks from a vase at his side; Prahlāda plucks it and holds it gently.</p> <p>He stands and tiptoes to the balcony where sunlight spills in. Facing the rising sun, which to him shines like Lord Viṣṇu’s presence, Prahlāda presses the lotus between his small palms and offers it with utter earnestness. “O Lord Viṣṇu,” he whispers, voice high and soft, “I am only a child, but I will worship You now, with all I have.” The golden morning rays wash over the tender boy, illuminating the faint smile on his face. In that moment, Prahlāda’s simple act of morning worship feels vast. He has upheld what his heart knows to be true: devotional service must not wait for adulthood. It is the highest purpose of life, to be embraced even at the kaumāra, the tender age. As he bows his head in prayer, the palace around him fades from his awareness. There is only the warmth of the sun, the fragrance of the lotus, and the Name of the Lord murmured on his innocent lips.</p> </div> </article> ` })}`;
}, "C:/Users/DAISY/GithubPages/vw.z/src/pages/topics/stories/fanmade/history/prahlada-and-malala/page-1/index.astro", void 0);

const $$file = "C:/Users/DAISY/GithubPages/vw.z/src/pages/topics/stories/fanmade/history/prahlada-and-malala/page-1/index.astro";
const $$url = "/topics/stories/fanmade/history/prahlada-and-malala/page-1/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
