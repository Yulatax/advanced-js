// Написать чистую функцию, которая принимает массив чисел и возвращает сумму и количество положительных элементов массива.
// Сигнатура
// sumOfPositive(arr: number[]): {count: number, sum: number}
// Пример
// исходный массив:
//     [-91, -93, -45, 67, 96, 40, -34, 96, -42, 58]
// Результат
//
// {
//     count: 5,
//         sum: 357,
// }
// Написать тесты для этой функции

/**
 * Функция прининимает массив чисел и возвращает сумму и количество положительных элементов массива
 *
 * @params {number[]} arr массив чисел
 * @returns {{count: number, sum: number}} объект с полями count: количество положительных элементов и number: сумма
 * положительных элементов массива
 */
function sumOfPositive(arr) {
    const filtered = arr.filter(elem => typeof elem === 'number' && elem > 0);
    const sum = filtered.reduce((acc, item) => acc + item, 0);
    return {
        count: filtered.length,
        sum
    }
}

console.log(sumOfPositive([-91, -93, -45, 67, 96, 40, -34, 96, -42, 58]));