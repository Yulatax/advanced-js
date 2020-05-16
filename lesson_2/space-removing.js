// Напишите программу, позволяющую удалить все лишние пробелы в тексте оставив по одному.
// Текст запрашивать у пользователя

let text = prompt('Please, enter a text: ', '');

if (text === '') {
    alert('Enter correct text, please.')
} else {
    text = text.trim();
    let i = 0;
    while (text.indexOf(' ', i + 1) > -1) {
        let start = text.indexOf(' ', i);
        let next = text.indexOf(' ', start + 1);
        if (next - start === 1) {
            text = text.replace(text.slice(start, next + 1), ' ');
            // console.log(text);
            i = start;
        }  else {
            i = next;
        }
    }
    alert(text)
}