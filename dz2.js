// напишите программу которая выводит в консоль сумму всех
// четных чисел в массиве

const numsArray = [1, 12, 34, 71, 14, 12, 33, 70, 82, 81, 9, 19, 90];
let sum = 0;

numsArray.forEach(num => {
    if(num%2===0){
        sum += num
    }
})
console.log(sum);




// Напишите программу которая проанализирует данный массив с объектами
// и добавит в новый массив только имена тех людей кому 18 и старше

const people = [
    {
        name: 'Jack',
        age: 15
    },
    {
        name: 'Sarah',
        age: 21
    },
    {
        name: 'Bob',
        age: 54
    },
    {
        name: 'Mary',
        age: 12
    },
    {
        name: 'Simon',
        age: 18
    },
    {
        name: 'Jonhatan',
        age: 17
    }
]
const adults = [];

people.forEach(pepl => {
    if(pepl.age >= 18){
        adults.push(pepl.name)
    }
})
console.log(adults);   



// напишите программу которая проанализирует данный массив и выведет в консоль самую длинную строку
const strings = ['Star', 'Planet', 'Comet', 'Interstellar', 'Space'];
let wordLength = '';

strings.forEach( wlength => {
    if(wlength.length > wordLength.length){
        wordLength =  wlength;
    }
})
console.log(wordLength);


// напишите программу которая возьмёт из данного массива наименования книг которые вышли в этом году
// и добавит их в новый массив
const books = [
    {
        author: 'Jeremy Brook',
        title: 'My childhood',
        release: 2023
    },
    {
        author: 'Samantha Jhones',
        title: 'Living with ten cats',
        release: 2020
    },
    {
        author: 'Bob Summers',
        title: 'Exploring far space',
        release: 2021
    },
    {
        author: 'Bill Brown',
        title: 'Insects in our garden',
        release: 2023
    },
    {
        author: 'Jessica Love',
        title: 'Programming for begginers',
        release: 2023
    }
];
const newBooks = [];

books.forEach(book=>{
    if(book.release===2023){
        newBooks.push({
            author: book.author,
            title: book.title,
        })
    }
})
console.log(newBooks);


// Напишите программу которая проанализирует данный массив и найдёт в нем наибольшее число кратное трём

const numbers = [3, 15, 23, 56, 66, 71, 12, 90];
let bigNum = 0;


//-----------v1
numbers.forEach(num=>{
    if(num%3===0){
        if(bigNum<num){
        bigNum = num;
        }
    }
})

//----------v2
// numbers.forEach(num=>{
//     if(num%3===0 && bigNum<num ){
//         bigNum = num;
//     }
// })
// console.log(bigNum);


// напишите программу которая найдёт самого старшего человека в данном массиве с объектами
// и сохранит его в переменную oldestPerson
const people2 = [
    {
        name: 'Jack',
        age: 15
    },
    {
        name: 'Sarah',
        age: 21
    },
    {
        name: 'Bob',
        age: 54
    },
    {
        name: 'Mary',
        age: 12
    },
    {
        name: 'Simon',
        age: 18
    },
    {
        name: 'Jonhatan',
        age: 17
    }
];


//--------------v1
let oldestPerson ='';
let ageBig = 0;
people2.forEach(people=>{
    if(people.age > ageBig ){
        ageBig = people.age;
        oldestPerson = people.name;
    }
})

// //----------------- v2
// let oldestPerson ;
// people2.forEach(people=>{
//     if(!oldestPerson){
//         oldestPerson = people;
//     }
//     if(people.age > oldestPerson.age){
//         oldestPerson =people;
//     }
// })
// //----------------

console.log(oldestPerson);