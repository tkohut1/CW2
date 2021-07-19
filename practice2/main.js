// --створити масив з:
//     - з 5 числових значень
let one = [5, 4, 2, 4, 6]
console.log(one)

// - з 5 стічкових значень

let two = ['qwerty', 'uiop', 'asd', 'fgh', 'jkl']
console.log(two)

//- з 5 значень стрічкового, числового та булевого типу

let three = ['dfkjgsh', 5, 4, true, false]
console.log(three)

//-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let four = []
four [0] = 'qwe'
four [1] = 'xcv'
console.log(four)

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

let table1 = ['sfg', 'asdw', 'sxfdsgr', 'asf', 'xvtgdt', 'm,bn', 'nbmvnc', 'yjtf', 'ghf', 'ghfg'];
for (const number of table1) {
    console.log(number)
}

//- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let table1 = [4, 'dtg', true, 'ssef', 22, 44, 66, false, 789, 'rtyui'];
for (const number of table1) {
    if (typeof number === "boolean")
    console.log(number)
}







