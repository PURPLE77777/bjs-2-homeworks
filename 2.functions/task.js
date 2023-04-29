function getArrayParams(...arr) {
	if (!arr.length) return 0;

	let max = Math.max(...arr),
		min = Math.min(...arr),
		sum = arr.reduce((prevValue, curValue) => {
			return prevValue + curValue;
		});

	return {
		min: min,
		max: max,
		avg: Number((sum / arr.length).toFixed(2))
	};
}

function summElementsWorker(...arr) {
	return arr.reduce((prevValue, curValue) => {
		return prevValue + curValue;
	}, 0);
}

function differenceMaxMinWorker(...arr) {
	if (!arr.length) return 0;

	return Math.max(...arr) - Math.min(...arr);
}

function differenceEvenOddWorker(...arr) {
	if (!arr.length) return 0;

	let sumEvenElement = 0,
		sumOddElement = 0;

	for (let num of arr) {
		if (num % 2 == 0) sumEvenElement += num;
		else sumOddElement += num;
	}

	return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
	if (!arr.length) return 0;

	let sumEvenElement = 0,
		countEvenElement = 0;

	for (let num of arr) {
		if (num % 2 == 0) {
			sumEvenElement += num;
			countEvenElement++;
		}
	}

	return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;

	for (const arr of arrOfArr) {
		const resultOfFunc = func(...arr);
		if (maxWorkerResult < resultOfFunc) maxWorkerResult = resultOfFunc;
	}

	return maxWorkerResult;
}