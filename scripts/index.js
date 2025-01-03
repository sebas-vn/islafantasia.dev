(() => {
	"use strict";

	let theme = localStorage.getItem("theme");
	let matchesMedia = window.matchMedia("(prefers-color-scheme: dark)");

	let profile = document.querySelector('.avatar-sm');

	if (profile != null) {
		profile.addEventListener("click", () => {
			let sidebar = document.querySelector('.sidebar');
			sidebar.style.display = 'flex';
		})
	}

	if (theme === null) {
		if (matchesMedia.matches) {
			theme = "dark";
		} else {
			theme = 'light';
		}
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
	console.log(theme);
	let btn = document.querySelector(".theme-button");
	localStorage.setItem("theme", theme);

	const body = document.querySelector(":root");
	body.classList.remove("light", "dark", "os-default");
	body.classList.add(theme);
	btn.innerText = `${theme === 'light' ? 'dark' : 'light'}_mode`;
}


