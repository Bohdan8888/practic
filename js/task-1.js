// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'. 

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою  
// перетворіть значення на число за допомогою Number().



// const number = Number(prompt(10));
// if (number ===  10) {
//     alert('Вірно');
    
// } else {
//     alert('не вірно');
    
// }


// Написати функцію getUserInfo, яка приймає ім'я та вік користувача і повертає інформацію про нього у вигляді рядка.

// function getUserInfo(name, age){
// return `${name} is ${age} years old.`



// }




// console.log(getUserInfo('Anna', 25))
// // 'Anna is 25 years old.'

// console.log(getUserInfo('John', 30))
// // 'John is 30 years old.'


// Написати функцію convertMinutesToSeconds, яка приймає кількість хвилин і повертає кількість секунд.
// function convertMinutesToSeconds(minute){

//     const totalMinute = minute * 60;
//     return totalMinute



// }


// console.log(convertMinutesToSeconds(1)) // 60
// console.log(convertMinutesToSeconds(5)) // 300
// console.log(convertMinutesToSeconds(10)) // 600



// Написати функцію getProductCount, яка приймає рядок із кількістю товарів та повертає ціле число.
// function getProductCount(count){
//    return parseInt(count);
// }


// console.log(getProductCount('15 items')) // 15
// console.log(getProductCount('8 products')) // 8
// console.log(getProductCount('100 pieces')) // 100


// Написати функцію sumStrings, яка приймає два рядки з цілими числами, перетворює їх на числа та повертає суму.

// function sumStrings(num1, num2){

// return Number(num1) + Number(num2);
// }

// console.log(sumStrings('10', '20')) // 30
// console.log(sumStrings('15', '5')) // 20
// console.log(sumStrings('100', '200')) // 300

// const greet = (name) =>{
// return `Hello ${name || "Guest"}!`
// }




// console.log(greet('Anna')) // 'Hello, Anna!'
// console.log(greet('Max')) // 'Hello, Max!'
// console.log(greet()) // 'Hello, Guest!



// Написати функцію getPurchaseInfo, яка приймає назву товару, його ціну та кількість. Функція повинна повертати рядок із загальною вартістю покупки.

const getPurchaseInfo = (name, price, quantyti) =>{


const totalPrice = price * quantyti;
return `You bought ${quantyti} ${name}(s). Total: ${totalPrice}  USD.`


}




console.log(getPurchaseInfo('Book', 20, 3))
// 'You bought 3 Book(s). Total: 60 USD.'

console.log(getPurchaseInfo('Pen', 5, 4))
// 'You bought 4 Pen(s). Total: 20 USD.'