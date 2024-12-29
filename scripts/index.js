(() => {
	"use strict";

	let theme = localStorage.getItem("theme");
	let matchesMedia = window.matchMedia("(prefers-color-scheme: dark)");
	if (!theme && window.matchMedia && matchesMedia) {
		theme = "dark";
	} else {
		theme = 'light';
	}

	let themeButton = document.querySelector(".theme-button");
	themeButton.addEventListener("click", () => {
		let theme = localStorage.getItem("theme");

		if (theme === "light") {
			setTheme("dark");
		} else {
			setTheme("light");
		}
	});
	
	setTheme(theme);
})();

function setTheme(theme) {
	let btn = document.querySelector(".theme-button");
	localStorage.setItem("theme", theme);

	const body = document.querySelector(":root");
	body.classList.remove("light", "dark", "os-default");
	body.classList.add(theme);
	btn.innerText = `${theme === 'light' ? 'dark' : 'light'}_mode`;
}


