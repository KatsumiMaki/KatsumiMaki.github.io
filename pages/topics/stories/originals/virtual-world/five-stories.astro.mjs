import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../../../../chunks/astro/server_CZXttPcx.mjs';
import 'kleur/colors';
import { f as findNodeByHref, $ as $$Base } from '../../../../../chunks/Base_B9z84OHY.mjs';
/* empty css                                             */
export { renderers } from '../../../../../renderers.mjs';

const $$Astro = createAstro("https://katsumimaki.github.io");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const current = Astro2.url.pathname;
  const pageTitle = "Five Stories";
  function parseStoryLabel(label) {
    const match = label.match(/^(\d+)\s+(.+?)\s+(\d+)\s*$/);
    if (!match) {
      return {
        overallIndex: Number.POSITIVE_INFINITY,
        storyKey: label,
        storyIndex: Number.POSITIVE_INFINITY
      };
    }
    return {
      overallIndex: Number(match[1]),
      storyKey: match[2],
      storyIndex: Number(match[3])
    };
  }
  function packGroupsIntoColumns(groups, columns2) {
    const cols = Array.from({ length: columns2 }, () => []);
    const counts = Array(columns2).fill(0);
    const sortedGroups = groups.slice().sort((a, b) => b.length - a.length);
    for (const group of sortedGroups) {
      let target = 0;
      for (let i = 1; i < columns2; i++) {
        if (counts[i] < counts[target]) target = i;
      }
      cols[target].push(...group);
      counts[target] += group.length;
    }
    return cols;
  }
  const node = findNodeByHref(current);
  const parsed = (node?.children ?? []).map((child) => {
    const parsed2 = parseStoryLabel(child.label);
    return {
      ...child,
      overallIndex: parsed2.overallIndex,
      storyKey: parsed2.storyKey,
      storyIndex: parsed2.storyIndex
    };
  });
  parsed.sort((a, b) => a.overallIndex - b.overallIndex);
  const groupsMap = /* @__PURE__ */ new Map();
  for (const entry of parsed) {
    if (!groupsMap.has(entry.storyKey)) groupsMap.set(entry.storyKey, []);
    groupsMap.get(entry.storyKey).push(entry);
  }
  const storyGroups = Array.from(groupsMap.values());
  const columns = packGroupsIntoColumns(storyGroups, 3);
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p class="kicker">${pageTitle}</p> <div class="folder-columns"> ${columns.map((col) => renderTemplate`<div class="folder-column"> ${col.map((link) => renderTemplate`<a${addAttribute(link.href, "href")}>${link.label}</a>`)} </div>`)} </div> <hr> <div class="prose"> <p>
Each story is individually tagged using a descriptive term between the
      numbers (<em>Cautious</em>, <em>Desperate</em>,${" "} <em>Fading</em>, <em>Indifferent</em>, or <em>Gentle</em>) with the overall
      total number listed before the word and the entry number specific to the
      storyline listed after it. The stories are intermixed, but may be read
      individually with the outline above. The suggested starting point is${" "} <strong>[01 Cautious 01]</strong>.
</p> </div> ` })}`;
}, "C:/Users/DAISY/KatsumiMaki/src/pages/topics/stories/originals/virtual-world/five-stories/index.astro", void 0);

const $$file = "C:/Users/DAISY/KatsumiMaki/src/pages/topics/stories/originals/virtual-world/five-stories/index.astro";
const $$url = "/topics/stories/originals/virtual-world/five-stories/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
