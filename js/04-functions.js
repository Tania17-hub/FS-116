/**
 * Функции
 *
 * - Оголошення та виклик функції
 * - Параметри та аргументи
 * - Повернення значення
 */

// function myDay() {
//   const userBalance = 100; //prompt('Enter your balance');
//   const productPrice = 10; //prompt('Enter product price');
//   const productAmount = 5; //prompt('Enter product price');
//   const result = userBalance > productPrice * productAmount;

// reutrn resulr
// }

// debugger;

// console.log('START');

// myDay();

// console.log('END');

// console.log("Before fnA execution");
// fnA();
// console.log("After fnA execution");

// console.log("Before fnB execution");
// fnB();
// console.log("After fnB execution");

// console.log("Before fnC execution");
// fnC();
// console.log("After fnC execution");

//!======================================================
// function sayHello() {
//   console.log('======================');
//   const userName = 'Volodka';
//   const userAge = 25;
//   console.log(`Hello ${userName}`);
//   console.log(`${userName} age: ${userAge}`);
//   console.log('======================');
// }

// sayHello();
// sayHello();
// sayHello();
// sayHello();

//!======================================================

// function myDay(day, money, food) {
//   console.log('прокинутись');
//   console.log('поснідати');
//   console.log(`зібрати рюкзак на ${day}`);
//   console.log('піти до школи');
//   console.log('повернутись зі школи');
//   console.log('відпочити');
//   console.log('лягти спати');
// }

// myDay('Понеділок', 50, 'apple');
// myDay('Вівторок', 45, 'apple');
// myDay('Понеділок', 60);

//!======================================================

// function sum(x, y) {
//   //   let x; // undefined
//   //   let y; // undefined
// }

// sum(10, 20);
// sum(5, 2);
// sum(5);
// sum(1);
// sum(undefined, 1);
//!======================================================

// function test() {
//   result = 10;
// }

// const x = test();

// console.log(x);

// log;

var x;
//!======================================================

// function sum(x, y) {
//   const result = x + y;

//   // return undefined;
// }

// const myRes1 = sum(10, 55);

// console.log(myRes1);

//!======================================================

function sayHello() {
  const userName = prompt('Enter your name');
  const message = `Hello ${userName}`;
  return message;
}

const message1 = sayHello();
// document.body.innerHTML = message1;

//!======================================================
/**
 * Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс
 * маси тіла людини. Для цього необхідно розділити вагу на
 * квадрат висоти.
 *
 * Вага та висота будуть спеціально передані як рядки. Не цілі числа можуть
 * бути задані у вигляді 24.7kg або 24,7, тобто як роздільник дробової
 * частини може бути кома.
 *
 * Індекс маси тіла необхідно округлити до однієї цифри після коми.
 * @param x number
 */
// function calcBMI(weight, height) {
//   const validWeight = weight.replace(',', '.'); // '12,2' -> '12.2';
//   const validHeight = height.replace(',', '.');

//   const weightNum = parseFloat(validWeight);
//   const heightNum = parseFloat(validHeight);

//   const res = weightNum / heightNum ** 2;
//   return res.toFixed(2); 0.92345923487364278346523
// }

// const myBmi = calcBMI('88,3', '1.75');
// console.log(bmi); // 28.8

// document.body.innerHTML = myBmi;

//!======================================================

// calcBMI(10, 25);
