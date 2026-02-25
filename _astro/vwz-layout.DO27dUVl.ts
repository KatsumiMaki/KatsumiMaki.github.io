const app     = document.getElementById('app');
const btn     = document.getElementById('menuBtn');
const sitebar = document.querySelector('.sitebar') as HTMLElement | null;
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
let   main    = document.getElementById('content');
const scrollTopBtn = document.getElementById('scrollTopBtn');
const collapseNavBtn = document.getElementById('collapseNavBtn');
const SCROLL_TOP_THRESHOLD = 200;

const prevBtn = document.getElementById('prevChap') as HTMLButtonElement | null;
const nextBtn = document.getElementById('nextChap') as HTMLButtonElement | null;

const crumbParent  = document.getElementById('crumbParent') as HTMLButtonElement | null;
const crumbCurrent = document.getElementById('crumbCurrent') as HTMLElement | null;
const crumbEllipsis= document.getElementById('crumbEllipsis') as HTMLElement | null;
const crumbSep     = document.getElementById('crumbSep') as HTMLElement | null;

// ----- Per-page content scroll memory (works whether body scrolls or <main> scrolls) -----
const LS_PAGE_PREFIX = 'vwz_page_scroll:';
function pageKey(pathname: string) { return LS_PAGE_PREFIX + (pathname || location.pathname); }
function getMainIsScroller() {
  try {
    if (!main) return false;
    const y = getComputedStyle(main).overflowY;
    return y && y !== 'visible';
  } catch { return false; }
}
function saveMainScroll(pathname = location.pathname) {
  try {
    const y = getMainIsScroller()
      ? ((main && main.scrollTop) || 0)
      : (document.scrollingElement?.scrollTop || window.scrollY || 0);
    sessionStorage.setItem(pageKey(pathname), String(y));
  } catch {}
}
function restoreMainScroll(pathname = location.pathname) {
  try {
    const y = parseInt(sessionStorage.getItem(pageKey(pathname)) || '0', 10);
    if (Number.isNaN(y)) return;
    if (getMainIsScroller()) {
      main?.scrollTo({ top: y });
    } else {
      window.scrollTo({ top: y });
    }
  } catch {}
}
function getCurrentScrollY() {
  try {
    return getMainIsScroller()
      ? ((main && main.scrollTop) || 0)
      : (document.scrollingElement?.scrollTop || window.scrollY || 0);
  } catch {
    return 0;
  }
}
function updateScrollTopBtn() {
  if (!scrollTopBtn) return;
  const y = getCurrentScrollY();
  const visible = y > SCROLL_TOP_THRESHOLD;
  (scrollTopBtn as HTMLElement).dataset.visible = visible ? 'true' : 'false';
}
function attachMainScrollHandlers() {
  let raf = 0;
  function onScroll() {
    if (raf) cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      saveMainScroll();
      updateScrollTopBtn();
    });
  }
  main?.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('scroll', onScroll, { passive: true });

  // Initial state
  updateScrollTopBtn();
}

// ---------- Utilities ----------
function norm(href: string) {
  try {
    const u = new URL(href, location.href);
    let p = u.pathname;
    if (p.length > 1 && !p.endsWith('/')) p += '/';
    return p;
  } catch {
    let p = String(href || '/');
    if (!p.startsWith('/')) p = '/' + p;
    if (p.length > 1 && !p.endsWith('/')) p += '/';
    return p;
  }
}
function qsa<T extends Element = Element>(el: Element | Document, sel: string): T[] {
  return Array.from(el.querySelectorAll(sel)) as T[];
}

function anchorForPath(pathname: string) {
  if (!sidebar) return null;
  // try exact match first
  let a = sidebar.querySelector<HTMLAnchorElement>(`a.nav-link[href="${norm(pathname)}"]`);
  if (a) return a;
  // check normalized equality across all anchors
  const all = qsa<HTMLAnchorElement>(sidebar, 'a.nav-link');
  const target = norm(pathname);
  return all.find(x => norm(x.getAttribute('href')||'') === target) || null;
}

