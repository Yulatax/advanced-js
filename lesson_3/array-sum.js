// Написать функцию, которая принимает массив чисел и возвращает сумму и количество отрицательных элементов массива.
// Пример
// исходный массив:
//     [91, 93, 45, -67, -96, -40, 34, -96, 42, -58]
// результат :
// {
//     count: 5,
//     sum: -357,
// }

const arrayNegativeSum = (arr) => {
    let res = {
        count: 0,
        sum: 0
    };
    return arr.reduce((total, elem) => {
        if (elem < 0) {
            total.sum += elem;
            ++ total.count;
        }
        return total;
    }, res);
};

const exampleArray = [91, 93, 45, -67, -96, -40, 34, -96, 42, -58];
console.log(arrayNegativeSum(exampleArray));