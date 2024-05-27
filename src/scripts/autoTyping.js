const text = [
	"Разработка сайтов",
	"Создание дизайна",
	"Сайты под ключ"
]


const title = document.querySelector('.main__title')
function startTyping() {
	const writing = function(text, writeSpeed = 100) {
		let i = 0
	
		title.classList.add('typing')
	
		let interval = setInterval(() => {
			if (i === text.length) {
				clearInterval(interval)
				title.classList.remove('typing') 
				let words = title.textContent.split(' ')
				title.innerHTML = words.map(word => 
					word === words[words.length - 1] ? 
					`<span class="highlight">${word}</span>` : word
				).join(' ')
				return
			}
	
			title.textContent += text[i]
			i++
		}, writeSpeed)
	}


	let text_index = 0
	const delay = 5000

	title.textContent = text[text_index]

	setInterval(() => {
		writing(text[text_index])
		title.textContent = ''
		if (text_index === text.length - 1) { text_index = 0 }
		else { text_index++ }
	}, delay)
}

document.addEventListener('DOMContentLoaded', startTyping)