function detailsSummaryAnchor(details: Element | null) {
  return details?.querySelector(':scope > summary a.nav-link') as HTMLAnchorElement | null;
}

// Returns information about where we are + ancestors
function locate(pathname: string) {
  const a = anchorForPath(pathname);
  if (!a) return { a:null as HTMLAnchorElement | null, isFolder:false, chain:[] as HTMLElement[] };
  const inSummary = !!a.closest('summary');
  // chain of ancestor <details>, nearest first
  const chain: HTMLElement[] = [];
  let d = a.closest('details.tree-item') as HTMLElement | null;
  // If the current link is inside a summary, the first 'details' is the current folder. For leaf, it's the parent folder.
  while (d) {
    chain.push(d);
    d = d.parentElement?.closest('details.tree-item') as HTMLElement | null;
  }
  return { a, isFolder: inSummary, chain };
}

// Compute siblings and prev/next.
// Prev/next always operates at the *current level* in the tree:
// one nav-link per <li> in the containing <ul>, regardless of whether
// that nav-link is a folder landing page or a leaf page.
function computeSiblings(pathname: string) {
  const { a, isFolder, chain } = locate(pathname);
  if (!a) return { type: 'none', siblings: [] as HTMLAnchorElement[], index: -1, parentA: null as HTMLAnchorElement | null };

  // Find the UL that defines the current level.
  const li = a.closest('li');
  const ul = li?.parentElement;
  if (!ul) return { type: isFolder ? 'folder' : 'leaf', siblings: [] as HTMLAnchorElement[], index: -1, parentA: null as HTMLAnchorElement | null };

  // At this level, each <li> has either:
  //   - a direct leaf:    <li><a.nav-link /></li>
  //   - a folder:        <li><details><summary><a.nav-link /></summary>...</details></li>
  // We want exactly one anchor per <li> at this level.
  const siblings = qsa<HTMLAnchorElement>(
    ul,
    ':scope > li > a.nav-link, :scope > li > details.tree-item > summary > a.nav-link'
  );

  const index = siblings.findIndex((x) => x === a);

  // Parent anchor (for potential use): for a leaf, parent is chain[0];
  // for a folder, parent is chain[1].
  const parentIndex = isFolder ? 1 : 0;
  const parentDetails = chain[parentIndex] || null;
  const parentA = detailsSummaryAnchor(parentDetails);

  return {
    type: isFolder ? 'folder' : 'leaf',
    siblings,
    index,
    parentA,
  };
}

// Build the titlebar crumbs (show at most: [maybe ellipsis] Parent / Current).
function updateCrumbs(pathname: string) {
  const { a, isFolder, chain } = locate(pathname);
  if (!crumbParent || !crumbSep || !crumbEllipsis || !crumbCurrent) return;

  if (!a) {
    crumbParent.hidden = true; crumbSep.hidden = true; crumbEllipsis.hidden = true;
    crumbCurrent.textContent = 'VW.Z';
    return;
  }

  // Build ancestor labels (nearest first). For folder pages, chain[0] is current folder; for leaf pages, chain[0] is parent folder.
  const labels = chain.map(d => (detailsSummaryAnchor(d)?.textContent || '').trim());
  const hrefs  = chain.map(d => detailsSummaryAnchor(d)?.getAttribute('href') || '#');

  // Current label
  const currentLabel = isFolder ? (detailsSummaryAnchor(chain[0])?.textContent || '').trim() : (a.textContent || '').trim();
  crumbCurrent.textContent = currentLabel || '—';

  // Parent crumb
  const parentIndex = isFolder ? 1 : 0; // folder: parent is chain[1]; leaf: parent is chain[0]
  if (labels[parentIndex]) {
    crumbParent.hidden = false;
    crumbSep.hidden = false;
    crumbParent.textContent = labels[parentIndex];
    (crumbParent as HTMLElement).dataset.href = hrefs[parentIndex];
    crumbParent.setAttribute('aria-label', 'Go to ' + labels[parentIndex]);
    crumbParent.title = 'Go to ' + labels[parentIndex];
  } else {
    crumbParent.hidden = true;
    crumbSep.hidden = true;
    crumbParent.removeAttribute('data-href');
  }

  // Ellipsis if we are 2+ levels deep above the shown parent
  const showEllipsis = chain.length > (isFolder ? 2 : 1);
  crumbEllipsis.hidden = !showEllipsis;
}

