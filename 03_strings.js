// ? String

const name = "Владилен";
const age = 26;

const output = `Привет, меня зовут ${name} и мой возраст ${
	age < 30 ? "A" : "B"
} лет`;
console.log(output);

console.log(name.length); // длина строки
console.log(name.toUpperCase()); // конвертирует в заглавные буквы
console.log(name.toLowerCase()); // конвертирует в маленькие буквы
console.log(name.charAt(2)); // выводит символ в заданом индексе
console.log(name.repeat(3)); // повтор строки

const string = "   pasword   ";
console.log(string.trim()); // удаляет пробелы
console.log(string.trimLeft()); // удаляет пробелы слева
console.log(string.trimRight()); // удаляет пробелы справа

function logPerson(s, name, age) {
	if (age < 0) {
		age = "Еще не родился";
	}
	return `${s[0]}${name}${s[1]}${age}${s[2]}`;
}

const personName = "Владилен";
const personName2 = "Максим";
const personAge = 26;
const personAge2 = -10;

const output = logPerson`Имя: ${personName}, Возраст: ${personAge}!`;
const output2 = logPerson`Имя: ${personName2}, Возраст: ${personAge2}!`;

console.log(output); // Имя: Владилен, Возраст: 26!
console.log(output2); // Имя: Максим, Возраст: Еще не родился!
