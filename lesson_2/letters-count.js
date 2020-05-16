// Запрашивать у пользователя текст, а затем выводить количество гласных и согласных букв в введенном тексте.
// Алфавит латинский.

let text = prompt('Please, enter a text: ', '');
let vowels = 'aeiouy';
let consonants = 'bcdfghjklmnpqrstvwxz';
let vCount = 0;
let cCount = 0;

if (text === '') {
    alert('Enter correct text, please.')
} else {
    for (let i = 0; i < text.length; i++) {
        if (vowels.indexOf(text[i]) > -1) {
            vCount ++;
        } else if (consonants.indexOf(text[i]) > -1) {
            cCount ++;
        }
    }
    alert(`Vowels: ${vCount}, consonants: ${cCount}`);
}
