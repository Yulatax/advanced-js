// Реализовать аналог методов map и filter массива используя метод reduce массива


// Map
function map(arr, func, ...args) {
    return arr.reduce((total, elem) => {
        const res = func(elem, args);
        total.push(res);
        return total;
    }, [])
}

const countWordLength = (a) => {
    return a.length;
};
const words = ['table', 'world', 'snow', 'abra cadabra'];
console.log(map(words, countWordLength));

const mathPow = (num, pow) => {
  return Math.pow(num, pow);
};
const numbers = [2, 7, 11, -3];
console.log(map(numbers, mathPow, 2));


// Filter
function filter(arr, func, ...args) {
    return arr.reduce((total, elem) => {
        const res = func(elem, args);
        if (res) { total.push(elem) }
        return total;
    }, [])
}

const numberInInterval = (num, borders) => {
    return num >= borders[0] && num <= borders[1];
};
const digits = [88, 45, -3, 11, 77, 101];
console.log(filter(digits, numberInInterval, 50, 100));