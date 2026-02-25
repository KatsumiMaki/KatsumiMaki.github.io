import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../../../../../chunks/astro/server_CZXttPcx.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../../../../../../chunks/Base_B9z84OHY.mjs';
import { $ as $$FolderLinks } from '../../../../../../chunks/FolderLinks_Cb3w_LRp.mjs';
/* empty css                                                */
export { renderers } from '../../../../../../renderers.mjs';

const $$Astro = createAstro("https://katsumimaki.github.io");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const current = Astro2.url.pathname;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Prahlada and Malala - P. 2" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FolderLinks", $$FolderLinks, { "current": current })} ${maybeRenderHead()}<article class="story" data-theme="dark"> <h1 class="story-page-title">Page 2</h1> <div class="spacer"></div> <div class="spacer"></div> <div class="prose"> <p>Malala presses her pen to a fraying notebook page, determined to begin. It is early January 2009 in Pakistan’s Swat Valley, and the 11-year-old girl adjusts her shawl in the cold of her bedroom as she writes the date. Outside, her hometown of Mingora has gradually fallen silent under curfew, but Malala’s mind races with thoughts she must capture.</p> <p>The Taliban’s grip on the valley has tightened; they have outlawed girls’ education, effective January 15. In secret, Malala has agreed to share her days in a diary for the BBC Urdu website. Under the pseudonym “Gul Makai,” she will be the anonymous voice of schoolgirls living in fear. Tonight she gathered her courage to write her very first entry.</p> <p>By the light of a small oil lamp, Malala describes the nightmare she had the previous night: “I had a terrible dream... helicopters in the sky and men with long beards. Taliban fighters. I was afraid of going to school,” she notes in neat Urdu script.</p> <p>Her pen pauses; the memory of that fear is fresh, but writing it down steadies her. She recalls her father’s encouragement earlier: “Your voice can spread the truth,” he told her quietly, eyes shining with both pride and worry.</p> <p>So Malala continues to write, precisely recounting the events of the day. She tells of how her classmates whispered rumors that their school might close indefinitely, how teachers faltered when discussing next week’s plans. She explains that the militant leader Maulana Shah Dauran has been declaring on his illegal radio broadcast that girls must stop attending school or face dire consequences.</p> <p>As her kerosene lamp flickers, Malala’s mother peeks in. “Are you still awake, Malala?” her mother whispers, stepping gently into the room.</p> <p>Malala hurriedly covers the notebook. Her mother smiles kindly, pretending not to notice. “Don’t stay up too late, jan,” she murmurs, using an endearment, and adds, “And remember, use that pen name we talked about.”</p> <p>Malala nods. Gul Makai. In local folklore, that name belonged to a heroine, one who spoke out. The girl straightens her shoulders, feeling the weight of the responsibility she’s taken on. As her mother leaves, Malala ends her entry with a simple hope: that her words might shine a light in the darkness surrounding Swat. She signs off as Gul Makai and sets down her pen. In the stillness that follows, she feels both nervous and relieved. Her voice is on paper now, prepared to travel beyond the valley. Tucking the notebook safely under her pillow, Malala lies down. She does not know what dangers the coming days will bring, but tonight she has begun her mission. One humble diary entry that will soon echo far beyond her small room.</p> </div> </article> ` })}`;
}, "C:/Users/DAISY/KatsumiMaki/src/pages/topics/stories/fanmade/history/prahlada-and-malala/page-2/index.astro", void 0);

const $$file = "C:/Users/DAISY/KatsumiMaki/src/pages/topics/stories/fanmade/history/prahlada-and-malala/page-2/index.astro";
const $$url = "/topics/stories/fanmade/history/prahlada-and-malala/page-2/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
