// Для задоного массива выводить в консоль число если оно чётное
// Как только цикл дойдёт до 23 разорвать цикл
const numbers = [4, 3, 10, 99, 23, 41, 5, 12, 23, 41, 12, 32];

for (let i=0; i<numbers.length; i++){
    if(numbers[i]%2===0){
        console.log(numbers[i]);
    }
    if (numbers[i]===23){
        break;
    }
}



// Для заданного массива написать цикл который выведет в консоль
// Код html элемента одной строкой
/*
<ul>
        <li><h1>Hello Jack Smith</h1></li>
        <li><h1>Hello Bob Summers</h1></li>
        <li><h1>Hello Sarah Gold</h1></li>
        <li><h1>Hello Susan Vega</h1></li>
        <li><h1>Hello Mary Roberts</h1></li>
</ul>
*/
const people = [{name: 'Jack', surname: 'Smith'}, {name: 'Bob', surname: 'Summers'}, {name: 'Sarah', surname: 'Gold'}, {name: 'Susan', surname: 'Vega'}, {name: 'Mary', surname: 'Roberts'}];

// непонял условия. в процессе....



// Напишите функцию которая будет принимать два аргумента (start, end)
// Для каждого числа в диапозоне от start до end будет выводить число
// И Четное оно Или нечетное

function startEnd (num1,num2){
    for (let i=num1;i<num2;i++){
        if (i%2===0){
            console.log(i + ' Четное' );
        }
        else console.log(i + ' нечетное');
    }
}
startEnd(4,10);




// Напишите функцию которая принимает три числа в качестве аргумента
// Находит наибольшее из трёх
function bigNum (num1,num2,num3){
    let i =0;
    if (num1>num2){
        i=num1;
    }
    if(num2>i){
        i=num2;
    }
    if(num3>i){
        i=num3;
    }
    console.log(i);
}
bigNum(56,6,8);

// Fizz Buzz
// Для диапозона чисел от 1 до 100
// написать программу которая выведет в консоль число и FIZZ если число делится на 3 без остатка
// выведет в консоль число и BUZZ если число делится на 5 без остатка
// выведет в консоль число и FIZZ BUZZ если число делится на 3 и на 5 без остатка

for (i=1;i<101;i++){
    if(i%3===0&&i%5===0)console.log( i +' FIZZ BUZZ');
    else if (i%5===0)console.log( i +' BUZZ');
    else if (i%3===0)console.log( i+ ' FIZZ');
}



// Используйте метод filter() чтобы создать массив с четными числами из массива nums
const nums = [1, 2, 3, 4, 5, 6];

let newNums = nums.filter(num =>{return num%2==0});

console.log(newNums);



// Используйте метод map() чтобы создать массив со строкоми где все буквы заглавные
const strings = ["hello", "world", "javascript"];
const newStrings = strings.map(word=> {return word.toUpperCase()})

console.log(newStrings);



// Используйте метод filter() чтобы получить массив с совершеннолетними людьми
const people2 = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 30 },
];
const adulsPeople = people2.filter (person => {return person.age>19});

console.log(adulsPeople);