// Update prev/next controls (works for both leaf and folder pages)
function updatePrevNext(pathname: string) {
  if (!prevBtn || !nextBtn) return;
  const { siblings, index } = computeSiblings(pathname);
  const prev = index > 0 ? siblings[index - 1] : null;
  const next = index >= 0 && index < siblings.length - 1 ? siblings[index + 1] : null;

  if (prev) {
    prevBtn.disabled = false;
    (prevBtn as HTMLElement).dataset.href = prev.getAttribute('href') || '';
    prevBtn.title = 'Previous: ' + (prev.textContent || '').trim();
  } else {
    prevBtn.disabled = true;
    prevBtn.removeAttribute('data-href');
    prevBtn.title = 'No previous item';
  }
  if (next) {
    nextBtn.disabled = false;
    (nextBtn as HTMLElement).dataset.href = next.getAttribute('href') || '';
    nextBtn.title = 'Next: ' + (next.textContent || '').trim();
  } else {
    nextBtn.disabled = true;
    nextBtn.removeAttribute('data-href');
    nextBtn.title = 'No next item';
  }
}

function gotoHref(href: string) {
  const url = new URL(href, location.href);
  saveOpenSet();
  try { localStorage.setItem('vwz_nav_scroll', String((sidebar as HTMLElement)?.scrollTop || 0)); } catch {}
  // Preserve content scroll for current page before swapping
  saveMainScroll(location.pathname);
  swapTo(url.pathname + url.search + url.hash, { push: true });
}

function gotoChap(btn: HTMLButtonElement | null) {
  const href = btn?.dataset?.href;
  if (!href) return;
  gotoHref(href);
}

prevBtn?.addEventListener('click', () => gotoChap(prevBtn));
nextBtn?.addEventListener('click', () => gotoChap(nextBtn));
crumbParent?.addEventListener('click', () => {
  const href = (crumbParent as HTMLElement).dataset.href;
  if (href) gotoHref(href);
});

const LS_COLLAPSED = 'vwz_nav_collapsed';
const LS_SCROLL    = 'vwz_nav_scroll';
const LS_OPEN_SET  = 'vwz_nav_open_set';

function setBarHeightVar() {
  const h = sitebar?.offsetHeight || 48;
  document.documentElement.style.setProperty('--sitebar-h', h + 'px');
}
setBarHeightVar();
addEventListener('resize', setBarHeightVar);

try {
  const collapsed = localStorage.getItem(LS_COLLAPSED) === '1';
  if (app) {
    (app as HTMLElement).dataset.nav = collapsed ? 'closed' : 'open';
  }
  btn?.setAttribute('aria-expanded', String(!collapsed));
} catch {}

function isMobile() { return matchMedia('(max-width: 900px)').matches; }

function closeMobileOverlay() {
  if (!sidebar || !overlay || !app) return;
  (sidebar as HTMLElement).dataset.open = 'false';
  (overlay as HTMLElement).hidden = true;
  document.documentElement.style.overflow = '';
  btn?.setAttribute('aria-expanded', String((app as HTMLElement).dataset.nav !== 'closed'));
}

