// ? 1 Number

const num = 42;   // integer
const float = 42.42;   // float
const pow = 10e3;   // 10 в степени 3 (10000)

console.log(Number.MAX_SAFE_INTEGER)   // 9007199254740991 максимальный integr
console.log(Math.pow(2, 53) -1)   // 2 в степени 53 - 1 = тоже число 9007199254740991
console.log(Number.MIN_SAFE_INTEGER)   // -9007199254740991 минимальный integer
console.log(Number.MAX_VALUE)   // 1.7976931348623157e+308 максимальное значение для js
console.log(Number.MIN_VALUE)   // 5e-324 минимальное значение для js
console.log(1 / 0)   // Infinity - бессконечность
console.log(Number.NaN)   // Not a Number
console.log(typeof NaN)   // хотя тип будет number

const stringInt = '40'
const stringFloat = '40.42'

console.log(parseInt(stringInt) + 2)   // преобразует строку в число и получается 42, если просто добавить будет '402'
console.log(+stringInt + 2)   // тоже самое

console.log(parseFloat(stringFloat) + 2)   // тоже самое но для float
console.log(+stringFloat + 2)

console.log(0.4 + 0.2)   // выйдет 0.6000000000000001
console.log(+(0.4 + 0.2).toFixed(1))   // преобразовуем в число и отсекаем нужное колличество знаков после ,
console.log(parseFloat((0.4 + 0.2).toFixed(1)))   // тоже самое

// ? 2 BigInt

console.log(90071992547409919999n + 90071992547409919999n)   //добавляем в конце n
// console.log(90071992547409919999.999n)   //err

console.log(10n - 4)   // err
console.log(parseInt(10n) - 4)   // 6
console.log(10n - BigInt(4))   // 6n
console.log(5n / 2n)   // 2n, а не 2.5n

// console.log(+180143985094819839998n)   // err
console.log(parseInt(180143985094819839998n))   // 180143985094819840000

// ? 3 Math

console.log(Math.PI)   // 3.141592653589793
console.log(Math.E)   // 2.718281828459045

console.log(Math.sqrt(25))   // корень квадратный из 25 = 5
console.log(Math.pow(5, 2))   // 5 возвести в степень 2 = 25
console.log(Math.abs(-42))   // 42

console.log(Math.max(11, 200, 3))   // 200
console.log(Math.min(11, 200, 3))   // 3

console.log(Math.floor(5.4))   // округляет в меньшую сторону 5
console.log(Math.ceil(5.4))   // округляет в большую сторону 6
console.log(Math.round(5.4))   // стандартное округление 5
console.log(Math.trunc('5.4'))   // удаляет все дробные знаки и конвертирует строку в число 5

// ? 4 Example

// Получаем рандомное число в заданом диапазоне
// Добавляем 1 потому, что округляем в меньшую сторону

function getRandom(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(getRandom(1, 100));
