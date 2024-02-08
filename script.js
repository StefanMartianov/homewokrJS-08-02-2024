// function min(num1, num2) {
//     return Math.min(num1, num2)
// }
// console.log(min(2, 3));

// function evenNums(num1, num2){
//     for (let i = num1; i < num2; i++) {
//         const element = i;
//         if (element % 2 === 0) {
//             console.log(element);
//         }   
//     }
// }
// evenNums(10 , 20)

// function power(base, toPower = 2){
//     return base ** toPower
// }
// console.log(power(2 , 5) );

// function sum(n) {
//     let sum = 0
//    for (let i = 1; i <= n; i++) {
//     const element = i;
//     sum += element
//     } 
//     return sum
// }
// console.log(sum(20));

// Напишите функцию, которая принимает два числовых аргумента n и m и считает сумму четных чисел и нечетных чисел от n до m. Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).

// function sumOfEvenAndOdd(n, m) {
// 	let evenSum = 0; // сумма чётных чисел
// 	let oddSum = 0; // сумма нечётных чисел

// 	for (let i = n; i <= m; i++) {
// 		const element = i;

// 		// если число чётное
// 		if (element % 2 === 0) {
// 			evenSum += element;
// 		} else {
// 			oddSum += element;
// 		}
// 	}

// 	return { evenSum: evenSum, oddSum: oddSum };
// }

// console.log(sumOfEvenAndOdd(10, 30))

// Напишите функцию, которая принимает в качестве аргументов массив строк, а возвращает первый самый длинный элемент массива. Если входной массив пуст, функция возвращает null. Если есть несколько одинаковых по длине элементов - функция возвращает первый из этих элементов.
// Пример: [ 'one', 'two', 'three' ] => 'three'

// const strings = ['one', 'two', 'three1', 'three2'];

// function longestElement(array) {
// 	// если входной массив пуст, возвращаем null (по условию)
// 	if (array.length === 0) {
// 		return null;
// 	}

// 	// инициализируем переменную, которая будет хранить самый длинный элемент массива
// 	let longest = '';

// 	// проходимся по массиву значений
// 	for (let i = 0; i < array.length; i++) {
// 		const element = array[i];

// 		// делаем проверку:
// 		// сравниваем текущее самое длинное значение (longest)
// 		// с текущим элементом массива

// 		// если длина текущего элемента longest меньше, чем длина элемента на текущей итерации, мы перезаписываем переменную longest этим элементом
// 		if (longest.length < element.length) {
// 			longest = element;
// 		}
// 	}

// 	return longest;
// }

// console.log(longestElement(strings))