function toggleNav() {
  if (!sidebar || !app) return;
  if (isMobile()) {
    const open = (sidebar as HTMLElement).dataset.open !== 'true';
    (sidebar as HTMLElement).dataset.open = open ? 'true' : 'false';
    if (overlay) (overlay as HTMLElement).hidden = !open;
    document.documentElement.style.overflow = open ? 'hidden' : '';
    // When opening the drawer, restore last saved nav scroll
    if (open) {
      try {
        const y = parseInt(localStorage.getItem(LS_SCROLL) || '0', 10);
        if (!Number.isNaN(y)) (sidebar as HTMLElement).scrollTop = y;
      } catch {}
    }
    btn?.setAttribute('aria-expanded', String(open));
  } else {
    const nowClosed = (app as HTMLElement).dataset.nav !== 'closed';
    (app as HTMLElement).dataset.nav = nowClosed ? 'closed' : 'open';
    btn?.setAttribute('aria-expanded', String((app as HTMLElement).dataset.nav === 'open'));
    try { localStorage.setItem(LS_COLLAPSED, nowClosed ? '1' : '0'); } catch {}
  }
}

btn?.addEventListener('click', toggleNav);
overlay?.addEventListener('click', closeMobileOverlay);
scrollTopBtn?.addEventListener('click', () => {
  if (getMainIsScroller()) {
    main?.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});

// === Keyboard & pointer navigation (prev/next, scroll, ESC, mobile swipe) ===

type ScrollTarget = 'main' | 'sidebar';
let activeScrollTarget: ScrollTarget | null = null;

// Don't hijack keys while typing/editing
function isEditingTarget(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false;
  const tag = target.tagName;
  if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return true;
  if (target.isContentEditable) return true;
  return false;
}

// Decide which element we should scroll with Up/Down
function getActiveScrollContainer(): HTMLElement | Window {
  if (activeScrollTarget === 'sidebar' && sidebar) {
    return sidebar as HTMLElement;
  }
  // Default to main content if it scrolls, otherwise the window
  if (getMainIsScroller() && main) {
    return main;
  }
  return window;
}

// Inertial scroll state
let scrollVelocity = 0; // pixels per frame-ish
let scrollAnimationFrame: number | null = null;

// Start / boost an inertial scroll in a direction: 1 (down) or -1 (up)
function inertialScrollKick(direction: 1 | -1) {
  const STEP = 60;         // base "chunk" size; tweak to taste
  const MAX_VELOCITY = 4 * STEP; // cap so it doesn’t get wild

  scrollVelocity += STEP * direction;

  if (scrollVelocity > MAX_VELOCITY) scrollVelocity = MAX_VELOCITY;
  if (scrollVelocity < -MAX_VELOCITY) scrollVelocity = -MAX_VELOCITY;

  if (scrollAnimationFrame === null) {
    scrollAnimationFrame = window.requestAnimationFrame(inertialScrollStep);
  }
}

function inertialScrollStep() {
  const container = getActiveScrollContainer();

  if (container === window) {
    window.scrollBy(0, scrollVelocity);
  } else {
    (container as HTMLElement).scrollBy({ top: scrollVelocity });
  }

  // Strong damping: speeds up quickly, stops even faster
  scrollVelocity *= 0.68; // lower = snappier; higher = floatier

  // Tiny threshold so it doesn’t micro-wiggle at the end
  if (Math.abs(scrollVelocity) < 0.5) {
    scrollVelocity = 0;
    scrollAnimationFrame = null;
    return;
  }

  scrollAnimationFrame = window.requestAnimationFrame(inertialScrollStep);
}


// Track where the user last clicked (main vs sidebar)
document.addEventListener('mousedown', (e) => {
  const target = e.target as Node | null;
  if (!target) return;

  if (sidebar && sidebar.contains(target)) {
    activeScrollTarget = 'sidebar';
  } else if (main && main.contains(target)) {
    activeScrollTarget = 'main';
  }
});

// --- Mobile swipe for prev/next (horizontal on main content) ---

let swipeStartX = 0;
let swipeStartY = 0;
let swipeStartTime = 0;
let swipeFromMain = false;

document.addEventListener('touchstart', (e) => {
  const target = e.target as Node | null;
  if (!target) return;

  const inSidebar = !!(sidebar && sidebar.contains(target));
  const inMain    = !!(main && main.contains(target));

  if (inSidebar) activeScrollTarget = 'sidebar';
  else if (inMain) activeScrollTarget = 'main';

  if (!isMobile()) return;
  if (e.touches.length !== 1) return;

  const t = e.touches[0];
  swipeStartX = t.clientX;
  swipeStartY = t.clientY;
  swipeStartTime = Date.now();
  swipeFromMain = inMain;
}, { passive: true });

document.addEventListener('touchend', (e) => {
  if (!isMobile()) return;
  if (!swipeStartTime) return;
  if (e.changedTouches.length !== 1) {
    swipeStartTime = 0;
    return;
  }

  const t = e.changedTouches[0];
  const dx = t.clientX - swipeStartX;
  const dy = t.clientY - swipeStartY;
  const dt = Date.now() - swipeStartTime;
  swipeStartTime = 0;

  // Only treat as a horizontal swipe starting from main content
  if (!swipeFromMain) return;

  const absDx = Math.abs(dx);
  const absDy = Math.abs(dy);
  const MIN_SWIPE_DISTANCE = 50;
  const MAX_SWIPE_TIME = 600;

  if (dt > MAX_SWIPE_TIME) return;
  if (absDx < MIN_SWIPE_DISTANCE) return;
  if (absDx <= absDy) return;

  // dx > 0 = swipe right (previous), dx < 0 = swipe left (next)
  if (dx > 0 && prevBtn && !prevBtn.disabled) {
    prevBtn.click();
  } else if (dx < 0 && nextBtn && !nextBtn.disabled) {
    nextBtn.click();
  }
}, { passive: true });

// --- Keyboard handling: ESC toggle, prev/next, scroll ---

window.addEventListener('keydown', (e: KeyboardEvent) => {
  // If some other handler already cancelled this, bail
  if (e.defaultPrevented) return;

  // Don't mess with keys while typing/editing
  if (isEditingTarget(e.target)) return;

  // ESC: toggle the nav (desktop + mobile hamburger)
  if (e.key === 'Escape') {
    if (app) {
      toggleNav(); // internally knows how to handle mobile vs desktop
    }
    return;
  }

  // Left / Right arrows -> prev / next buttons if available
  if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
    if (e.key === 'ArrowLeft' && prevBtn && !prevBtn.disabled) {
      e.preventDefault();
      prevBtn.click();
    } else if (e.key === 'ArrowRight' && nextBtn && !nextBtn.disabled) {
      e.preventDefault();
      nextBtn.click();
    }
    return;
  }

  // Up / Down arrows -> inertial scroll last active area (main or sidebar)
  if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
    const direction = e.key === 'ArrowDown' ? 1 : -1;
    e.preventDefault();
    inertialScrollKick(direction);
  }
});

