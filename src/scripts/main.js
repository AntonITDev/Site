function setActiveLink() {
	const pageLinks = document.querySelectorAll('.menu__link')
	pageLinks.forEach(link => {
		if (link.href == window.location.href) {
			link.classList.add('active')
			return
		}
	})
}

document.addEventListener('DOMContentLoaded', ()=> {
	document.querySelectorAll('a[data-disabled="true"]').forEach(link => { link.onclick = null })
	setActiveLink()
})

