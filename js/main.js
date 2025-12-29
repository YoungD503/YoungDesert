const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// ==========================
// Theme: Dark + Green Toggle
// ==========================
(function initTheme(){
  const root = document.documentElement;
  const toggle = document.getElementById("themeToggle");

  // Load saved theme
  const saved = localStorage.getItem("yd_theme");
  if (saved === "dark") root.setAttribute("data-theme", "dark");

  // Optional: if nothing saved, follow system
  if (!saved) {
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (prefersDark) root.setAttribute("data-theme", "dark");
  }

  function setIcon(){
    const isDark = root.getAttribute("data-theme") === "dark";
    if (toggle) toggle.textContent = isDark ? "☀️" : "🌙";
  }
  setIcon();

  if (toggle) {
    toggle.addEventListener("click", () => {
      const isDark = root.getAttribute("data-theme") === "dark";
      if (isDark) {
        root.removeAttribute("data-theme");
        localStorage.setItem("yd_theme", "light");
      } else {
        root.setAttribute("data-theme", "dark");
        localStorage.setItem("yd_theme", "dark");
      }
      setIcon();
    });
  }
})();
