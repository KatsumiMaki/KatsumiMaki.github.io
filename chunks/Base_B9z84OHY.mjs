import { c as createAstro, a as createComponent, m as maybeRenderHead, b as renderTemplate, d as addAttribute, r as renderComponent, e as renderSlot, f as renderScript, g as renderHead } from './astro/server_CZXttPcx.mjs';
import 'kleur/colors';
/* empty css                         */
import 'clsx';

const $$Astro$4 = createAstro("https://katsumimaki.github.io");
const $$SiteHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$SiteHeader;
  const { title = "VW.Z" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="sitebar" role="banner"> <button class="menu-btn" id="menuBtn" aria-expanded="false" aria-controls="sidebar">
☰ Menu
</button> <!-- Titlebar crumbs: Parent (button) / Current --> <nav class="crumbs" aria-label="Location"> <span id="crumbEllipsis" class="crumb-ellipsis" hidden>… /</span> <button class="crumb-btn" id="crumbParent" aria-label="Go to parent" title="Go up" hidden></button> <span class="crumb-sep" id="crumbSep" hidden>/</span> <strong class="site-title" id="crumbCurrent">${title}</strong> </nav> <!-- Chapter prev/next controls (in the top bar next to title) --> <span class="chap-controls" role="group" aria-label="Sibling navigation"> <button class="chap-btn" id="prevChap" aria-label="Previous item" title="Previous item" disabled>
‹<span class="label"> Prev</span> </button> <button class="chap-btn" id="nextChap" aria-label="Next item" title="Next item" disabled> <span class="label">Next </span>›
</button> </span> </div>`;
}, "C:/Users/DAISY/KatsumiMaki/src/components/layout/SiteHeader.astro", void 0);

const $$Astro$3 = createAstro("https://katsumimaki.github.io");
const $$TreeBranch = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$TreeBranch;
  const { nodes = [], currentPath = "/", depth = 0 } = Astro2.props;
  const ariaCurrent = (href) => currentPath === href ? "page" : void 0;
  const inBranch = (href) => currentPath.startsWith(href);
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
  function parseDateFromLabel(label) {
    const match = label.trim().match(/^(\d{4})[-/](\d{1,2})(?:[-/](\d{1,2}))?/);
    if (!match) return null;
    const [, y, m, d] = match;
    const year = Number(y);
    const month = Number(m);
    const day = d ? Number(d) : 1;
    if (!year || !month || month < 1 || month > 12) return null;
    return new Date(year, month - 1, day);
  }
  function compareByDateLabelDescending(a, b) {
    const da = parseDateFromLabel(a.label);
    const db = parseDateFromLabel(b.label);
    if (da && db) {
      if (da > db) return -1;
      if (da < db) return 1;
      return 0;
    }
    if (da && !db) return -1;
    if (!da && db) return 1;
    return compareByLabelWithTrailingNumber(a, b);
  }
  const isOriginalsBranch = (href) => href.includes("/topics/newsletters/originals/");
  const sortedNodes = [...nodes].sort(compareByLabelWithTrailingNumber);
  return renderTemplate`${sortedNodes.map((node) => {
    const sortedChildren = (node.children ?? []).slice().sort(
      isOriginalsBranch(node.href) ? compareByDateLabelDescending : compareByLabelWithTrailingNumber
      // default everywhere else
    );
    return renderTemplate`${maybeRenderHead()}<li${addAttribute(`tree-depth-${depth}`, "class")}>${sortedChildren.length ? renderTemplate`<details class="tree-item"${addAttribute(inBranch(node.href), "open")}><summary><span class="caret" aria-hidden="true"></span><a class="nav-link"${addAttribute(node.href, "href")}${addAttribute(ariaCurrent(node.href), "aria-current")}>${node.label}</a></summary><ul class="tree-children">${renderComponent($$result, "TreeBranch", $$TreeBranch, { "nodes": sortedChildren, "currentPath": currentPath, "depth": depth + 1 })}</ul></details>` : renderTemplate`<a class="nav-link"${addAttribute(node.href, "href")}${addAttribute(ariaCurrent(node.href), "aria-current")}>${node.label}</a>`}</li>`;
  })}`;
}, "C:/Users/DAISY/KatsumiMaki/src/components/TreeBranch.astro", void 0);

const $$Astro$2 = createAstro("https://katsumimaki.github.io");
const $$TreeNav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TreeNav;
  const { items = [], currentPath = "/" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav> <ul class="tree"> ${renderComponent($$result, "TreeBranch", $$TreeBranch, { "nodes": items, "currentPath": currentPath, "depth": 0 })} </ul> </nav>`;
}, "C:/Users/DAISY/KatsumiMaki/src/components/TreeNav.astro", void 0);

