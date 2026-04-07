const THEME_KEY = "jamnutz-theme";
const rootEl = document.documentElement;

const getPreferredTheme = () => {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved === "dark" || saved === "light") return saved;
  return window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const setTheme = (theme) => {
  rootEl.setAttribute("data-theme", theme);
  localStorage.setItem(THEME_KEY, theme);
  document.querySelectorAll(".theme-toggle").forEach((button) => {
    button.setAttribute(
      "aria-label",
      theme === "dark" ? "Switch to light mode" : "Switch to dark mode",
    );
    button.innerHTML =
      theme === "dark"
        ? `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4.5"></circle><path d="M12 2.5v2.2M12 19.3v2.2M4.7 4.7l1.6 1.6M17.7 17.7l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.7 19.3l1.6-1.6M17.7 6.3l1.6-1.6"></path></svg>`
        : `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.2 14.1A8.5 8.5 0 1 1 9.9 3.8a6.9 6.9 0 0 0 10.3 10.3z"></path></svg>`;
  });
};

setTheme(getPreferredTheme());

const current = document.body.dataset.page || "";
const root = document.body.dataset.root || "";
const navItems = [
  ["index.html", "HOME", "home"],
  ["apps.html", "APPS", "apps"],
];

const withRoot = (path) => `${root}${path}`;

const toggleTheme = () =>
  setTheme(rootEl.getAttribute("data-theme") === "dark" ? "light" : "dark");

const genericThemeStyle = document.createElement("style");
genericThemeStyle.textContent = `
  .theme-toggle.theme-floating {
    position: fixed;
    top: 14px;
    right: 18px;
    z-index: 9999;
  }
  html[data-theme="dark"] body {
    background-color: #0f0f10 !important;
    color: #f5f5f7 !important;
  }
  html[data-theme="dark"] .back-link,
  html[data-theme="dark"] .back-to-apps,
  html[data-theme="dark"] .app-link,
  html[data-theme="dark"] .nav a,
  html[data-theme="dark"] .logo,
  html[data-theme="dark"] h1,
  html[data-theme="dark"] h2,
  html[data-theme="dark"] h3,
  html[data-theme="dark"] label,
  html[data-theme="dark"] .window-title,
  html[data-theme="dark"] .window-title * {
    color: #f5f5f7 !important;
  }
  html[data-theme="dark"] .container,
  html[data-theme="dark"] .synth-container,
  html[data-theme="dark"] #soundscape,
  html[data-theme="dark"] .app-page-header,
  html[data-theme="dark"] .app-topbar {
    border-color: #f5f5f7 !important;
    box-shadow: none !important;
  }
`;
document.head.appendChild(genericThemeStyle);

const createThemeToggle = () => {
  const button = document.createElement("button");
  button.className = "theme-toggle";
  button.type = "button";
  button.addEventListener("click", toggleTheme);
  return button;
};

const header = document.getElementById("site-header");
if (header) {
  header.innerHTML = `
    <header class="site-header" id="header-shell">
      <div class="container header-inner">
        <a class="brand" href="${withRoot("index.html")}" aria-label="Jamnutz home">
          <img src="${withRoot("assets/images/jamnutzicon.png")}" alt="Jamnutz icon" class="logo-light" style="height: 52px; width: 52px; margin-right: 10px;">
          <img src="${withRoot("assets/images/jamnutzwhite.png")}" alt="Jamnutz icon" class="logo-dark" style="height: 52px; width: 52px; margin-right: 10px;">
          <span>JAMNUTZ</span>
        </a>
        <div class="header-tools">
          <button class="nav-toggle" type="button" aria-label="Open menu" id="nav-toggle">
            <span></span><span></span><span></span>
          </button>
          <button class="theme-toggle" type="button" aria-label="Toggle theme"></button>
        </div>
        <nav class="primary-nav" aria-label="Primary navigation">
          ${navItems.map(([href, label, key]) => `<a href="${withRoot(href)}" class="${current === key ? "active" : ""}">${label}</a>`).join("")}
        </nav>
      </div>
    </header>`;

  const headerThemeToggle = header.querySelector(".theme-toggle");
  if (headerThemeToggle) {
    headerThemeToggle.addEventListener("click", toggleTheme);
  }

  const shell = document.getElementById("header-shell");
  const toggle = document.getElementById("nav-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => shell.classList.toggle("open"));
  }
}

const footer = document.getElementById("site-footer");
if (footer) {
  const showDonate =
    current === "home" ||
    current === "portfolio" ||
    current === "apps" ||
    current === "games" ||
    current === "music" ||
    current === "videos" ||
    current === "plugins";

  footer.innerHTML = showDonate
    ? `
    <footer class="site-footer">
      <div class="container" style="display: flex; justify-content: center; padding: 40px 0 60px;">
        <a
          href="https://www.patreon.com/cw/jadewii/membership"
          style="display: inline-flex; align-items: center; justify-content: center; padding: 12px 28px; font-weight: 600; text-decoration: none; color: #fff; background: #111; border-radius: 999px; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.05em; transition: 0.2s ease;"
          target="_blank"
          rel="noopener noreferrer"
        >donate</a>
      </div>
    </footer>`
    : "";
}

if (!document.querySelector("#site-header .theme-toggle")) {
  const appHeader = document.querySelector(".app-page-header");
  if (appHeader && !appHeader.querySelector(".theme-toggle")) {
    appHeader.appendChild(createThemeToggle());
  }

  const appTopbar = document.querySelector(".app-topbar");
  if (appTopbar && !appTopbar.querySelector(".theme-toggle")) {
    appTopbar.appendChild(createThemeToggle());
  }

  const nav = document.querySelector(".nav");
  if (nav && !nav.querySelector(".theme-toggle")) {
    const navRight =
      nav.lastElementChild && nav.children.length > 1
        ? nav.lastElementChild
        : nav;
    const wrap = document.createElement("div");
    wrap.style.display = "flex";
    wrap.style.alignItems = "center";
    wrap.style.gap = "14px";
    while (navRight.firstChild) wrap.appendChild(navRight.firstChild);
    wrap.appendChild(createThemeToggle());
    navRight.appendChild(wrap);
  }

  if (!document.querySelector(".theme-toggle")) {
    const floatingToggle = createThemeToggle();
    floatingToggle.classList.add("theme-floating");
    document.body.appendChild(floatingToggle);
  }
}

setTheme(rootEl.getAttribute("data-theme") || getPreferredTheme());
