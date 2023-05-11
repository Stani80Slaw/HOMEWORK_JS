//-----------------------------------------------------------------------------------
// Напишите функцию которая принимает два числа в качестве аргумента
// Если число отрицательное, то приводит его к положительному (-10 => 10)
// И складывает их

function invertNumber (num){
    return -num;
}
function sumNumer(numA, numB){
    if(numA<0){
        numA=invertNumber(numA);
    }
    if(numB<0){
        numB=invertNumber(numB);
    }
    return numA+numB;
        console.log(numA+numB);
    console.log(numA+numB);
}
console.log(sumNumer(-20,10));



//-----------------------------------------------------------------------------------
// Напишите функцию, которая складывает только положительные числа
// если одно из чисел отрицательное, то выводит строку (одно из чисел негативное)

function sumNumer2 (numA,numB){
    if (numA<0 || numB<0){
        return'Одно из двух чисел негативное';
    }
    else{
        return numA+numB;
    }
}
console.log(sumNumer2(20,40));



//-----------------------------------------------------------------------------------
// Напишите программу которая проверит длину каждого имя в массиве
// Если длина меньше или равна 5 символам - добавить в массив shortNames
// *** Сложное *** удалить это же имя из массива users
// Решение задачи с удалением из массива

//const users = ['Jack', 'Mariah', 'Sarah', 'Jonathan', 'Piere', 'Bob', 'Samantha', 'Mary'];
// -----------------------------*** решение не полное --------------------------------
// const shortNames =[];
// let numNames = 0;
// users.forEach (name =>{
//     if(name.length <=5){
//         shortNames.push(name);
//         delete users[numNames];
//         numNames ++;
//     }
//     else{numNames++;}
// })
// console.log(shortNames,);
// console.log(users);


// --------- правельное Решение задачи с удалением из массива ------------------------

const users = ['Jack', 'Mariah', 'Sarah', 'Jonathan', 'Piere', 'Bob', 'Samantha', 'Mary'];
const shortNames =[];
const newUsers = users.slice();

newUsers.forEach (name =>{
    if(name.length <=5){
        shortNames.push(name);
        users.splice(users.indexOf(name),1);
    }
})
console.log(shortNames);
console.log(users);



//-----------------------------------------------------------------------------------
// Напишите функцию, которая принимает число в качестве аргумента
// Если число чётное, возводит его в квадрат
// Если числе не чётное, возводит его в куб

function numCubed(num){
    if(num%2===0){
        return num **2;
    }
    else{
        return num **3;
    }
}
console.log(numCubed(8));

//-----------------------------------------------------------------------------------
// Напишитие функцию, которая проверяет, является ли слово палендромом
// Слово палендром читается одинаково слева на право и справа на лево
// Пример - 'rotator'

function palendrome(word){
    word = word.toLowerCase();//если в слове есть большая буква
    if(word === word.split("").reverse().join("")){
        return 'Cлово "'+word+'" является палендромом';
    }
    else{
        return 'Cлово "'+word+'" не является палендромом';
    }
}
console.log(palendrome('rotator'));

//-----------------------------------------------------------------------------------
// напишите функцию которая примет объект 'myCar' в качестве аргумента
// Функция должна вернуть одну строку
// Your Honda Civic (is popular / is not popular). (It is not / it is) covered by warranty anymore!
// Вывод в скобках (is popular) зависит от свойства popular в объекте (т.е. если 'false' то пишем что не популярная)
// Вывод в скобках (Is covered by warranty) зависит от свойства mileage (т.е. если больше или равно 100000 то нет гарантии)
const myCar = {
    make: 'Honda',
    model: 'Civic',
    popular: false,
    mileage: 89425,
}
function popularCar (Car){
    let popular = '';
    let warranty = '';
    if(Car.popular == false){
        popular = 'is not popular';
    }
    else{popular = 'is popular'}
    if(Car.mileage >100000){
        warranty = 'It is not';
    }
    else{warranty = 'It is'}
    return 'Your Honda Civic ('+popular+'). ('+warranty+') covered by warranty anymore!';
}
console.log(popularCar(myCar));