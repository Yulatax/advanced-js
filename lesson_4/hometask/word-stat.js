// Написать чистую функцию, которая принимает текст, и возвращает массив объектов со структурой
// word: само слово
// code: сумма кодов всех символов слова
// Словом можно считать символы между пробелами
// Для подсчета суммы кодов всех символов слова написать отдельную чистую функцию, на нее так же написать тесты
// Сигнатура
// wordStat(text: string): {word: string: code: number}[]
// Пример
// исходный текст:
//
//     Lorem ipsum dolor sit amet.
//
//     результат:
// [
//     { word: 'Lorem', sum: 511 },
//     { word: 'ipsum', sum: 558 },
//     { word: 'dolor', sum: 544 },
//     { word: 'sit', sum: 336 },
//     { word: 'amet.', sum: 469 }
// ]
//
// Написать тесты для этой функции

/**
 * Функция прининимает текст и возвращает массив объектов
 *
 * @params {string} text текст
 * @returns {{word: string: code: number}[]} массив объектов с полями word: слово из текста и code: сумма
 * кодов всех символов слова
 */

function wordStat(text) {
    return text.split(' ')
                .reduce((total, word) => {
                    total.push({
                        word,
                        code: calculateCodesSum(word)
                    });
                    return total;
                }, [])
        }

/**
 * Функция прининимает слово и возвращает код, который является суммой кодов символов этого слова
 *
 * @params {string} word слово
 * @returns {number} code сумма кодов символов, из которых состоит слово
 */

function calculateCodesSum(word) {
    return word.split('')
                .reduce((total, letter) => {
                    return total += letter.charCodeAt(0);
                }, 0);
}

const text = 'Lorem ipsum dolor sit amet.';
console.log(wordStat(text));