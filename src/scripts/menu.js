const buttonOpenMenu = document.querySelector('.button__open-menu')
const menuElement = document.querySelector('.menu')

buttonOpenMenu.addEventListener('click', (event)=> {
	if (!menuElement.classList.contains('open')) {
		menuElement.classList.add('open')
	} else {
		menuElement.classList.remove('open')
	}
})