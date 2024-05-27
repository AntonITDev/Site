const projectsList = [
	{
		"title": "Виджет погоды",
		"description": "Виджет погоды на чистом JS с использованием OpenWeatherMap API",
		"link": "https://antonitdev.github.io/WeatherWidget/WeatherWidget/",
		"fit": "cover",
		"functional": [
			"JavaScript",
			"CSS",
			"HTML",
			"<b>API</b>"
		],
		"photo": "../images/projects/weatherWidget.png"
	},
	{
		"title": "ReactClicker",
		"description": "Игра \"Кликер\" на React с использованием библиотеки Material UI",
		"link": "https://antonitdev.github.io/react-clicker/",
		"fit": "contain",
		"functional": [
			"JavaScript",
			"CSS",
			"HTML",
			"<b>React</b>",
			"Material UI",
		],
		"photo": "../images/projects/clickerReact.png"
	},
]

const projectPhoto = document.querySelector('.project__photo')
const project__photo_link = document.querySelector('.project__photo_link')
const projectInfoTitleLink = document.querySelector('.project__info__title a')
const projectInfoDescription = document.querySelector('.project__info__description')
const projectInfoFunctional = document.querySelector('.projectInfoFunctional')
const buttonNextProject = document.querySelector('.button__next')
const buttonPreviousProject = document.querySelector('.button__pre')

let currentProjectIndex = 0

const updateProject = function() {
	const project = projectsList[currentProjectIndex]

	projectPhoto.src = project['photo']
	projectPhoto.alt = `project photo ${currentProjectIndex + 1}`
	projectPhoto.style.objectFit = project['fit']
	project__photo_link.href = project['link']
	projectPhoto.alt = project['title']
	projectInfoTitleLink.href = project['link']
	projectInfoTitleLink.textContent = project['title']
	projectInfoDescription.textContent = project['description']

	projectInfoFunctional.innerHTML = ''

	for (let i = 0; i < project['functional'].length; i++) {
		projectInfoFunctional.insertAdjacentHTML('beforeend', `<li>${project['functional'][i]}</li>`)
	}
}

updateProject()

const nextProject = function() {
	if (currentProjectIndex < projectsList.length - 1) {
		currentProjectIndex++;
		updateProject()
	}	
}

const previousProject = function() {
	if (currentProjectIndex > 0) {
		currentProjectIndex--;
		updateProject()
	}
}

buttonNextProject.addEventListener('click', nextProject)

buttonPreviousProject.addEventListener('click', previousProject)