const $$Astro$1 = createAstro("https://katsumimaki.github.io");
const $$SidebarLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SidebarLayout;
  const { nav, currentPath } = Astro2.props;
  return renderTemplate`<!-- App shell: sidebar + content scroll independently -->${maybeRenderHead()}<div class="app" id="app" data-nav="open"> <aside class="sidebar" id="sidebar" aria-label="Primary" data-open="false"> <div class="sidebar-find"> <button id="findCurrentBtn" class="nav-find-btn" type="button" aria-label="Reveal and scroll to the current page in the nav" title="Find current">
Find
</button> </div> <a class="brand" href="/">VW.Z</a> <div class="nav-section">General</div> ${renderComponent($$result, "TreeNav", $$TreeNav, { "items": nav.general, "currentPath": currentPath })} <div class="nav-section">Topics</div> ${renderComponent($$result, "TreeNav", $$TreeNav, { "items": nav.topics, "currentPath": currentPath })} <!-- collapse button wrapper (already in your layout) --> <div class="sidebar-collapse"> <button id="collapseNavBtn" class="nav-collapse-btn" type="button" aria-label="Collapse all folders">
Cls
</button> </div> </aside> <main id="content"> ${renderSlot($$result, $$slots["default"])} </main> </div> <div class="overlay" id="overlay" hidden></div> <!-- Scroll to top button --> <button id="scrollTopBtn" class="scroll-top-btn" type="button" aria-label="Scroll back to top" title="Scroll back to top">
↑ Top
</button> ${renderScript($$result, "C:/Users/DAISY/KatsumiMaki/src/components/layout/SidebarLayout.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/DAISY/KatsumiMaki/src/components/layout/SidebarLayout.astro", void 0);

const nav = {
  "general": [
    {
      "label": "Home",
      "href": "/"
    },
    {
      "label": "About",
      "href": "/general/about/"
    }
  ],
  "topics": [
    {
      "label": "Art",
      "href": "/topics/art/",
      "children": [
        {
          "label": "Fanmade",
          "href": "/topics/art/fanmade/",
          "children": [
            {
              "label": "3below",
              "href": "/topics/art/fanmade/3below/"
            },
            {
              "label": "Adventure Time",
              "href": "/topics/art/fanmade/adventure-time/"
            },
            {
              "label": "Animal Crossing",
              "href": "/topics/art/fanmade/animal-crossing/"
            },
            {
              "label": "Avatar",
              "href": "/topics/art/fanmade/avatar/"
            },
            {
              "label": "Ben 10",
              "href": "/topics/art/fanmade/ben-10/"
            },
            {
              "label": "Dnd",
              "href": "/topics/art/fanmade/dnd/"
            },
            {
              "label": "Fnaf",
              "href": "/topics/art/fanmade/fnaf/"
            },
            {
              "label": "Littlest Pet Shop",
              "href": "/topics/art/fanmade/littlest-pet-shop/"
            },
            {
              "label": "My Little Pony",
              "href": "/topics/art/fanmade/my-little-pony/"
            },
            {
              "label": "Paw Patrol",
              "href": "/topics/art/fanmade/paw-patrol/"
            },
            {
              "label": "Rezero",
              "href": "/topics/art/fanmade/rezero/"
            },
            {
              "label": "She Ra",
              "href": "/topics/art/fanmade/she-ra/"
            },
            {
              "label": "Star Wars",
              "href": "/topics/art/fanmade/star-wars/"
            },
            {
              "label": "Steven Universe",
              "href": "/topics/art/fanmade/steven-universe/"
            },
            {
              "label": "Super Monsters",
              "href": "/topics/art/fanmade/super-monsters/"
            },
            {
              "label": "Tits",
              "href": "/topics/art/fanmade/tits/"
            },
            {
              "label": "True",
              "href": "/topics/art/fanmade/true/"
            },
            {
              "label": "Unikitty",
              "href": "/topics/art/fanmade/unikitty/"
            },
            {
              "label": "Vampirina",
              "href": "/topics/art/fanmade/vampirina/"
            },
            {
              "label": "Wheres Waldo",
              "href": "/topics/art/fanmade/wheres-waldo/"
            }
          ]
        },
        {
          "label": "Originals",
          "href": "/topics/art/originals/",
          "children": [
            {
              "label": "Virtual World",
              "href": "/topics/art/originals/virtual-world/",
              "children": [
                {
                  "label": "Annie",
                  "href": "/topics/art/originals/virtual-world/annie/"
                },
                {
                  "label": "Daisy",
                  "href": "/topics/art/originals/virtual-world/daisy/"
                }
              ]
            },
            {
              "label": "Vwss",
              "href": "/topics/art/originals/vwss/"
            },
            {
              "label": "Zhs",
              "href": "/topics/art/originals/zhs/"
            }
          ]
        }
      ]
    },
    {
      "label": "Hobbies",
      "href": "/topics/hobbies/",
      "children": [
        {
          "label": "Fanmade",
          "href": "/topics/hobbies/fanmade/",
          "children": [
            {
              "label": "Sewing",
              "href": "/topics/hobbies/fanmade/sewing/",
              "children": [
                {
                  "label": "Star Trek",
                  "href": "/topics/hobbies/fanmade/sewing/star-trek/"
                }
              ]
            }
          ]
        },
        {
          "label": "Originals",
          "href": "/topics/hobbies/originals/",
          "children": [
            {
              "label": "Sewing",
              "href": "/topics/hobbies/originals/sewing/",
              "children": [
                {
                  "label": "Kids Clothes",
                  "href": "/topics/hobbies/originals/sewing/kids-clothes/"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "label": "Newsletters",
      "href": "/topics/newsletters/",
      "children": [
        {
          "label": "Fanmade",
          "href": "/topics/newsletters/fanmade/",
          "children": [
            {
              "label": "Dada Collages",
              "href": "/topics/newsletters/fanmade/dada-collages/"
            },
            {
              "label": "Friends With You",
              "href": "/topics/newsletters/fanmade/friends-with-you/"
            },
            {
              "label": "Mannequins",
              "href": "/topics/newsletters/fanmade/mannequins/"
            },
            {
              "label": "Monoline",
              "href": "/topics/newsletters/fanmade/monoline/"
            },
            {
              "label": "Ps1 Graphics",
              "href": "/topics/newsletters/fanmade/ps1-graphics/"
            },
            {
              "label": "Slow Art",
              "href": "/topics/newsletters/fanmade/slow-art/"
            }
          ]
        },
        {
          "label": "Originals",
          "href": "/topics/newsletters/originals/",
          "children": [
            {
              "label": "2024-09 September",
              "href": "/topics/newsletters/originals/2024-09-september/"
            },
            {
              "label": "2024-10 October",
              "href": "/topics/newsletters/originals/2024-10-october/"
            },
            {
              "label": "2024-11 November",
              "href": "/topics/newsletters/originals/2024-11-november/"
            },
            {
              "label": "2024-12 December",
              "href": "/topics/newsletters/originals/2024-12-december/"
            },
            {
              "label": "2025-01 January",
              "href": "/topics/newsletters/originals/2025-01-january/"
            },
            {
              "label": "2025-02 February",
              "href": "/topics/newsletters/originals/2025-02-february/"
            },
            {
              "label": "2025-03 March",
              "href": "/topics/newsletters/originals/2025-03-march/"
            },
            {
              "label": "2025-04 April",
              "href": "/topics/newsletters/originals/2025-04-april/"
            },
            {
              "label": "2025-05 May",
              "href": "/topics/newsletters/originals/2025-05-may/"
            },
            {
              "label": "2025-06 June",
              "href": "/topics/newsletters/originals/2025-06-june/"
            },
            {
              "label": "2025-07 July",
              "href": "/topics/newsletters/originals/2025-07-july/"
            },
            {
              "label": "2025-08 August",
              "href": "/topics/newsletters/originals/2025-08-august/"
            },
            {
              "label": "2025-09 September",
              "href": "/topics/newsletters/originals/2025-09-september/"
            }
          ]
        }
      ]
    },
    {
      "label": "Stories",
      "href": "/topics/stories/",
      "children": [
        {
          "label": "Fanmade",
          "href": "/topics/stories/fanmade/",
          "children": [
            {
              "label": "Daggerheart",
              "href": "/topics/stories/fanmade/daggerheart/",
              "children": [
                {
                  "label": "Cici",
                  "href": "/topics/stories/fanmade/daggerheart/cici/",
                  "children": [
                    {
                      "label": "Page 1",
                      "href": "/topics/stories/fanmade/daggerheart/cici/page-1/"
                    },
                    {
                      "label": "Page 2",
                      "href": "/topics/stories/fanmade/daggerheart/cici/page-2/"
                    }
                  ]
                }
              ]
            },
            {
              "label": "Dnd",
              "href": "/topics/stories/fanmade/dnd/",
              "children": [
                {
                  "label": "Azurion Nightfall",
                  "href": "/topics/stories/fanmade/dnd/azurion-nightfall/",
                  "children": [
                    {
                      "label": "Page 1",
                      "href": "/topics/stories/fanmade/dnd/azurion-nightfall/page-1/"
                    }
                  ]
                },
                {
                  "label": "Little",
                  "href": "/topics/stories/fanmade/dnd/little/",
                  "children": [
                    {
                      "label": "Page 1",
                      "href": "/topics/stories/fanmade/dnd/little/page-1/"
                    }
                  ]
                }
              ]
            },
            {
              "label": "History",
              "href": "/topics/stories/fanmade/history/",
              "children": [
                {
                  "label": "Prahlada And Malala",
                  "href": "/topics/stories/fanmade/history/prahlada-and-malala/",
                  "children": [
                    {
                      "label": "Page 1",
                      "href": "/topics/stories/fanmade/history/prahlada-and-malala/page-1/"
                    },
                    {
                      "label": "Page 10",
                      "href": "/topics/stories/fanmade/history/prahlada-and-malala/page-10/"
                    },
                    {
                      "label": "Page 2",
                      "href": "/topics/stories/fanmade/history/prahlada-and-malala/page-2/"
                    },
                    {
                      "label": "Page 3",
                      "href": "/topics/stories/fanmade/history/prahlada-and-malala/page-3/"
                    },
                    {
                      "label": "Page 4",
                      "href": "/topics/stories/fanmade/history/prahlada-and-malala/page-4/"
                    },
                    {
                      "label": "Page 5",
                      "href": "/topics/stories/fanmade/history/prahlada-and-malala/page-5/"
                    },
                    {
                      "label": "Page 6",
                      "href": "/topics/stories/fanmade/history/prahlada-and-malala/page-6/"
                    },
                    {
                      "label": "Page 7",
                      "href": "/topics/stories/fanmade/history/prahlada-and-malala/page-7/"
                    },
                    {
                      "label": "Page 8",
                      "href": "/topics/stories/fanmade/history/prahlada-and-malala/page-8/"
                    },
                    {
                      "label": "Page 9",
                      "href": "/topics/stories/fanmade/history/prahlada-and-malala/page-9/"
                    }
                  ]
                }
              ]
            },
            {
              "label": "My Little Pony",
              "href": "/topics/stories/fanmade/my-little-pony/",
              "children": [
                {
                  "label": "Stellar Redux",
                  "href": "/topics/stories/fanmade/my-little-pony/stellar-redux/",
                  "children": [
                    {
                      "label": "Page 1",
                      "href": "/topics/stories/fanmade/my-little-pony/stellar-redux/page-1/"
                    },
                    {
                      "label": "Page 2",
                      "href": "/topics/stories/fanmade/my-little-pony/stellar-redux/page-2/"
                    },
                    {
                      "label": "Page 3",
                      "href": "/topics/stories/fanmade/my-little-pony/stellar-redux/page-3/"
                    },
                    {
                      "label": "Page 4",
                      "href": "/topics/stories/fanmade/my-little-pony/stellar-redux/page-4/"
                    }
                  ]
                }
              ]
            },
            {
              "label": "Pathfinder",
              "href": "/topics/stories/fanmade/pathfinder/",
              "children": [
                {
                  "label": "Occupation On Vesk 3",
                  "href": "/topics/stories/fanmade/pathfinder/occupation-on-vesk-3/",
                  "children": [
                    {
                      "label": "Page 1",
                      "href": "/topics/stories/fanmade/pathfinder/occupation-on-vesk-3/page-1/"
                    },
                    {
                      "label": "Page 2",
                      "href": "/topics/stories/fanmade/pathfinder/occupation-on-vesk-3/page-2/"
                    },
                    {
                      "label": "Page 3",
                      "href": "/topics/stories/fanmade/pathfinder/occupation-on-vesk-3/page-3/"
                    },
                    {
                      "label": "Page 4",
                      "href": "/topics/stories/fanmade/pathfinder/occupation-on-vesk-3/page-4/"
                    }
                  ]
                }
              ]
            },
            {
              "label": "Satisfactory",
              "href": "/topics/stories/fanmade/satisfactory/",
              "children": [
                {
                  "label": "Everroot",
                  "href": "/topics/stories/fanmade/satisfactory/everroot/",
                  "children": [
                    {
                      "label": "Page 1",
                      "href": "/topics/stories/fanmade/satisfactory/everroot/page-1/"
                    }
                  ]
                },
                {
                  "label": "Reaper And Ada",
                  "href": "/topics/stories/fanmade/satisfactory/reaper-and-ada/",
                  "children": [
                    {
                      "label": "Chapter 1",
                      "href": "/topics/stories/fanmade/satisfactory/reaper-and-ada/chapter-1/"
                    },
                    {
                      "label": "Chapter 2",
                      "href": "/topics/stories/fanmade/satisfactory/reaper-and-ada/chapter-2/"
                    },
                    {
                      "label": "Chapter 3",
                      "href": "/topics/stories/fanmade/satisfactory/reaper-and-ada/chapter-3/"
                    },
                    {
                      "label": "Chapter 4",
                      "href": "/topics/stories/fanmade/satisfactory/reaper-and-ada/chapter-4/"
                    },
                    {
                      "label": "Chapter 5",
                      "href": "/topics/stories/fanmade/satisfactory/reaper-and-ada/chapter-5/"
                    },
                    {
                      "label": "Chapter 6",
                      "href": "/topics/stories/fanmade/satisfactory/reaper-and-ada/chapter-6/"
                    },
                    {
                      "label": "Chapter 7",
                      "href": "/topics/stories/fanmade/satisfactory/reaper-and-ada/chapter-7/"
                    },
                    {
                      "label": "Chapter 8",
                      "href": "/topics/stories/fanmade/satisfactory/reaper-and-ada/chapter-8/"
                    }
                  ]
                }
              ]
            },
            {
              "label": "Star Trek",
              "href": "/topics/stories/fanmade/star-trek/",
              "children": [
                {
                  "label": "Uss Mesa",
                  "href": "/topics/stories/fanmade/star-trek/uss-mesa/",
                  "children": [
                    {
                      "label": "Page 1",
                      "href": "/topics/stories/fanmade/star-trek/uss-mesa/page-1/"
                    },
                    {
                      "label": "Page 2",
                      "href": "/topics/stories/fanmade/star-trek/uss-mesa/page-2/"
                    },
                    {
                      "label": "Page 3",
                      "href": "/topics/stories/fanmade/star-trek/uss-mesa/page-3/"
                    }
                  ]
                }
              ]
            },
            {
              "label": "Star Wars",
              "href": "/topics/stories/fanmade/star-wars/",
              "children": [
                {
                  "label": "Protocols And Princesses",
                  "href": "/topics/stories/fanmade/star-wars/protocols-and-princesses/",
                  "children": [
                    {
                      "label": "Page 1",
                      "href": "/topics/stories/fanmade/star-wars/protocols-and-princesses/page-1/"
                    }
                  ]
                },
                {
                  "label": "Shakka Dira",
                  "href": "/topics/stories/fanmade/star-wars/shakka-dira/",
                  "children": [
                    {
                      "label": "Page 1",
                      "href": "/topics/stories/fanmade/star-wars/shakka-dira/page-1/"
                    },
                    {
                      "label": "Page 2",
                      "href": "/topics/stories/fanmade/star-wars/shakka-dira/page-2/"
                    },
                    {
                      "label": "Page 3",
                      "href": "/topics/stories/fanmade/star-wars/shakka-dira/page-3/"
                    },
                    {
                      "label": "Page 4",
                      "href": "/topics/stories/fanmade/star-wars/shakka-dira/page-4/"
                    },
                    {
                      "label": "Page 5",
                      "href": "/topics/stories/fanmade/star-wars/shakka-dira/page-5/"
                    },
                    {
                      "label": "Page 6",
                      "href": "/topics/stories/fanmade/star-wars/shakka-dira/page-6/"
                    },
                    {
                      "label": "Page 7",
                      "href": "/topics/stories/fanmade/star-wars/shakka-dira/page-7/"
                    },
                    {
                      "label": "Page 8",
                      "href": "/topics/stories/fanmade/star-wars/shakka-dira/page-8/"
                    },
                    {
                      "label": "Page 9",
                      "href": "/topics/stories/fanmade/star-wars/shakka-dira/page-9/"
                    }
                  ]
                }
              ]
            },
            {
              "label": "Trolls",
              "href": "/topics/stories/fanmade/trolls/",
              "children": [
                {
                  "label": "Rave And Relaxation",
                  "href": "/topics/stories/fanmade/trolls/rave-and-relaxation/",
                  "children": [
                    {
                      "label": "Page 1",
                      "href": "/topics/stories/fanmade/trolls/rave-and-relaxation/page-1/"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "Originals",
          "href": "/topics/stories/originals/",
          "children": [
            {
              "label": "Neon Fairy Lights",
              "href": "/topics/stories/originals/neon-fairy-lights/",
              "children": [
                {
                  "label": "Main Story",
                  "href": "/topics/stories/originals/neon-fairy-lights/main-story/",
                  "children": [
                    {
                      "label": "Page 1",
                      "href": "/topics/stories/originals/neon-fairy-lights/main-story/page-1/"
                    },
                    {
                      "label": "Page 10",
                      "href": "/topics/stories/originals/neon-fairy-lights/main-story/page-10/"
                    },
                    {
                      "label": "Page 11",
                      "href": "/topics/stories/originals/neon-fairy-lights/main-story/page-11/"
                    },
                    {
                      "label": "Page 12",
                      "href": "/topics/stories/originals/neon-fairy-lights/main-story/page-12/"
                    },
                    {
                      "label": "Page 13",
                      "href": "/topics/stories/originals/neon-fairy-lights/main-story/page-13/"
                    },
                    {
                      "label": "Page 14",
                      "href": "/topics/stories/originals/neon-fairy-lights/main-story/page-14/"
                    },
                    {
                      "label": "Page 15",
                      "href": "/topics/stories/originals/neon-fairy-lights/main-story/page-15/"
                    },
                    {
                      "label": "Page 2",
                      "href": "/topics/stories/originals/neon-fairy-lights/main-story/page-2/"
                    },
                    {
                      "label": "Page 3",
                      "href": "/topics/stories/originals/neon-fairy-lights/main-story/page-3/"
                    },
                    {
                      "label": "Page 4",
                      "href": "/topics/stories/originals/neon-fairy-lights/main-story/page-4/"
                    },
                    {
                      "label": "Page 5",
                      "href": "/topics/stories/originals/neon-fairy-lights/main-story/page-5/"
                    },
                    {
                      "label": "Page 6",
                      "href": "/topics/stories/originals/neon-fairy-lights/main-story/page-6/"
                    },
                    {
                      "label": "Page 7",
                      "href": "/topics/stories/originals/neon-fairy-lights/main-story/page-7/"
                    },
                    {
                      "label": "Page 8",
                      "href": "/topics/stories/originals/neon-fairy-lights/main-story/page-8/"
                    },
                    {
                      "label": "Page 9",
                      "href": "/topics/stories/originals/neon-fairy-lights/main-story/page-9/"
                    }
                  ]
                }
              ]
            },
            {
              "label": "Northern Lights",
              "href": "/topics/stories/originals/northern-lights/",
              "children": [
                {
                  "label": "Main Story",
                  "href": "/topics/stories/originals/northern-lights/main-story/",
                  "children": [
                    {
                      "label": "Page 1",
                      "href": "/topics/stories/originals/northern-lights/main-story/page-1/"
                    },
                    {
                      "label": "Page 2",
                      "href": "/topics/stories/originals/northern-lights/main-story/page-2/"
                    },
                    {
                      "label": "Page 3",
                      "href": "/topics/stories/originals/northern-lights/main-story/page-3/"
                    },
                    {
                      "label": "Page 4",
                      "href": "/topics/stories/originals/northern-lights/main-story/page-4/"
                    },
                    {
                      "label": "Page 5",
                      "href": "/topics/stories/originals/northern-lights/main-story/page-5/"
                    },
                    {
                      "label": "Page 6",
                      "href": "/topics/stories/originals/northern-lights/main-story/page-6/"
                    }
                  ]
                }
              ]
            },
            {
              "label": "Virtual World",
              "href": "/topics/stories/originals/virtual-world/",
              "children": [
                {
                  "label": "Commands",
                  "href": "/topics/stories/originals/virtual-world/commands/",
                  "children": [
                    {
                      "label": "01 Bash",
                      "href": "/topics/stories/originals/virtual-world/commands/01-bash/"
                    },
                    {
                      "label": "02 Cat",
                      "href": "/topics/stories/originals/virtual-world/commands/02-cat/"
                    },
                    {
                      "label": "03 Ping",
                      "href": "/topics/stories/originals/virtual-world/commands/03-ping/"
                    },
                    {
                      "label": "04 Mint",
                      "href": "/topics/stories/originals/virtual-world/commands/04-mint/"
                    },
                    {
                      "label": "05 Vi",
                      "href": "/topics/stories/originals/virtual-world/commands/05-vi/"
                    },
                    {
                      "label": "06 Echo",
                      "href": "/topics/stories/originals/virtual-world/commands/06-echo/"
                    },
                    {
                      "label": "07 Dig",
                      "href": "/topics/stories/originals/virtual-world/commands/07-dig/"
                    },
                    {
                      "label": "08 Tar",
                      "href": "/topics/stories/originals/virtual-world/commands/08-tar/"
                    },
                    {
                      "label": "09 Sudo",
                      "href": "/topics/stories/originals/virtual-world/commands/09-sudo/"
                    },
                    {
                      "label": "10 Kali",
                      "href": "/topics/stories/originals/virtual-world/commands/10-kali/"
                    },
                    {
                      "label": "11 Nano",
                      "href": "/topics/stories/originals/virtual-world/commands/11-nano/"
                    },
                    {
                      "label": "12 Rpm",
                      "href": "/topics/stories/originals/virtual-world/commands/12-rpm/"
                    },
                    {
                      "label": "13 Tail",
                      "href": "/topics/stories/originals/virtual-world/commands/13-tail/"
                    },
                    {
                      "label": "14 Grep",
                      "href": "/topics/stories/originals/virtual-world/commands/14-grep/"
                    },
                    {
                      "label": "15 Cron",
                      "href": "/topics/stories/originals/virtual-world/commands/15-cron/"
                    },
                    {
                      "label": "16 Alma",
                      "href": "/topics/stories/originals/virtual-world/commands/16-alma/"
                    },
                    {
                      "label": "17 Shell",
                      "href": "/topics/stories/originals/virtual-world/commands/17-shell/"
                    },
                    {
                      "label": "18 Yaml",
                      "href": "/topics/stories/originals/virtual-world/commands/18-yaml/"
                    },
                    {
                      "label": "19 Sed",
                      "href": "/topics/stories/originals/virtual-world/commands/19-sed/"
                    },
                    {
                      "label": "20 Curl",
                      "href": "/topics/stories/originals/virtual-world/commands/20-curl/"
                    }
                  ]
                },
                {
                  "label": "Five Stories",
                  "href": "/topics/stories/originals/virtual-world/five-stories/",
                  "children": [
                    {
                      "label": "01 Cautious 01",
                      "href": "/topics/stories/originals/virtual-world/five-stories/01-cautious-01/"
                    },
                    {
                      "label": "02 Desperate 01",
                      "href": "/topics/stories/originals/virtual-world/five-stories/02-desperate-01/"
                    },
                    {
                      "label": "03 Fading 01",
                      "href": "/topics/stories/originals/virtual-world/five-stories/03-fading-01/"
                    },
                    {
                      "label": "04 Cautious 02",
                      "href": "/topics/stories/originals/virtual-world/five-stories/04-cautious-02/"
                    },
                    {
                      "label": "05 Indifferent 01",
                      "href": "/topics/stories/originals/virtual-world/five-stories/05-indifferent-01/"
                    },
                    {
                      "label": "06 Gentle 01",
                      "href": "/topics/stories/originals/virtual-world/five-stories/06-gentle-01/"
                    },
                    {
                      "label": "07 Cautious 03",
                      "href": "/topics/stories/originals/virtual-world/five-stories/07-cautious-03/"
                    },
                    {
                      "label": "08 Desperate 02",
                      "href": "/topics/stories/originals/virtual-world/five-stories/08-desperate-02/"
                    },
                    {
                      "label": "09 Fading 02",
                      "href": "/topics/stories/originals/virtual-world/five-stories/09-fading-02/"
                    },
                    {
                      "label": "10 Cautious 04",
                      "href": "/topics/stories/originals/virtual-world/five-stories/10-cautious-04/"
                    },
                    {
                      "label": "11 Indifferent 02",
                      "href": "/topics/stories/originals/virtual-world/five-stories/11-indifferent-02/"
                    },
                    {
                      "label": "12 Gentle 02",
                      "href": "/topics/stories/originals/virtual-world/five-stories/12-gentle-02/"
                    },
                    {
                      "label": "13 Cautious 05",
                      "href": "/topics/stories/originals/virtual-world/five-stories/13-cautious-05/"
                    },
                    {
                      "label": "14 Desperate 03",
                      "href": "/topics/stories/originals/virtual-world/five-stories/14-desperate-03/"
                    },
                    {
                      "label": "15 Fading 03",
                      "href": "/topics/stories/originals/virtual-world/five-stories/15-fading-03/"
                    },
                    {
                      "label": "16 Cautious 06",
                      "href": "/topics/stories/originals/virtual-world/five-stories/16-cautious-06/"
                    },
                    {
                      "label": "17 Indifferent 03",
                      "href": "/topics/stories/originals/virtual-world/five-stories/17-indifferent-03/"
                    },
                    {
                      "label": "18 Gentle 03",
                      "href": "/topics/stories/originals/virtual-world/five-stories/18-gentle-03/"
                    },
                    {
                      "label": "19 Cautious 07",
                      "href": "/topics/stories/originals/virtual-world/five-stories/19-cautious-07/"
                    },
                    {
                      "label": "20 Desperate 04",
                      "href": "/topics/stories/originals/virtual-world/five-stories/20-desperate-04/"
                    },
                    {
                      "label": "21 Fading 04",
                      "href": "/topics/stories/originals/virtual-world/five-stories/21-fading-04/"
                    },
                    {
                      "label": "22 Cautious 08",
                      "href": "/topics/stories/originals/virtual-world/five-stories/22-cautious-08/"
                    },
                    {
                      "label": "23 Indifferent 04",
                      "href": "/topics/stories/originals/virtual-world/five-stories/23-indifferent-04/"
                    },
                    {
                      "label": "24 Gentle 04",
                      "href": "/topics/stories/originals/virtual-world/five-stories/24-gentle-04/"
                    },
                    {
                      "label": "25 Cautious 09",
                      "href": "/topics/stories/originals/virtual-world/five-stories/25-cautious-09/"
                    },
                    {
                      "label": "26 Desperate 05",
                      "href": "/topics/stories/originals/virtual-world/five-stories/26-desperate-05/"
                    },
                    {
                      "label": "27 Fading 05",
                      "href": "/topics/stories/originals/virtual-world/five-stories/27-fading-05/"
                    },
                    {
                      "label": "28 Cautious 10",
                      "href": "/topics/stories/originals/virtual-world/five-stories/28-cautious-10/"
                    },
                    {
                      "label": "29 Indifferent 05",
                      "href": "/topics/stories/originals/virtual-world/five-stories/29-indifferent-05/"
                    },
                    {
                      "label": "30 Gentle 05",
                      "href": "/topics/stories/originals/virtual-world/five-stories/30-gentle-05/"
                    },
                    {
                      "label": "31 Cautious 11",
                      "href": "/topics/stories/originals/virtual-world/five-stories/31-cautious-11/"
                    },
                    {
                      "label": "32 Desperate 06",
                      "href": "/topics/stories/originals/virtual-world/five-stories/32-desperate-06/"
                    },
                    {
                      "label": "33 Fading 06",
                      "href": "/topics/stories/originals/virtual-world/five-stories/33-fading-06/"
                    },
                    {
                      "label": "34 Cautious 12",
                      "href": "/topics/stories/originals/virtual-world/five-stories/34-cautious-12/"
                    },
                    {
                      "label": "35 Indifferent 06",
                      "href": "/topics/stories/originals/virtual-world/five-stories/35-indifferent-06/"
                    },
                    {
                      "label": "36 Gentle 06",
                      "href": "/topics/stories/originals/virtual-world/five-stories/36-gentle-06/"
                    }
                  ]
                },
                {
                  "label": "Main Story",
                  "href": "/topics/stories/originals/virtual-world/main-story/",
                  "children": [
                    {
                      "label": "Page 1",
                      "href": "/topics/stories/originals/virtual-world/main-story/page-1/"
                    },
                    {
                      "label": "Page 2",
                      "href": "/topics/stories/originals/virtual-world/main-story/page-2/"
                    },
                    {
                      "label": "Page 3",
                      "href": "/topics/stories/originals/virtual-world/main-story/page-3/"
                    },
                    {
                      "label": "Page 4",
                      "href": "/topics/stories/originals/virtual-world/main-story/page-4/"
                    },
                    {
                      "label": "Page 5",
                      "href": "/topics/stories/originals/virtual-world/main-story/page-5/"
                    },
                    {
                      "label": "Page 6",
                      "href": "/topics/stories/originals/virtual-world/main-story/page-6/"
                    },
                    {
                      "label": "Page 7",
                      "href": "/topics/stories/originals/virtual-world/main-story/page-7/"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
function findNodeByHref(href) {
  function walk(nodes) {
    for (const n of nodes) {
      if (n.href === href) return n;
      if (n.children) {
        const found = walk(n.children);
        if (found) return found;
      }
    }
  }
  href.endsWith("/") ? href : href + "/";
  return walk([...nav.general, ...nav.topics]);
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://katsumimaki.github.io");
const $$Base = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Base;
  const { title = "VW.Z" } = Astro2.props;
  const currentPath = Astro2.url.pathname;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>', "</title>", "</head> <body> ", " ", " <!-- Bundled + transpiled (TS \u2192 JS) --> <script", "><\/script> </body> </html>"])), title, renderHead(), renderComponent($$result, "SiteHeader", $$SiteHeader, { "title": title }), renderComponent($$result, "SidebarLayout", $$SidebarLayout, { "nav": nav, "currentPath": currentPath }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` }), addAttribute(Astro2.resolve("../scripts/vwz-layout.ts"), "src"));
}, "C:/Users/DAISY/KatsumiMaki/src/layouts/Base.astro", void 0);

export { $$Base as $, findNodeByHref as f };
