document.addEventListener('DOMContentLoaded', ()=> {
	if (window.innerWidth <= 1440) {return}
	if (!matchMedia('(pointer:fine)').matches) {return}

	let i = 0
	for(let i = 1; i <= 10; i++) {
		const triangle = document.createElement('img')

		if (window.location.href.split('/')[3] != "index.html") {
			triangle.src = (i % 2 == 0) ? "../images/triangle_purple.svg" : "../images/triangle_green.svg"
		} else {
			triangle.src = (i % 2 == 0) ? "./src/images/triangle_purple.svg" : "./src/images/triangle_green.svg"
		}
		triangle.classList.add('bg__triangle', `bg__triangle_${i}`)
	
		document.body.insertAdjacentElement("afterbegin", triangle)
	}
	
	
	const triangles = document.querySelectorAll('.bg__triangle')
	triangles.forEach(item => {
		item.style.left = `${Math.random() * ((1000+i) - 100) + 100}px`;
		item.style.top = `${Math.random() * ((200+i) - 100) + 100}px`;
		i += 100;
	})
})

