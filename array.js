// МАССИВЫ JAVASCRIPT

// const students = ["Viktor", "Miran", "Ilya", "Andrey", "Maxim"]

// console.log(students)
// console.log(students[0])
// console.log(students.length)
// console.log(students[students.length - 1])
// console.log(students.length - 1)

// students[0] = "Ivan";
// console.log(students)

// МЕТОДЫ МАССИВОВ
// numbers = [1, 2, 3, 4, 5, 6, 9, 8, 7]
// console.log("Было: ", numbers)
// numbers.push(10) // добавить элемент в конец списка
// console.log(numbers)
// numbers.pop()
// console.log(numbers)
// numbers.unshift(0)
// console.log(numbers)
// numbers.shift()
// console.log(numbers)

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i])
// }

// for (let num of numbers) {
//     console.log(num)
// }

// МЕТОДЫ - ПРОДОЛЖЕНИЕ
fruits = ["apple", "banana", "pineapple", "watermelon", "strawberry", "plam", "orange"]

console.log(fruits.includes('apple')) // проверяет есть ли значение в массиве
console.log(fruits.includes('яблоко'))
console.log(fruits.indexOf('orange')) // возвращает индекс элемента в списке


// if (fruits.includes("banana")) {
//     console.log("фрукт найден")
//     console.log(`его индекс ${fruits.indexOf("orange")}`)

// } else {
//     console.log("фрукт не найден")
// }

// СОРТИРОВКА МАССИВА
fruits = ["apple", "banana", "pineapple", "watermelon", "strawberry", "plam", "orange"]
numbers = [1, 250, 2, 3, 300, 4, 5, 6, 9, 77, 8, 7]
console.log(fruits)
console.log(numbers)
fruits.sort()
numbers.sort()
console.log(fruits)
console.log(numbers)

numbers.sort((a, b) => a - b)
numbers.sort((a, b) => b - a)
console.log(numbers)

// ПРАКТИКА
// ЗАДАНИЕ 1 - СПИСОК ОЦЕНОК
// создать массив из пяти оценок, вывести первую оценку
// последнюю оценку и количество оценок

// ЗАДАНИЕ 2 - СПИСОК ПОКУПОК
// создать массив покупок. Добавить 2 новых товар в конец, удалить первый жлемент
// и последний, вывести итоговой массив

// ЗАДАНИЕ 3 - СРЕДНЯЯ ОЦЕНКА
// создать список из 10 чисел в дипазоне от 1 до 5
// найти среднее арифметическое оценок в списке


// ДОМАШНЕЕ ЗАДАНИЕ
// ЗАДАНИЕ 1
// создать массив и через цикл 
// добавить туда 10 случайных чисел
// (подсказка - Math.floor(Math.random() * 10))
// вывести список чисел и сумму всех чисел в списке,
// вывести количество четных чисел,
// а также вывести минимальное и максимальное число

// ЗАДАНИЕ 2
// создать массив с именами
// проверить, есть ли в нем имя,
// введенное пользователем через prompt()
// добавить новое имя в конец массива
// удалить первое имя в массиве
// вывести массив