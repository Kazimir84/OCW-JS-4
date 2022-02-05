// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function minNum(a, b, c) {
    if (a < b && a < c) {
        console.log('Min Number = ', a);
        return a;
    } else if (b < a && b < c) {
        console.log('Min Number = ', b);
        return b;
    } else if (c < a && c < b) {
        console.log('Min Number = ', c);
        return c;
    };
};
minNum(1, 4, 0);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function maxNum(a, b, c) {
    if (a > b && a > c) {
        console.log('Max Number = ', a);
        return a;
    } else if (b > a && b > c) {
        console.log('Max Number = ', b);
        return b;
    } else if (c > b && c > a) {
        console.log('Max Number = ', c);
        return c;
    };
};
maxNum(4, 9, 3);

// - створити функцію яка повертає найбільше число з масиву
let arr = [1, 222, 22, 6, 8, 99, 200, 1];

function maxArrNum(a) {
    let max = Math.max(...a);
    console.log('Max Number from Array = ', max);
    return max;
};
maxArrNum(arr);

// - створити функцію яка повертає найменьше число з масиву
function minArrNum(a) {
    let min = Math.min(...a);
    console.log('Min Number from Array = ', min);
    return min;
};
minArrNum(arr);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
function sumArr(a) {
    let sum = 0;
    for (let aElement of a) {
        sum += aElement;
    };
    console.log('Sum Number from Array = ', sum);
    return sum;
};
sumArr(arr);

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function midlArr(a) {
    let midlSum = 0;
    for (let aElement of a) {
        midlSum += aElement / 2;
    };
    console.log('Midl Number from Array = ', midlSum);
    return midlSum;
};
midlArr(arr);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
// а виводить найбільше (Math використовувати заборонено);
function manyNum() {
    let min = arguments[0];
    let max = arguments[0];
    for (const argument of arguments) {
        if (argument > max) max = argument;
        if (argument < min) min = argument;
    };
    console.log("Max Number =  ", max);
    return min;
};
let minNumber = manyNum(8, 2, 3, 4, 22, 5, 9, 1, 33);
console.log('Min Number = ', minNumber);

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
let arrRandom = [];

function random() {
    for (let i = 0; i < 100; i++) {
        arrRandom.push(Math.round(Math.random() * 100));
    };
};
random();
console.log('Random number - ', arrRandom);

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
// limit - аргумент, який характеризує кінцеве значення діапазону.
let arrLimit = [];

function randomLimit(limit) {
    for (let i = 0; i < limit; i++) {
        arrLimit.push(Math.round(Math.random() * 100));
    };
};
randomLimit(10);
console.log('Random Number with limit argument - ', arrLimit);

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
let arrayRevers = [1, 2, 3];
console.log('Not Reversed Array = ', arrayRevers)
function arrRevers () {
    for (let i = 0; i < arguments.length; i++) {
        let argument = arguments[i];
        let reversArr = argument.reverse();
        reversArr = arrayRevers;
    };
};
arrRevers(arrayRevers);
console.log('Reversed Array = ', arrayRevers);