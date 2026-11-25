(() => {
  const root = document.documentElement;
  const button = document.querySelector(".winter-light-toggle");
  const scene = document.querySelector(".winter-light-scene");
  if (!button || !scene) return;

  const key = "site:winter-light";
  let enabled = true;
  try {
    enabled = localStorage.getItem(key) !== "off";
  } catch {
    // The switch still works when storage is unavailable.
  }

  function update() {
    root.classList.toggle("winter-light-active", enabled);
    button.setAttribute("aria-pressed", String(enabled));
  }

  update();
  button.hidden = false;
  button.addEventListener("click", () => {
    enabled = !enabled;
    update();
    try {
      localStorage.setItem(key, enabled ? "on" : "off");
    } catch {
      // Retain the choice for this visit.
    }
  });

  if ("IntersectionObserver" in window) {
    new IntersectionObserver(([entry]) => {
      scene.classList.toggle("winter-light-out-of-view", !entry.isIntersecting);
    }).observe(scene);
  }
})();
