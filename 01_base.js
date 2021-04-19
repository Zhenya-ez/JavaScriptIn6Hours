// ? 1 Переменные
// camelCase

const firstName = 'Vladilen'   // string
const age = 27   // number
const isProgrammer = true   // boolean

const _ = 'private'
const $ = 'some value'
// const if = 'mkef'   // err
const withNum5 = 5
// const 5withNum = 5   // err

// ? 2 Мутирование

console.log('Имя человека: ' + firstName + ', а возраст человека: ' + age)
alert('Имя человека: ' + firstName + ', а возраст человека: ' + age)

const lastName = prompt('введите фамилию')
alert('фамилия: ' + lastName + ' имя: ' + firstName)

// ? 3 Операторы

let currentYear = 2021
const birthYear = 1988

const age = currentYear - birthYear
console.log(age)

console.log(currentYear++)   // 2021
console.log(currentYear)   // 2022

console.log(++currentYear)   // 2022
console.log(--currentYear)   // 2021

const a = 10
const b = 5
let c = 32

c = c + a   // 42
c += a   // тоже самое 42
console.log(c)

с -= a   // 22
с *= a   // 320
с /= a   // 3.2

// ? 4 Типы данных

const isProgrammer = true   // boolean
const name = 'Vladilen'   // string
const age = 27   // number
let x   // undefined

// 5 примитивных типов данных

console.log(typeof isProgrammer)   // bolean
console.log(typeof name)   // string
console.log(typeof age)   // number
console.log(typeof x)   // undefined
console.log(null)   // null

// ? 5 Приоритет операторов

const fullAge = 32
const birthYear = 1988
const currentYear = 2021
const isFullAge = (currentYear - birthYear) >= fullAge   // () дают самый высокий приоритет
console.log(isFullAge)

// ? 6 Условные операторы

const courseStatus = 'ready'   // ready, panding, fail

if (courseStatus === 'ready') {
	console.log('курс готов')
} else if (courseStatus === 'panding') {
	console.log('курс в разработке')
} else {
	console.log('курс не получился')
}

const isReady = true

if (isReady) {
	console.log('все готово')
} else {
	console.log('не готово')
}

// Тоже самое но запись через тернарный оператор
// Используется для простых условий

isReady ? console.log('все готово') : console.log('не готово')

// ? 7 Булевая логика

a1 = true  && true      // t && t вернёт true
a2 = true  && false     // t && f вернёт false
a3 = false && true      // f && t вернёт false

o1 = true  || true       // t || t вернёт true
o2 = false || true       // f || t вернёт true
o3 = true  || false      // t || f вернёт true

n1 = !true              // вернёт false
n2 = !false             // вернёт true
n2 = !!true             // вернёт true - конвертирует 2 раза

// ? 8 Функции

function calculateAge(year) {
	return 2021 - year
}

console.log(calculateAge(1978))
console.log(calculateAge(1988))

// .Функция в функции
//  Без return так как сразу вызывается console.log

function logInfoAbout(name, year) {
	const age = calculateAge(year)

	if (age > 0) {
		console.log('человек по-имени: ' + name + ', имеет возраст: ' + age)
	} else {
		console.log('вобще-то это будущее!')
	}
}

logInfoAbout('Женя', 1988)

// ? 9 Массивы

cars = ['мерседес', 'жигули', 'порш']

console.log(cars[1])  // обращение к 1 индексу
cars[0] = 'porche'   // замена элемента
cars[cars.length] = 'mazda'   // добавляет в конец массива новый элемент
console.log(cars)

// ? 10 Циклы

// Цикл for

for (let i = 0; i < cars.length; i++) {
	console.log(cars[i])
}

// Цикл for of

for (const car of cars) {
	console.log(car)
}

// ? 11 Объекты

const person = {
	firstName: 'Vladilen',
	lastName: 'Minin',
	year: 1993,
	languages: ['Ru', 'En', 'De'],
	hasWife: false,
	greet: function() {
		console.log('greet from person')
	}
}

console.log(person.firstName)   // Vladilen
console.log(person['firstName'])   // тоже самое, другой способ обращения

const key = 'year'
console.log(person[key])   // обращение через ключ

person.hasWife = true   // меняет значение
person.isProgrammer = true   // добавляет новый объект
console.log(person)

person.greet()
