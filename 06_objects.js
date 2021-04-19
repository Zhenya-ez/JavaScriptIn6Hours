// ? Objects

const person = {
	name: 'Vladilen',
	age: 26,
	isProgrammer: true,
	languages: ['ru', 'en', 'de'],
	'complex key': 'Complex Value',   // берем ключ в '' если нужен ключ с пробелом
	['key_' + (1 + 3)]: 'Comuted Key',   // key_4
	greet() {
		console.log('greet from person')
	},
	info() {
		console.info('Информация про человека по имени:', this.name)   // можно person.name
	}
}

console.log(person.name)
const ageKey = 'age'
console.log(person[ageKey])   // 26
console.log(person['complex key'])   // Complex Value
person.greet()   // greet from person

person.age++   // добавит к возрасту +1
person.languages.push('by')   // добавить в языки by
console.log(person)

delete person['key_4']   // удаление ключа и значения

const name = person.name
const age = person.age
const languages = person.languages

const {name, age, languages} = person   // тоже самое, что выше
const {name, age: personAge, languages} = person   // если хотим чтобы переменная называлась personAge

console.log(name, age, languages)

const keys = Object.keys(person)   // получаем ключи объекта

keys.forEach((key) => {
	console.log('key', key)   // получаем все ключи
	console.log('value', person[key])   // получаем все значения ключей
})

// ? Context

person.info()

const logger = {
	keys() {
		console.log('Object Keys: ', Object.keys(this))
	}
}

// bind привъязует context в данном случае logger и возвращает функцию

const bound = logger.keys.bind(person)   // получаем ключи любого объекта
bound()

// тоже самое что bind, но сразу вызывает функцию

logger.keys.call(person)

