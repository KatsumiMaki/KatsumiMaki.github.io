import { c as createAstro, a as createComponent, m as maybeRenderHead, d as addAttribute, b as renderTemplate } from './astro/server_CZXttPcx.mjs';
import 'kleur/colors';
import 'clsx';
import { f as findNodeByHref } from './Base_DMGW_6Ds.mjs';

const $$Astro = createAstro("https://katsumimaki.github.io");
const $$SubFolderLinks = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SubFolderLinks;
  const {
    current = "/",
    kicker = "Subfolders",
    ariaLabel = "Subfolder navigation"
  } = Astro2.props;
  const node = findNodeByHref(current);
  function compareByLabelWithTrailingNumber(a, b) {
    const parse = (label) => {
      const match = label.match(/^(.*?)(\d+)\s*$/);
      if (!match) {
        return {
          base: label.toLowerCase(),
          num: Number.POSITIVE_INFINITY
        };
      }
      return {
        base: match[1].trim().toLowerCase(),
        num: Number(match[2])
      };
    };
    const pa = parse(a.label);
    const pb = parse(b.label);
    if (pa.base === pb.base) {
      return pa.num - pb.num;
    }
    return pa.base.localeCompare(pb.base);
  }
  const universes = (node?.children ?? []).slice().sort(compareByLabelWithTrailingNumber);
  return renderTemplate`${universes.length > 0 && renderTemplate`${maybeRenderHead()}<nav${addAttribute(ariaLabel, "aria-label")}>${kicker && renderTemplate`<p class="kicker">${kicker}</p>`}<ul>${universes.map((universe) => {
    const stories = (universe.children ?? []).slice().sort(compareByLabelWithTrailingNumber);
    return renderTemplate`<li><a${addAttribute(universe.href, "href")}>${universe.label}</a>${stories.length > 0 && renderTemplate`<ul>${stories.map((story) => renderTemplate`<li><a${addAttribute(story.href, "href")}>${story.label}</a></li>`)}</ul>`}</li>`;
  })}</ul><hr></nav>`}`;
}, "C:/Users/DAISY/GithubPages/vw.z/src/components/SubFolderLinks.astro", void 0);

export { $$SubFolderLinks as $ };
