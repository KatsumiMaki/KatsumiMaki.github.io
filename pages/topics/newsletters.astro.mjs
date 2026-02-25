import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_CZXttPcx.mjs';
import 'kleur/colors';
import { f as findNodeByHref, $ as $$Base } from '../../chunks/Base_B9z84OHY.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://katsumimaki.github.io");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const current = Astro2.url.pathname;
  const pageTitle = "Newsletters";
  const rootNode = findNodeByHref(current);
  const children = rootNode?.children ?? [];
  const originalsNode = children.find(
    (child) => /original/i.test(child.label)
  );
  const fanmadeNode = children.find(
    (child) => /fan.?made/i.test(child.label)
  );
  function compareByLabelWithTrailingNumber(a, b) {
    const parse = (label) => {
      const match = label.match(/^(.*?)(\d+)\s*$/);
      if (!match) {
        return { base: label.toLowerCase(), num: Number.POSITIVE_INFINITY };
      }
      return { base: match[1].trim().toLowerCase(), num: Number(match[2]) };
    };
    const pa = parse(a.label);
    const pb = parse(b.label);
    if (pa.base === pb.base) {
      return pa.num - pb.num;
    }
    return pa.base.localeCompare(pb.base);
  }
  function parseDateFromLabel(label) {
    const match = label.match(/^(\d{4})[-/](\d{2})(?:[-/](\d{2}))?/);
    if (!match) return null;
    const [, y, m, d] = match;
    return new Date(
      Number(y),
      Number(m) - 1,
      d ? Number(d) : 1
    );
  }
  function compareByDateLabelDescending(a, b) {
    const da = parseDateFromLabel(a.label);
    const db = parseDateFromLabel(b.label);
    if (da && db) return db.getTime() - da.getTime();
    if (da && !db) return -1;
    if (!da && db) return 1;
    return compareByLabelWithTrailingNumber(a, b);
  }
  const originalsEntries = (originalsNode?.children ?? []).slice().sort(compareByDateLabelDescending);
  const fanmadeEntries = (fanmadeNode?.children ?? []).slice().sort(compareByLabelWithTrailingNumber);
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p class="kicker">${pageTitle}</p> <div class="folder-columns" style="--folder-columns: 2">  <div class="folder-column"> <p> ${originalsNode ? renderTemplate`<a${addAttribute(originalsNode.href, "href")} class="folder-heading-link">
Originals
</a>` : "Originals"} </p> ${originalsEntries.map((entry) => renderTemplate`<a${addAttribute(entry.href, "href")}>${entry.label}</a>`)} </div>  <div class="folder-column"> <p> ${fanmadeNode ? renderTemplate`<a${addAttribute(fanmadeNode.href, "href")} class="folder-heading-link">
FanMade
</a>` : "FanMade"} </p> ${fanmadeEntries.map((entry) => renderTemplate`<a${addAttribute(entry.href, "href")}>${entry.label}</a>`)} </div> </div> <hr> <div class="prose"> <p>
Read monthly newsletter issues (<strong>Originals</strong>) and bonus
      research papers (<strong>FanMade</strong>).
</p> </div> ` })}`;
}, "C:/Users/DAISY/KatsumiMaki/src/pages/topics/newsletters/index.astro", void 0);

const $$file = "C:/Users/DAISY/KatsumiMaki/src/pages/topics/newsletters/index.astro";
const $$url = "/topics/newsletters/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
