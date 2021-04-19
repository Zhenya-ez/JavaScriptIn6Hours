// ? Arrays

const cars = ['Мазда', 'Форд', 'БМВ', 'Мерседес']
const fib = [1, 1, 2, 3, 5, 8, 13]

// ? Method

cars.push('Рено')   // добавляет Рено в конец массива
cars.unshift('Волга')   // добавляет Волгу в начало массива
cars.shift()   // вырезает 1й элемент массива

const firstCar = cars.shift()
console.log(firstItem)   // 1й элемент
console.log(cars)   // массив уже без 1го элемента

const lastCar = cars.pop()   // вырезает последний элемент
console.log(lastItem)   // последний элемент
console.log(cars)   // массив уже без последнего элемента

console.log(cars.reverse())   // пареворачивает массив наоборот и так оставляет

const index = cars.indexOf('БМВ')   // получаем индекс
cars[index] = 'Porsche'   // заменяем БМВ на Porsche

const people = [
	{name: 'Vladilen', budget: 4200},
	{name: 'Elena', budget: 3500},
	{name: 'Victoria', budget: 1700},
]

// находим budget 3500

const person = people.find(function(person) {
	return person.budget === 3500
})
console.log(person)

// тоже самое, но сокращенный вариант

const person = people.find(person => person.budget === 3500)
console.log(person)

console.log(cars.includes('Мазда'))   // проверяет наличие элемента в массиве

// создаем новый массив с верхним регистром

const upperCaseCars = cars.map(car => {
	return car.toUpperCase()
})

console.log(upperCaseCars)   // массив с верхним регистром
console.log(cars)   // массив без изменений

// возводим каждое число из массива в квадрат

const pow2Fib = fib.map(num => num ** 2)

// отфильтруем цифры меньше 20

const filteredNumbers = pow2Fib.filter(num => num > 20)
console.log(filteredNumbers)   // отфильтрованый массив

// получаем сумму всех бюджетов
// acc - accumulator - значение, которое меняется
// 0 - начальное значение с которого хотим начинать считать

const allBudget = people.reduce((acc, person) => {
	// acc = acc + person.budget - это тоже самое
	acc += person.budget
	return acc
}, 0)

console.log(allBudget)   // сумма всех бюджетов 9400

// плюсуем бюджеты которые больше 2000

const allBudget = people
.filter(person => person.budget > 2000)
.reduce((acc, person) => {
	acc += person.budget
	return acc
}, 0)

console.log(allBudget)   // 7700


// ? Задача 1

const text = 'Привет, мы изучаем JavaScript'

// split('') превращает строку в массив, если поставить split(',') сделает из строки массив из 2 элементов
// reverse() переворачивает ее
// join('') соединяет элементы массива и превращает в строку, если указать join('-') то через такой символ и будет соединина строка

const reverseText = text.split('').reverse().join('')
console.log(reverseText)

