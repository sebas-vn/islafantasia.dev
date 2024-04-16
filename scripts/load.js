(() => {
	// load default style first if prefers-color-scheme is not supported
	if (window.matchMedia('(prefers-color-scheme)').media === 'not all') {
		document.documentElement.style.display = 'none';
		document.head.insertAdjacentHTML(
			`beforeend`,
			`<link rel="stylesheet" href="styles/dark.css" 
				onload="document.documentElement.style.display=''">`
		)
	}
})()