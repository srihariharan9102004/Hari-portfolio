// Scrolls so a section's heading lands just below the fixed navbar —
// exactly, every time.
//
// Three things make a plain "#anchor" jump (or a one-shot scrollTo) miss:
//  1. On phones the menu is still OPEN when a link is tapped, so the
//     navbar measures hundreds of pixels tall. We therefore measure only
//     the top bar (logo + buttons row), never the open menu.
//  2. Scroll-reveal elements start 50px lower until they animate in.
//  3. Images / videos / cards above the target can change height while
//     the smooth scroll is still running.
// So after starting the scroll we keep re-measuring until the page has
// stopped moving, and nudge it onto the exact spot if it's off.

let activeToken = 0;

function topBarHeight() {
  const nav = document.querySelector(".main-navbar");
  if (!nav) return 70;
  let bottom = 0;
  nav.querySelectorAll(".navbar-brand, .custom-toggler, .mode-toggle-btn").forEach((el) => {
    if (el.offsetParent === null) return; // hidden at this screen size
    bottom = Math.max(bottom, el.getBoundingClientRect().bottom);
  });
  // nav is fixed at the very top of the viewport, so `bottom` is the row's
  // height from the top edge; add the nav's own bottom padding.
  const pad = parseFloat(getComputedStyle(nav).paddingBottom) || 0;
  return Math.round(bottom + Math.max(pad, 8));
}

export function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return false;

  const token = ++activeToken;
  const gap = 22;

  const targetTop = () => {
    if (id === "Home") return 0;
    const heading = el.querySelector("h1, h2, h3, .section-title");
    const ref = heading || el;
    const top = ref.getBoundingClientRect().top + window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    return Math.min(Math.max(Math.round(top - topBarHeight() - gap), 0), Math.max(max, 0));
  };

  window.scrollTo({ top: targetTop(), behavior: "smooth" });
  if (id === "Home") return true;

  // Stop correcting the moment the person scrolls by themselves.
  let cancelled = false;
  const cancel = () => { cancelled = true; };
  window.addEventListener("wheel", cancel, { once: true, passive: true });
  window.addEventListener("touchmove", cancel, { once: true, passive: true });

  let lastY = window.scrollY;
  let still = 0;
  let corrections = 0;
  const started = Date.now();

  const poll = () => {
    if (cancelled || token !== activeToken || Date.now() - started > 5000) return;

    const y = window.scrollY;
    still = Math.abs(y - lastY) < 1 ? still + 1 : 0;
    lastY = y;

    // The page has stopped moving: is it on the exact spot?
    if (still >= 2) {
      const want = targetTop();
      if (Math.abs(y - want) > 2 && corrections < 4) {
        corrections += 1;
        still = 0;
        window.scrollTo({ top: want, behavior: "smooth" });
      } else {
        return; // landed exactly (or gave up after 4 nudges)
      }
    }
    setTimeout(poll, 120);
  };
  setTimeout(poll, 150);
  return true;
}
