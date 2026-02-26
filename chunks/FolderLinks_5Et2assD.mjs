import { c as createAstro, a as createComponent, m as maybeRenderHead, d as addAttribute, b as renderTemplate } from './astro/server_CZXttPcx.mjs';
import 'kleur/colors';
import 'clsx';
import { f as findNodeByHref } from './Base_DMGW_6Ds.mjs';

const $$Astro = createAstro("https://katsumimaki.github.io");
const $$FolderLinks = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FolderLinks;
  const {
    current = "/",
    kicker = "Folders",
    ariaLabel = "Subfolders"
  } = Astro2.props;
  const node = findNodeByHref(current);
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
    if (pa.base === pb.base) return pa.num - pb.num;
    return pa.base.localeCompare(pb.base);
  }
  const children = (node?.children ?? []).slice().sort(compareByLabelWithTrailingNumber);
  return renderTemplate`${children.length > 0 && renderTemplate`${maybeRenderHead()}<nav${addAttribute(ariaLabel, "aria-label")}><p class="kicker">${kicker}</p><ul>${children.map((c) => renderTemplate`<li><a${addAttribute(c.href, "href")}>${c.label}</a></li>`)}</ul><hr></nav>`}`;
}, "C:/Users/DAISY/GithubPages/vw.z/src/components/FolderLinks.astro", void 0);

export { $$FolderLinks as $ };
