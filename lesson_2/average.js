// Запрашивать у пользователя (prompt) числа пока пользователь не введет пустое значение.
// После ввода каждого числа выводить в консоль предварительный итог.
// По завершению (когда пользователь ввел пустое значение) отобразить (alert) сумму, количество чисел и среднее арифметическое .

let sum = 0;
let count = 0;
let avg = 0;

while (true) {
    let number = prompt('Please, enter a number: ', '');
    if (number === '' || isNaN(number) || number === null) {
        break;
    } else {
        sum += +number;
        ++count;
        avg = sum / count;
        console.log(avg);
    }
}

alert(`Sum: ${sum}, count: ${count}, averege: ${avg}`);
