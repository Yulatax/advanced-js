// Постройте алгоритм реверсии слова
// Например, если аргумент слово «cat», то результатом должно быть слово «tac».
// Слово запрашивать у пользователя

let word = prompt('Please, enter a word: ', '');
let reversed = '';

if (word === ''){
    alert('Enter correct word, please.')
} else {
    for (let i = 1; i <= word.length; i++) {
        reversed += word.substr(-i,1);
    }
    alert(reversed);
}