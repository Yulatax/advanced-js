// Написать функцию, которая принимает текст, и возвращает массив объектов со структурой
// word: само слово
// code: сумма кодов всех символов слова
// Словом можно считать символы между пробелами
// Пример
// исходный текст:
//     Lorem ipsum dolor sit amet.
//     результат:
//
// [
//     { word: 'Lorem', sum: 511 },
//     { word: 'ipsum', sum: 558 },
//     { word: 'dolor', sum: 544 },
//     { word: 'sit', sum: 336 },
//     { word: 'amet.', sum: 469 }
// ]

const textStructure = (text) => {
    return text
        .split(' ')
        .map(word => {
            let sum = word
                .split('')
                .reduce((total, letter, ind) => {
                    return total += word.charCodeAt(ind);
                }, 0);

            return {
                word: word,
                sum: sum
            };
    })
};

const lorem = 'Lorem ipsum dolor sit amet.';
console.table(textStructure(lorem));