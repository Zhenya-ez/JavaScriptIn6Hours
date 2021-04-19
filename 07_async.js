// ? Async

// ? Event Loop

// запуск через 2.5 сек 1 раз

const timeout = setTimeout(() => {
	console.log('After timeout')
}, 2500)

clearTimeout(timeout)   // очистка таймаута, чтобы не выполнялся


// запуск каждые 2.5 сек

const interval = setInterval(() => {
	console.log('After timeout')
}, 2500)

clearInterval(interval)   // очистка интервала

const delay = (wait = 1000) => {
	const promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve()
			reject('Что-то пошло не так. Повторите попытку')
		}, wait)
	})
	return promise
}

// promise чтобы не было большой вложености

delay(2500)
	.then(() => {
		console.log('After 2 seconds')
	})
	.catch(err => console.error('Error', err))   // попадаем если задан reject
	.finally(() => console.log('Finally'))
	
	const getData = () => new Promise(resolve => resolve([
		1, 1, 2, 3, 5, 8, 13
	]))

	getData().then(data => console.log(data))

	async function asyncExample() {
		try {
		await delay(3000)
		const data = await getData()
		console.log('Data', data)
	} catch (e) {
		console.log(e)
	} finally {
		console.log('Finally')
	}
}

	asyncExample()