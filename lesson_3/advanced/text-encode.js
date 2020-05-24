// Написать функцию encodeText, которая принимает текст, выбирает все уникальные слова в нем,
// для каждого слова подсчитывает количество вхождений и присваивает уникальный код.
// Словом считать последовательность символов между пробелами.
// Далее перекодирует текст, заменяя слова из словаря на код слова
// Уникальный код - случайное число (желательно - в 16ричной или 36ричной системе)
// Проверить что код действительно уникален для этого словаря
// Возвращает объект
// {
//     dictionary: [
//         {
//             word: слово
//             count: количество использований в тексте
//             code: уникальный код.
//         }
//     ],
//         encodedText: перекодированный текст
// }
//
// Пример:
//     Исходный текст:
//     Lorem ipsum ipsum dolor.
//     Результат:
//
// {
//     dictionary: [
//         { word: 'Lorem', count: 1, code: '58' },
//         { word: 'ipsum', count: 2, code: 'rd' },
//         { word: 'dolor.', count: 1, code: 'g7' }
//     ],
//         encodedText: '58,rd,rd,g7'
// }

function encodeText(text) {
    const dictionary = createDictionary(text);

    const encodedText = translateText(text, dictionary).join(',');

    return {
        dictionary,
        encodedText
    };
}

function createDictionary(text) {
    return text.split(' ')
        .reduce((dictionary, word) => {
            const wordInDictionary = dictionary.find(elem => elem.word === word);

            if (wordInDictionary) {
                wordInDictionary.count++;
            } else {
                const codes = dictionary.map(elem => elem.code );
                // console.log(codes);
                let code = '';
                do {
                    code = generateWordCode(2);
                } while (codes.includes(code));
                dictionary.push({
                    word,
                    count: 1,
                    code
                })
            }
            return dictionary;
        }, []);
}

function generateWordCode(length) {
    let res = '';
    for (let i = 0; i < length; i++) {
        res += (Math.floor(Math.random() * 16)).toString(16);
    }
    return res;
}

function translateText(text, dictionary) {
    return text.split(' ')
        .reduce((codes, word) => {
            const wordElement = dictionary.find(elem => elem.word === word);
            codes.push(wordElement.code);
            return codes;
        }, [])
}

console.log(encodeText('Lorem ipsum ipsum dolor.'));