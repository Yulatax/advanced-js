// Написать алгоритм кодирования идентификатора (задача, обратная тому, что показано в уроке).
// Шестнадцатиричный код AAAAAAAABBCDDDDDD
// А. метка времени (timestamp в секундах)
// B. кластер
// C. тип
// D. идентификатор пользователя
// Все входные данные - целые десятичные числа (значения можно “зашить” прямо в код решения).

let tStamp = 1588045363;
let claster = 27;
let type = 7;
let user = 10631111;

let a = tStamp.toString(16);
let b = claster.toString(16);
let c = type.toString(16);
let d = user.toString(16);

let id = a + b + c + d;
if (id.length === 17) {
    console.log(`Id: ${id}`);
} else {
    console.log('Incorrect id. Please check input data.');
}