function saveSidebarScroll() {
  try { localStorage.setItem(LS_SCROLL, String((sidebar as HTMLElement)?.scrollTop || 0)); } catch {}
}
sidebar?.addEventListener('scroll', () => requestAnimationFrame(saveSidebarScroll));
(function restoreSidebarScroll() {
  try {
    const y = parseInt(localStorage.getItem(LS_SCROLL) || '0', 10);
    if (!Number.isNaN(y) && sidebar) (sidebar as HTMLElement).scrollTop = y;
  } catch {}
})();

function collectOpenSet() {
  const set = new Set<string>();
  if (!sidebar) return Array.from(set);
  sidebar.querySelectorAll('details.tree-item').forEach(det => {
    const key = det.getAttribute('data-key') || det.querySelector('a.nav-link')?.getAttribute('href') || '';
    if (key && (det as HTMLDetailsElement).open) set.add(key);
  });
  return Array.from(set);
}
function saveOpenSet() {
  try { localStorage.setItem(LS_OPEN_SET, JSON.stringify(collectOpenSet())); } catch {}
}
sidebar?.addEventListener('toggle', (ev) => {
  if (ev.target instanceof HTMLDetailsElement) saveOpenSet();
}, true);

// Collapse all folders in the nav at once
function collapseAllFolders() {
  if (!sidebar) return;
  sidebar.querySelectorAll('details.tree-item[open]').forEach((det) => {
    (det as HTMLDetailsElement).open = false;
  });
  saveOpenSet(); // persist the fully-collapsed state
}

