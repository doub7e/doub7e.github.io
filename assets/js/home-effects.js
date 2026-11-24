(() => {
  const hero = document.querySelector(".home-hero");
  const toggle = hero?.querySelector(".home-effects-toggle");
  if (!toggle) return;

  const key = "home-effects";
  const motion = window.matchMedia("(prefers-reduced-motion: no-preference) and (hover: hover) and (pointer: fine)");
  let enabled = true;
  let frame = null;
  let x = 0;
  let y = 0;

  function resetLight() {
    if (frame !== null) window.cancelAnimationFrame(frame);
    frame = null;
    hero.style.removeProperty("--home-light-x");
    hero.style.removeProperty("--home-light-y");
  }

  function applyPreference() {
    hero.dataset.effects = enabled ? "on" : "off";
    toggle.setAttribute("aria-checked", String(enabled));
    if (!enabled) resetLight();
  }

  try {
    enabled = window.localStorage.getItem(key) !== "off";
  } catch {
    // The switch still works for this page when storage is unavailable.
  }
  applyPreference();
  toggle.hidden = false;

  toggle.addEventListener("click", () => {
    enabled = !enabled;
    applyPreference();
    try {
      window.localStorage.setItem(key, enabled ? "on" : "off");
    } catch {
      // Keep the current choice in memory.
    }
  });

  hero.addEventListener(
    "pointermove",
    (event) => {
      if (!enabled || !motion.matches || event.pointerType === "touch") return;
      x = event.clientX;
      y = event.clientY;
      if (frame !== null) return;
      frame = window.requestAnimationFrame(() => {
        frame = null;
        const bounds = hero.getBoundingClientRect();
        hero.style.setProperty("--home-light-x", `${((x - bounds.left) / bounds.width - 0.5) * 28}px`);
        hero.style.setProperty("--home-light-y", `${((y - bounds.top) / bounds.height - 0.5) * 18}px`);
      });
    },
    { passive: true }
  );
  hero.addEventListener("pointerleave", resetLight);
  motion.addEventListener("change", resetLight);
})();
