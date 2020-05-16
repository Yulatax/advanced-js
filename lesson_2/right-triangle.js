// Написать код расчета площади правильного треугольника
// У пользователя запрашивается длина стороны. Посчитать и вывести площадь треугольника.
// Формула для вычисления площади треугольника: www.webmath.ru

let side = prompt('Please, enter a side of triangle: ', '');

if (side !== null) {
    side = +side;
    if (side <= 0 || isNaN(side)) {
        alert('Please, enter correct data');
    } else {
        let s = (side**2 * Math.sqrt(3)) / 4;
        alert(`Square of your right triangle: ${s}`)
    }
}
