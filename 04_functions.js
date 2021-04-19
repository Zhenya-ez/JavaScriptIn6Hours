// ? Functions

// ? 1 Function Declaration
// Ее можно вызывать выше ее создания

greet('Лена')

function greet(name) {
	console.log('Привет -', name)
}

// ? 2 Function Expression
// Ее нельзя вызывать выше ее создания

greet2('Лена')   // err

const greet2 = function(name) {
	console.log('Привет 2 -', name)
}

// ? 3 Анонимные функции

let counter = 0
const interval = setInterval(function() {
	if (counter === 5) {
		clearInterval(interval)
	} else {
		console.log(++counter)
	}
}, 1000)

// ? 4 Стрелочные функции

const arrow = (name) => {
	console.log('Привет - ', name)
}

// Тоже самое, но сокращенный вариант, можно использовать если 1 условие

const arrow = name => console.log('Привет - ', name)
arrow('Vladilen')

// Функция которая возводит в 2 степень

const pow2 = num => num ** 2
console.log(pow2(5))

// ? 5 Параметры по умолчанию

// 40, а * 2 будут по умолчанию, если введем другие значения, то эти сотрутся

const sum = (a = 40, b = a * 2) => a + b

console.log(sum())   // 120
console.log(sum(41, 4))   // 45

// Сумирует все числа

function sumAll(...all) {
	let result = 0
	for (let num of all) {
		result += num
	}
	return result
}

const res = sumAll(1, 2, 3, 4)
console.log(res)

// ? 6 Замыкания

// Для создания приватных переменных
// Никак не можем получить доступ к name

function createMember(name) {
	return function(lastName) {
		console.log(name + lastName)
	}
}

const logWithLastName = createMember('Vladilen')
console.log(logWithLastName('Minin'))
console.log(logWithLastName('Kuznecov'))