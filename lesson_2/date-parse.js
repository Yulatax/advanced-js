// Валидировать и переформатировать введенную пользователем дату из Американского в Российский стандарт
// Американский формат: ММ/ЧЧ/ГГГГ например: 5/30/2006
// Российский формат: ЧЧ.ММ.ГГГГ например: 30.05.2006

let userDate = prompt('Please, enter a date in format MM/DD/YYYY: ', '');

if (userDate === '') {
    alert('Please, enter date')
} else {
    let firstSlash = userDate.indexOf('/');
    let lastSlash = userDate.lastIndexOf('/');
    let m = userDate.substring(0, firstSlash);
    let d = userDate.substring(firstSlash+1, lastSlash);
    let y = userDate.substring(lastSlash+1);

    m = m.length < 2 ? '0' + m : m;
    d = d.length < 2 ? '0' + d : d;

    let rusDate = d + '.' + m + '.' + y;
    alert(`Your date in Russian format: ${rusDate}`)
}
