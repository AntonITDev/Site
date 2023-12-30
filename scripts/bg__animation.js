for(let i = 1; i <= 7; i++) {
	const triangle = document.createElement('img')
	triangle.src = i % 2 == 0 ? "/images/triangle_purple.svg" : "/images/triangle_green.svg"
	triangle.classList.add('bg__triangle', `bg__triangle_${i}`)

	document.body.insertAdjacentElement("afterbegin", triangle)
}


const triangles = document.querySelectorAll('.bg__triangle')
document.body.addEventListener('mousemove', e => {
	let x = e.clientX / window.innerWidth;
	let y = e.clientY / window.innerHeight;
	let speed = 40;

	triangles.forEach(item => {
		item.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
	})
})
