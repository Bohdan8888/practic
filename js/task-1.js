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

// const getPurchaseInfo = (name, price, quantyti) =>{


// const totalPrice = price * quantyti;
// return `You bought ${quantyti} ${name}(s). Total: ${totalPrice}  USD.`


// }




// console.log(getPurchaseInfo('Book', 20, 3))
// // 'You bought 3 Book(s). Total: 60 USD.'

// console.log(getPurchaseInfo('Pen', 5, 4))
// // 'You bought 4 Pen(s). Total: 20 USD.'


/*Task-1*/
// Написати функцію getAverageGrade, яка приймає три оцінки та повертає середній бал, округлений до двох знаків після коми.



// function getAverageGrade(n1, n2, n3) {
//     const total = n1 + n2 + n3;
//     const totalAveraga = total / 3;
//     return totalAveraga.toFixed(2);
// }


// console.log(getAverageGrade(10, 9, 8)); // '9.00'
// console.log(getAverageGrade(12, 10, 9)); // '10.33'
// console.log(getAverageGrade(7, 8, 10)); // '8.33'





// const convertToUah = (summ, convert) =>{
// const totalPrice = summ * convert;
// return totalPrice.toFixed(2)
// };


// console.log(convertToUah(10.5, 41.25)) // '433.13'
// console.log(convertToUah(20, 40.5)) // '810.00'
// console.log(convertToUah(15.75, 42)) // '661.50'




// const getRandomLetter =(words) =>{



// return words[Math.round(Math.random()  * words.length)];


// }

// console.log(getRandomLetter('JavaScript')) // наприклад, 'a'
// console.log(getRandomLetter('Привіт')) // наприклад, 'в'
// console.log(getRandomLetter('Компьютер')) // наприклад, 'п'




// const createProfile = (name, secondName, dateYear) => {


// const lengthName = name.replace(","," ") + secondName.replace("", " ");
// const yearOld =  2026 - dateYear;
// const random = Math.round(Math.random() * 8999 + 1000);


// return `Профіль: ${lengthName}. Вік: ${yearOld}. ID: ${random}.`

// }





// console.log(createProfile('Андрій', 'Коваленко', 2000))
// // 'Профіль: Андрій Коваленко. Вік: 26. ID: 5831. Довжина імені: 16.'


// console.log(createProfile('Марія', 'Шевченко', 1998))
// // 'Профіль: Марія Шевченко. Вік: 28. ID: 1942. Довжина імені: 15.

// const getCandyOrder = (price, onePrice, many) => {
// let totalPrice =  price * onePrice;
// let change =  many - totalPrice;


// return `Вартість: ${totalPrice.toFixed(2)} грн. Решта: ${change.toFixed(2)} грн.`
// };

// console.log(getCandyOrder(5.5, 10, 100))
// 'Вартість: 55.00 грн. Решта: 45.00 грн.'
// console.log(getCandyOrder(7.25, 4, 50))
// 'Вартість: 29.00 грн. Решта: 21.00 грн.'




// const calculateDiscount = (price, firstdDiscounds, secondDiscounds) =>{
// const maxDiscount = Math.max(firstdDiscounds, secondDiscounds);
// const mathMax = maxDiscount * price / 100;
// const priceDiscount  = price - mathMax;
// return `Початкова ціна: ${price.toFixed(2)} грн. Кінцева ціна: ${priceDiscount.toFixed(2)} грн. Економія: ${mathMax.toFixed(2)} грн.`


//  };

// console.log(calculateDiscount(1000, 10, 20))
// 'Початкова ціна: 1000.00 грн. Кінцева ціна: 800.00 грн. Економія: 200.00 грн.'
// console.log(calculateDiscount(500, 15, 10))
// 'Початкова ціна: 500.00 грн. Кінцева ціна: 425.00 грн. Економія: 75.00 грн.'





// const calculateMonthlyExpenses = (priceFood, transport, comunalka, holidays) =>{


// const totalPriceForLife = priceFood + transport + comunalka + holidays;

// const totalPriceMidle = totalPriceForLife / 30;

// const toMatchMany = Math.max(priceFood, transport, comunalka, holidays);

// return `Витрати: ${totalPriceForLife.toFixed(2)} грн. На день: ${totalPriceMidle.toFixed(2)} грн. Найбільша категорія: ${toMatchMany.toFixed(2)} грн.`;

// };
// console.log(calculateMonthlyExpenses(6000, 1500, 2500, 2000))
// 'Витрати: 12000.00 грн. На день: 400.00 грн. Найбільша категорія: 6000.00 грн.'
// console.log(calculateMonthlyExpenses(4000, 3000, 2000, 1000))
// 'Витрати: 10000.00 грн. На день: 333.33 грн. Найбільша категорія: 4000.00 грн.'



