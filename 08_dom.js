// ? DOM

const heading = document.getElementById('hello')
const heading2 = document.getElementsByTagName('h2')[0]   // лучше не пользоваться, он медленный
const heading2 = document.getElementsByClassName('h2-class')
const heading2 = document.querySelector('.h2-class')
const heading2 = document.querySelector('#sub-id')   // всегда выдает 1 элемент

const heading3 = heading2.nextElementSibling   // получаем доступ к элементу после heading2
console.log(heading3)

console.dir(heading.textContent)   // доступ к тексту Hello, World!

heading.textContent = 'Changed from JavaScript!' 
heading.style.color = 'red'
heading.style.textAlign = 'center'

// изменение текста и стилей через 1.5 сек

setTimeout(() => {
	heading.textContent = 'Changed from JavaScript!' 
	heading.style.color = 'red'
	heading.style.textAlign = 'center'
}, 1500)

// Более универсальный вариант того, что выше

setTimeout(() => {
	addStylesTo(heading, 'JavaScript')
}, 1500)

const link = heading3.querySelector('a')
link.addEventListener('click', (event) => {
	event.preventDefault()   // отменяем стандартое отрабатывание ссылки
	
	console.log('Click on click', event.target.getAttribute('href'))
	const url = event.target.getAttribute('href')

	window.location = url
})

setTimeout(() => {
	addStylesTo(link, 'Практикуйся', 'yellow')   // добераемся до a href
}, 3000)

setTimeout(() => {
	addStylesTo(heading2, 'И все получится!', 'blue', '2rem')
}, 4500)

function addStylesTo(node, text, color = 'red', fontSize) {
	node.textContent = text
	node.style.color = color
	node.style.backgroundColor = 'black'
	node.style.textAlign = 'center'
	node.style.display = 'block'
	node.style.width = '100%'

	// falsy: '', undefined, null, 0, false
	// такая проверка спрашивает если fontSize не falsy
	if (fontSize) {
		node.style.fontSize = fontSize
	}
}

// смена цвета при клике

heading.onclick = () => {
	if (heading.style.color === 'red') {
		heading.style.color = '#000'
		heading.style.backgroundColor = '#fff'
	} else {
		heading.style.color = 'red'
		heading.style.backgroundColor = '#000'
	}
}

// другой способ

heading2.addEventListener('dblclick', () => {
	if (heading2.style.color === 'yellow') {
		heading2.style.color = '#000'
		heading2.style.backgroundColor = '#fff'
	} else {
		heading2.style.color = 'yellow'
		heading2.style.backgroundColor = '#000'
	}
})