collapseNavBtn?.addEventListener('click', () => {
  collapseAllFolders();
});
sidebar?.addEventListener('toggle', (ev) => {
  if (ev.target instanceof HTMLDetailsElement) saveOpenSet();
}, true);

(function restoreOpenSet() {
  if (!sidebar) return;
  try {
    const arr = JSON.parse(localStorage.getItem(LS_OPEN_SET) || '[]');
    if (Array.isArray(arr)) {
      sidebar.querySelectorAll('details.tree-item').forEach(det => {
        const key = det.getAttribute('data-key') || det.querySelector('a.nav-link')?.getAttribute('href') || '';
        if (key && arr.includes(key)) (det as HTMLDetailsElement).open = true;
      });
    }
  } catch {}
})();

function setCurrent(pathname: string) {
  if (!sidebar) return;
  sidebar.querySelector('[aria-current="page"]')?.removeAttribute('aria-current');
  const next = anchorForPath(pathname);
  next?.setAttribute('aria-current', 'page');
  let p = next?.closest('details.tree-item') as HTMLDetailsElement | null;
  while (p) {
    p.open = true;
    p = p.parentElement?.closest('details.tree-item') as HTMLDetailsElement | null;
  }
  saveOpenSet();
}

history.scrollRestoration = 'manual';

async function swapTo(url: string, { push = true }: { push?: boolean } = {}) {
  try {
    const res = await fetch(url, { headers: { 'X-Requested-With': 'fetch' } });
    const html = await res.text();
    const doc = new DOMParser().parseFromString(html, 'text/html');
    const newMain = doc.getElementById('content');
    const newTitle = doc.querySelector('title')?.textContent || document.title;
    if (!newMain) { location.href = url; return; }

    if (!main) {
      main = newMain;
    } else {
      main.replaceWith(newMain);
      main = newMain;
    }
    attachMainScrollHandlers();

    document.title = newTitle;
    if (push) history.pushState({}, '', url);

    {
      const urlObj = new URL(url, location.href);
      requestAnimationFrame(() => {
        if (urlObj.hash && main?.querySelector(urlObj.hash)) {
          main!.querySelector(urlObj.hash)?.scrollIntoView({ block: 'start' });
        } else {
          restoreMainScroll(urlObj.pathname);
        }
      });
    }

    const { pathname } = new URL(url, location.href);
    setCurrent(pathname);
    updatePrevNext(pathname);
    updateCrumbs(pathname);
    closeMobileOverlay();
  } catch {
    location.href = url;
  }
}

sidebar?.addEventListener('click', (e) => {
  const target = e.target as Element | null;
  const a = target instanceof Element && target.closest('a.nav-link') as HTMLAnchorElement | null;
  if (!a) return;
  if (a.target && a.target !== '_self') return;
  if (e instanceof MouseEvent) {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
  }
  const url = new URL(a.getAttribute('href') || a.href, location.href);
  if (url.origin !== location.origin) return;

  e.preventDefault();
  try { localStorage.setItem('vwz_nav_scroll', String((sidebar as HTMLElement).scrollTop)); } catch {}
  saveOpenSet();
  // preserve current page scroll before navigating
  saveMainScroll(location.pathname);
  swapTo(url.pathname + url.search + url.hash, { push: true });
});

window.addEventListener('popstate', () => {
  swapTo(location.href, { push: false });
});

// Init
setCurrent(location.pathname);
updatePrevNext(location.pathname);
updateCrumbs(location.pathname);
attachMainScrollHandlers();
restoreMainScroll(location.pathname);
