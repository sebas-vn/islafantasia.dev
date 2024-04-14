(() => {
  "use strict";

  let theme = localStorage.getItem("theme");
  let matchesMedia = window.matchMedia("(prefers-color-scheme: dark)");
  if (!theme && window.matchMedia && matchesMedia) {
    theme = "dark";
  }

  if (!theme || (theme !== "light" && theme !== "dark")) {
    theme = "light";
  }

  setTheme(theme);

  let themeButton = document.querySelector(".theme-button");
  themeButton.addEventListener("click", () => {
    let theme = localStorage.getItem("theme");
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  });
})();

function setTheme(theme) {
  localStorage.setItem("theme", theme);

  const body = document.querySelector("body");
  body.classList.remove("light", "dark");
  body.classList.add(theme);
}
