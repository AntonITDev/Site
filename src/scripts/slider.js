const projectsList = [
	{
		"title": "WeatherWidget",
		"description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, ab!",
		"link": "https://antonitdev.github.io/WeatherWidget/WeatherWidget/",
		"photo": "./src/images/projects/weatherWidget.png"
	},
	{
		"title": "WeatherWidget2",
		"description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, ab!",
		"link": "https://antonitdev.github.io/WeatherWidget/WeatherWidget/",
		"photo": "./src/images/projects/weatherWidget.png"
	},
	{
		"title": "WeatherWidget3",
		"description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, ab!",
		"link": "https://antonitdev.github.io/WeatherWidget/WeatherWidget/",
		"photo": "./src/images/projects/weatherWidget.png"
	}
]

const projectPhoto = document.querySelector('.project__photo')
const projectInfoTitleLink = document.querySelector('.project__info__title a')
const projectInfoDescription = document.querySelector('.project__info__description')
const buttonNextProject = document.querySelector('.button__next')
const buttonPreviousProject = document.querySelector('.button__pre')

let currentProjectIndex = 0

const updateProject = function() {
	const project = projectsList[currentProjectIndex]
	projectPhoto.src = project['photo']
	projectPhoto.alt = `project photo ${currentProjectIndex + 1}`
	projectInfoTitleLink.href = project['link']
	projectInfoTitleLink.textContent = project['title']
	projectInfoDescription.textContent = project['description']
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