// --створити масив з:
//     - з 5 числових значень
// let one = [5, 4, 2, 4, 6]
// console.log(one)

// - з 5 стічкових значень

// let two = ['qwerty', 'uiop', 'asd', 'fgh', 'jkl']
// console.log(two)

//- з 5 значень стрічкового, числового та булевого типу

// let three = ['dfkjgsh', 5, 4, true, false]
// console.log(three)

//-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let four = []
// four [0] = 'qwe'
// four [1] = 'xcv'
// console.log(four)

//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let i=0; i < 10; i++) {
//
//     document.write(`<div> ${i} text </div>`)
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i=0; i < 10; i++) {
//
//     document.write(`<div> ${i}  text ${[i]} </div>`)
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i = 0
// while (i < 20){
//     i++
//     document.write(`<h1> ${i} text  </h1>`)
// }

// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let a = 0
// while (a <=20){
//     a++
//     document.write(`<h1> ${a} text ${[a]} </h1>`)
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let table1 = [4, 15, 12, 98, 22, 44, 66, 548, 789, 123];
// for (const number of table1) {
//     console.log(number)
// }

//- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let table1 = ['sfg', 'asdw', 'sxfdsgr', 'asf', 'xvtgdt', 'm,bn', 'nbmvnc', 'yjtf', 'ghf', 'ghfg'];
// for (const number of table1) {
//     console.log(number)
// }

//- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let table1 = [4, 'qwerty',true ,false ,123 ,'zxcb' ,3.14 ,'xcvz' ,true ,5488 ];
// for (const number of table1){
//     console.log(number)
// }

// Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let table1 = [4, 'dtg', true, 'ssef', 22, 44, 66, false, 789, 'rtyui'];
// for (const number of table1) {
//     if (typeof number === "boolean")
//     console.log(number)
// }

// Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let table1 = [4, 'dtg', true, 'ssef', 22, 44, 66, false, 789, 'rtyui'];
// for (const number of table1){
//     if (typeof number === "number")
//         console.log(number)
// }

// Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let table1 = [4, 'dtg', true, 'ssef', 22, 44, 66, false, 789, 'rtyui'];
// for (const number of table1){
//     if (typeof number === "string")
//         console.log(number)
// }


// Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let table1 = [];
// table1 [0] = 'sdgfgdsg';
// table1 [1] = 456;
// table1 [2] =true
// table1 [3] ='sfgdfg';
// table1 [4] ='dfxvx';
// table1 [5] =false;
// table1 [6] =321;
// table1 [7] =846;
// table1 [8] =true;
// table1 [9] = 'fdgh';
// table1 [10] = 123;
// for (const number of table1){
//     console.log(number)
// }

//творити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0 ; i <= 10; i++) {
//     console.log(i)
//     document.write(i)
// }

//Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0 ; i <= 100; i++) {
//     console.log(i)
//     document.write(i)
// }

//Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0 ; i <= 200; i = i+2) {
//     console.log(i)
//     document.write(i)
// }

//Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0 ; i <= 100; i++) {
//     if (i % 2 == 0){
//     console.log(i)
//     document.write(i)
//     }
// }
//Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i = 0 ; i <= 100; i++) {
    if (i % 2 != 0){
        console.log(i)
        document.write(i)
    }
}
