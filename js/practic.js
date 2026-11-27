// function checkAge(age) {
// if (age >= 18) {
//     return "Access granted";
// } else {
//     return "Access denied";
// };

// const { use } = require("react");

// };
// console.log(checkAge(20)); // "Access granted"
// console.log(checkAge(17)); // "Access denied"
// console.log(checkAge(18)); // "Access granted"
// console.log(checkAge(12)); // "Access denied"

// function canPurchase(isAvailable, quantity, isBlocked){

// const canShop = isAvailable && !isBlocked && quantity > 0;
// if (canShop) {
//     return canShop;
// } else {
//     return canShop;
// };
// };

// console.log(canPurchase(true, 5, false));  // true
// console.log(canPurchase(false, 5, false)); // false
// console.log(canPurchase(true, 0, false));  // false
// console.log(canPurchase(true, 5, true));   // false
// console.log(canPurchase(false, 0, true));  // false

// function normalizeInput(input, to){

// if (to === "upper") {
//     return input.toUpperCase();
// } else {
//     return input.toLowerCase();
// }
// };

// console.log(normalizeInput("Hello World", "upper"));
// // "HELLO WORLD"

// console.log(normalizeInput("HELLO WORLD", "lower"));
// // "hello world"

// console.log(normalizeInput("Big SALE", "lower"));
// // "big sale"

// console.log(normalizeInput("JavaScript", "upper"));
// // "JAVASCRIPT"

// function  checkForName(fullName, firstName){
// const lowerCaseFirstName = firstName.toLowerCase();
// const lowerCaseFullName = fullName.toLowerCase();

// return lowerCaseFullName.includes(lowerCaseFirstName);

// };
// console.log(checkForName("Bohdan Sharyha", "Bohdan")); // true
// console.log(checkForName("Bohdan Sharyha", "bohdan")); // true
// console.log(checkForName("Bohdan Sharyha", "Alex"));   // false
// console.log(checkForName("John Smith", "JOHN"));       // true
// console.log(checkForName("John Smith", "Peter"));
//     // false

// function checkFileExtension(fileName, ext){

//  if (fileName.endsWith(ext)) {
//     return "File extension matches";
//  } else {
//     return "File extension does not match";
//  }
// };
// console.log(checkFileExtension("index.html", ".html"));
// console.log(checkFileExtension("styles.css", ".js"));
// console.log(checkFileExtension("app.js", ".js"));

// function checkImage (fileName){
// if (fileName.endsWith(".jpg")) {
//     return "Valid image";
// } else {
//     return "Invalid image";
// }

// } ;
// console.log(checkImage("monstera.jpg"));
// // "Valid image"

// console.log(checkImage("plant.png"));
// // "Invalid image"

// console.log(checkImage("flower.jpg"));
// // "Valid image"

// console.log(checkImage("photo.pdf"));

// // "Invalid image"

// function checkUsername(username){
//     if (username.startsWith("user_")) {

//         return "Username is valid";
//     } else {

//        return "Username is invalid";
//     }
// };
// console.log(checkUsername("user_bohdan"));
// // "Username is valid"

// console.log(checkUsername("admin_bohdan"));
// // "Username is invalid"

// console.log(checkUsername("user_alex"));
// // "Username is valid"

// console.log(checkUsername("guest_123"));
// // "Username is invalid"

// function  checkForWord(message, word){
//     if (message.includes(word)) {
//         return true;
//     } else {
//         return false;
//     }
// };
// console.log(checkForWord("Hello Plantora", "Plantora"));
// // true

// console.log(checkForWord("Hello Plantora", "JavaScript"));
// // false

// console.log(checkForWord("I love programming", "love"));
// // true

// console.log(checkForWord("Monstera is beautiful", "rose"));
// // false

// function createUsername(username){
//     return username.trim()
// };
// console.log(createUsername("  Bohdan  "));
// // "Bohdan"

// console.log(createUsername("Alex   "));
// // "Alex"

// console.log(createUsername("  Mark"));
// // "Mark"

// console.log(createUsername("John"));
// // "John"

// function  getFileName(file){
//     const dotIndex = file.indexOf(".");
// if (dotIndex !== -1) {
//     return file.slice(0, dotIndex);
// } else {
//     return file;
// }
// };
// console.log(getFileName("styles.css")); // "styles"
// console.log(getFileName("app.js"));     // "app"
// console.log(getFileName("index.html")); // "index"
// console.log(getFileName("app"));        // "app"
// console.log(getFileName("index"));      // "index"

// function checkForSpam(message){
// message = message.toLowerCase(message);
// if (message.includes("spam")) {
//     return true;
// }else if(message.includes("sale")) {
// return true;
// }
// else {
//     return false;
// }

// };
// console.log(checkForSpam("Latest technology news")); // false
// console.log(checkForSpam("JavaScript weekly newsletter")); // false
// console.log(checkForSpam("Get best sale offers now!")); // true
// console.log(checkForSpam("Amazing SalE, only tonight!")); // true
// console.log(checkForSpam("Trust me, this is not a spam message")); // true
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

// function getShippingCost(country, price){
// switch (country) {
//     case "Australia":
//      return `Shipping to ${country} will cost 170 credits`;

//       case "China":
//         return `Shipping to ${country} will cost 100 credits`;
//         case "Chile":
//              return `Shipping to ${country} will cost 250 credits`;
//              case "Jamaica":
//                 return `Shipping to ${country} will cost 120 credits`;
//     default:
//         return "Sorry, there is no delivery to your country";

// }
// };

// console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
// console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
// console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
// console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
// console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"

// function slugify(title){
// const toLower = title.toLowerCase();
// const wordsSplit = toLower.split(" ");
// const joinWords = wordsSplit.join("-");
// return joinWords;
// };

// console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
// console.log(slugify("English for developer")); // "english-for-developer"
// console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"

// function makeArray(firstArray, secondArray, maxLength){
// const newArrey = firstArray.concat(secondArray);

// if(newArrey.length > maxLength)
//     return newArrey.slice(0, maxLength)
// else{
//     return newArrey;
// }

// };

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []

// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   for (const number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
// };

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

//  function slugify(title){
//    const titleLowercase = title.toLowerCase();
//    const splitTitle = titleLowercase.split(" ")
//    const joinTitle = splitTitle.join("-")
// return joinTitle;
//  };
//  console.log(slugify("My First Website"));
// // "my-first-website"

// console.log(slugify("Learn JavaScript"));
// // "learn-javascript"

// console.log(slugify("FRONTEND DEVELOPER"));
// // "frontend-developer"

// function makeSlug(title, separator){
//   const lowerCaseTitle = title.toLowerCase();
//   const sliceTitle = lowerCaseTitle.split(" ");
//   const joinTitle = sliceTitle.join(separator);

// return joinTitle;

// }

// console.log(makeSlug("Hello World", "_"));
// // "hello_world"

// console.log(makeSlug("JavaScript Course", "-"));
// // "javascript-course"

// console.log(makeSlug("My New Project", "."));

// // "my.new.project"

// function createSlug(title){
// const trimTitle = title.trim();
// const lowerTitle = trimTitle.toLowerCase();
// const splitTitle =lowerTitle.split(" ");
// const joinTitle = splitTitle.join("-");
// return joinTitle;

// }
// console.log(createSlug("  HELLO MY FRIEND  "));
// // "hello-my-friend"

// console.log(createSlug("  JavaScript Course "));
// // "javascript-course"

// console.log(createSlug("  MY FIRST PROJECT  "));

// // "my-first-project"

// function countWords(text){
// const splitText = text.split(" ");
// return splitText.length;
// }
// console.log(countWords("Hello World")); // 2
// console.log(countWords("JavaScript is awesome")); // 3
// console.log(countWords("I love programming")); // 3
// console.log(countWords("Frontend Developer")); // 2
// console.log(countWords("Learn JavaScript today")); // 3

// function getFirstTwoWords(text){
// const splitText = text.split(" ");
// const sliceText = splitText.slice(0, 2);
// const joinText = sliceText.join(" ")
// return joinText;
// }
// console.log(getFirstTwoWords("JavaScript is awesome"));
// // "JavaScript is"

// console.log(getFirstTwoWords("Learn frontend development"));
// // "Learn frontend"

// console.log(getFirstTwoWords("HTML CSS JavaScript"));
// // "HTML CSS"

// console.log(getFirstTwoWords("React Developer Course"));
// // "React Developer"

// function formatTitle(title){
//   const lowerTitle = title.toLowerCase();
//   const splitTitle = lowerTitle.split(" ");
//   ;
//   const joinTitle = splitTitle.join("_");
//  return joinTitle;
// };
// console.log(formatTitle("My First Project"));
// // "my_first_project"

// console.log(formatTitle("LEARN HTML CSS"));
// // "learn_html_css"

// console.log(formatTitle("JavaScript For Beginners"));
// // "javascript_for_beginners"

// console.log(formatTitle("FRONTEND DEVELOPER"));
// // "frontend_developer"

// function createShortSlug(title, maxLength){
//   const lowerTitle = title.toLowerCase();
//   const splitTitle = lowerTitle.split(" ");
//   const joinTitle = splitTitle.join("-");

//   if (joinTitle.length > maxLength) {

//     return  joinTitle.slice(0, maxLength);
//   } else {
//     return joinTitle;
//   }
// }
// console.log(createShortSlug("JavaScript for beginners", 10));
// // "javascript"

// console.log(createShortSlug("Frontend Developer", 8));
// // "frontend"

// console.log(createShortSlug("Hello World", 20));
// // "hello-world"

// console.log(createShortSlug("My First Project", 7));
// // "my-firs"

// function shortenDescription(description, maxLength){

//   const lowerDescription = description.toLowerCase();
//    if (lowerDescription.length > maxLength) {
//     return lowerDescription.slice(0, maxLength)
//    } else {
//     return lowerDescription;
//    }
// }
// console.log(shortenDescription("Beautiful Monstera Plant", 9));
// // "beautiful"

// console.log(shortenDescription("Green Cactus", 20));
// // "green cactus"

// console.log(shortenDescription("JavaScript Developer", 5));
// // "javas"

// console.log(shortenDescription("Hello World", 11));
// // "hello world"

// function prepareTitle(title, maxLength){
// const lowerTitile = title.toLowerCase();
// const trimTitle = lowerTitile.trim();
// const splitTitle = trimTitle.split(" ");
// const joinTitle = splitTitle.join("-");
// if (joinTitle.length > maxLength) {
//   return joinTitle.slice(0, maxLength);
// } else {
//   return joinTitle;
// }
// };
// console.log(prepareTitle("  BIG SALE TODAY  ", 10));
// // "big-sale-t"

// console.log(prepareTitle("  My Project  ", 20));
// // "my-project"

// console.log(prepareTitle("  Frontend Course  ", 8));
// // "frontend"

// console.log(prepareTitle("  JavaScript Developer  ", 17));
// // "javascript-develo"

// function getOddNumbers(numbers){
//    const newNumber = [];
//    for(let i = 0; i < numbers.length; i++){
// if(numbers[i] % 2 === 1){
// newNumber.push(numbers[i])
// }

//    }
// return newNumber;
// };
// console.log(getOddNumbers([1, 2, 3, 4, 5]));
// // [1, 3, 5]

// console.log(getOddNumbers([10, 15, 20, 25]));
// // [15, 25]

// console.log(getOddNumbers([2, 4, 6]));
// // []

// console.log(getOddNumbers([7, 9, 11]));
// // [7, 9, 11]

//   const user = {
//   name: "Bohdan",
//   age: 27,
//   city: "Odesa"
// };

//   function updateAge(user, newAge){
//    user.age = newAge;
//    return user;
//   }

// console.log(updateAge(user, 28));
// // { name: "Bohdan", age: 28, city: "Odesa" }

// console.log(updateAge(user, 30));
// // { name: "Bohdan", age: 30, city: "Odesa" }

// const product = {
//   name: "Monstera",
//   price: 80,
//   quantity: 5,
//   isAvailable: true
// };

// function checkProduct(product){
// if (product.isAvailable === true && product.quantity > 0) {
//     return "Product available";
// } else {
//     return "Product unavailable";
// }
// }

// console.log(checkProduct({
//   name: "Monstera",
//   price: 80,
//   quantity: 5,
//   isAvailable: true
// }));
// // "Product available"

// console.log(checkProduct({
//   name: "Cactus",
//   price: 25,
//   quantity: 0,
//   isAvailable: true
// }));
// // "Product unavailable"

// console.log(checkProduct({
//   name: "Orchid",
//   price: 120,
//   quantity: 3,
//   isAvailable: false
// }));
// // "Product unavailable"

// console.log(checkProduct({
//   name: "Rose",
//   price: 15,
//   quantity: 0,
//   isAvailable: false
// }));
// // "Product unavailable"

// const cart = {
//   items: 3,
//   price: 40,
//   discount: 20
// };

// function calculateCartTotal(cart){
// return cart.items * cart.price - cart.discount;
// };

// console.log(calculateCartTotal({
//   items: 3,
//   price: 40,
//   discount: 20
// }));
// // 100

// console.log(calculateCartTotal({
//   items: 2,
//   price: 50,
//   discount: 10
// }));
// // 90

// console.log(calculateCartTotal({
//   items: 5,
//   price: 15,
//   discount: 0
// }));
// // 75

// const products = [
//   { name: "Monstera", price: 80 },
//   { name: "Cactus", price: 25 },
//   { name: "Orchid", price: 120 }
// ];

// function getProductNames(products){
// const newProduct =  [];
// for (const i of products) {
//     newProduct.push(i.name)
// }
// return newProduct;
// };
// console.log(getProductNames(products));
// // ["Monstera", "Cactus", "Orchid"]

// const products = [
//   { name: "Monstera", price: 80 },
//   { name: "Cactus", price: 25 },
//   { name: "Orchid", price: 120 }
// ];

// function getTotalPrice(products){
// let totalPrice = 0;
// for (const i of products) {
//    totalPrice = totalPrice + i.price
// }
// return totalPrice
// };

// console.log(getTotalPrice(products));
// // 225

// console.log(getTotalPrice([
//   { name: "Rose", price: 15 },
//   { name: "Tulip", price: 10 }
// ]));
// // 25

// console.log(getTotalPrice([]));
// // 0

// const products = [
//   { name: "Monstera", price: 80 },
//   { name: "Cactus", price: 25 },
//   { name: "Orchid", price: 120 },
//   { name: "Rose", price: 15 }
// ];
// function getExpensiveProducts(products, minPrice){
//   const newPprice = [];
//   for (const product of products) {
//     if (product.price > minPrice) {
//         newPprice.push(product)
//     }
//   }
//   return newPprice;
// };

// console.log(getExpensiveProducts(products, 50));
// // [
// //   { name: "Monstera", price: 80 },
// //   { name: "Orchid", price: 120 }
// // ]

// console.log(getExpensiveProducts(products, 100));
// // [
// //   { name: "Orchid", price: 120 }
// // ]

// console.log(getExpensiveProducts(products, 150));
// // []

// function calculateTotal(price){
// let calculatePrice = 0;
// for (const i of price) {
// calculatePrice += i;
// }
// return calculatePrice;
// };
// console.log(calculateTotal([25, 40, 15, 80, 30]));
// // 190

// console.log(calculateTotal([10, 20, 30]));
// // 60

// console.log(calculateTotal([]));
// // 0
// const products = [
//   { name: "Monstera", price: 80 },
//   { name: "Cactus", price: 25 },
//   { name: "Orchid", price: 120 },
//   { name: "Rose", price: 15 },
//   { name: "Palm", price: 90 }
// ];

// function getAffordableProducts(products, budget){
// const newArrea = [];
// for (const i of products) {
//   if (i.price <= budget) {
//     newArrea.push(i);
//   }
// }
// return newArrea;
// };

// console.log(getAffordableProducts(products, 80));
// // Monstera, Cactus, Rose

// console.log(getAffordableProducts(products, 30));
// // Cactus, Rose

// console.log(getAffordableProducts(products, 10));
// // []

// console.log(getAffordableProducts(products, 120));
// // Все пять товаров

// const users = [
//   { name: "Bohdan", age: 27 },
//   { name: "Alex", age: 16 },
//   { name: "John", age: 32 },
//   { name: "Mark", age: 19 },
//   { name: "Anna", age: 15 }
// ];

//  function getAdultUsers(users){

//   const invalidAge = [];

// for (const i of users) {
//   if (i.age >= 18) {
//     invalidAge.push(i);
//   }
// }
// return invalidAge;
//  };

//  console.log(getAdultUsers(users));
// // [
// //   { name: "Bohdan", age: 27 },
// //   { name: "John", age: 32 },
// //   { name: "Mark", age: 19 }
// // ]

// console.log(getAdultUsers([
//   { name: "Alex", age: 16 },
//   { name: "Anna", age: 15 }
// ]));
// // []

// const products = [
//   { name: "Monstera", category: "Plants", price: 80 },
//   { name: "Rose", category: "Flowers", price: 25 },
//   { name: "Cactus", category: "Plants", price: 40 },
//   { name: "Tulip", category: "Flowers", price: 15 },
//   { name: "Palm", category: "Plants", price: 100 }
// ];

// function getProductsByCategory(products, category){
// const invalidproduct = [];

// for (const i of products) {
//   if (i.category === category) {
//     invalidproduct.push(i)
//   }
// }
// return invalidproduct;
// };

// console.log(getProductsByCategory(products, "Plants"));
// // Monstera, Cactus, Palm

// console.log(getProductsByCategory(products, "Flowers"));
// // Rose, Tulip

// console.log(getProductsByCategory(products, "Furniture"));
// // []

// const cart = [
//   { name: "Monstera", price: 80, quantity: 2 },
//   { name: "Cactus", price: 25, quantity: 3 },
//   { name: "Orchid", price: 120, quantity: 1 }
// ];

// function calculateCartTotal(cart){
// let totalCart = 0;
// for (let i of cart) {
//  totalCart += i.price * i.quantity;

// }
// return totalCart;
// };

// console.log(calculateCartTotal(cart));
// // 355

// console.log(calculateCartTotal([
//   { name: "Rose", price: 10, quantity: 5 },
//   { name: "Tulip", price: 20, quantity: 2 }
// ]));
// // 90

// console.log(calculateCartTotal([]));
// // 0

// const user = {
//   name: "Bohdan",
//   age: 27,
//   city: "Odesa",
//   profession: "Developer"
// };

// function countProperties(user){
//    const keys = Object.keys(user);

// return keys.length;
// };

// console.log(countProperties(user));
// // 4

// console.log(countProperties({
//   name: "Alex",
//   age: 25
// }));
// // 2

// console.log(countProperties({}));
// // 0

// const product = {
//   name: "Monstera",
//   price: 80,
//   quantity: 5,
//   category: "Plants"
// };

// function getPropertyValues(product){
// const value = Object.values(product);
// return value;

// };
// console.log(getPropertyValues(product));
// // ["Monstera", 80, 5, "Plants"]

// console.log(getPropertyValues({
//   name: "Cactus",
//   price: 25
// }));
// // ["Cactus", 25]

// console.log(getPropertyValues({}));
// // []

// const user = {
//   name: "Bohdan",
//   age: 27,
//   city: "Odesa"
// };

// function getUserData(user){
// const keys = Object.keys(user);

// const values = Object.values(user);

//  const concatMasiwe = [keys, values];

// return concatMasiwe;

// };
// console.log(getUserData(user));
// // [["name", "age", "city"], ["Bohdan", 27, "Odesa"]]

// console.log(getUserData({
//   product: "Laptop",
//   price: 1200
// }));
// // [["product", "price"], ["Laptop", 1200]]

// console.log(getUserData({}));
// // [[], []]

// const prices = {
//   Monstera: 80,
//   Cactus: 25,
//   Orchid: 120,
//   Rose: 15
// };

// function getTotalPrice(prices){
// let value = Object.values(prices);

// let total = 0 ;
// for (let i of value) {
// total += i;
// }

// return total;
// }

// console.log(getTotalPrice(prices));
// // 240

// console.log(getTotalPrice({
//   Laptop: 1200,
//   Mouse: 50,
//   Keyboard: 100
// }));
// // 1350

// console.log(getTotalPrice({}));
// // 0

// function isEnoughCapacity(products, containerSize){
// const value = Object.values(products);
// let productSize = 0;

// for (const product of value) {
//   productSize += product;

// }
// return productSize <= containerSize;

// };
// console.log(
//   isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
// ); // true

// console.log(
//   isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
// ); // false

// console.log(
//   isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
// ); // true

// console.log(
//   isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
// ); // false

// function calcAverageCalories(days){

// if (days.length === 0 ) {
//   return 0;
// }

// let totalCalories = 0;

// for (const day of days) {
//   totalCalories += day.calories;
// }
// return totalCalories / days.length

// };

// console.log(
//   calcAverageCalories([
//     { day: "monday", calories: 3010 },
//     { day: "tuesday", calories: 3200 },
//     { day: "wednesday", calories: 3120 },
//     { day: "thursday", calories: 2900 },
//     { day: "friday", calories: 3450 },
//     { day: "saturday", calories: 3280 },
//     { day: "sunday", calories: 3300 }
//   ])
// ); // 3180

// console.log(
//   calcAverageCalories([
//     { day: "monday", calories: 2040 },
//     { day: "tuesday", calories: 2270 },
//     { day: "wednesday", calories: 2420 },
//     { day: "thursday", calories: 1900 },
//     { day: "friday", calories: 2370 },
//     { day: "saturday", calories: 2280 },
//     { day: "sunday", calories: 2610 }
//   ])
// ); // 2270

// console.log(
//   calcAverageCalories([])
// ); // 0

// const profile = {
//     username: "Jacob",
//   playTime: 300,

// changeUsername(newName){

// this.username = newName;

// },

// updatePlayTime(hours){

// this.playTime += hours;
// },

// getInfo(){
// return `${this.username} has ${this.playTime} active hours!`;
// }

// };
// console.log(profile.getInfo()); // "Jacob has 300 active hours!"

// profile.changeUsername("Marco");
// console.log(profile.getInfo()); // "Marco has 300 active hours!"

// profile.updatePlayTime(20);
// console.log(profile.getInfo()); // "Marco has 320 active hours!"

// function countPositiveNumbers(numbers){
// let count = 0;

// for (const number of numbers) {
//     if (number > 0) {
//         count++;
//     }
// }
// return count;

// };

// console.log(countPositiveNumbers([1, -2, 5, -8, 10]));
// // 3

// console.log(countPositiveNumbers([-1, -5, -10]));
// // 0

// console.log(countPositiveNumbers([2, 4, 6]));
// // 3

// function findMaxNumber(numbers){
// let maxNumber = -Infinity;

// for (const number of numbers) {

//     if (number > maxNumber) {
//        maxNumber = number;
//     }
// }

// return maxNumber;

// };

// console.log(findMaxNumber([5, 10, 3, 25, 8]));
// // 25

// console.log(findMaxNumber([100, 50, 200, 30]));
// // 200

// console.log(findMaxNumber([-5, -2, -10]));
// // -2

// console.log(findMaxNumber([7]));
// // 7

// function countOccurrences(numbers, target){
// let count = 0;
// for (const number of numbers) {
//      if (number === target) {
//         count++
//      }
// }

// return count;
// };

// console.log(countOccurrences([1, 2, 3, 2, 4, 2], 2));
// // 3

// console.log(countOccurrences([5, 5, 5, 5], 5));
// // 4

// console.log(countOccurrences([1, 3, 5], 2));
// // 0

// console.log(countOccurrences([], 10));
// // 0

// const users = [
//   { name: "Bohdan", isActive: true },
//   { name: "Alex", isActive: false },
//   { name: "John", isActive: true },
//   { name: "Anna", isActive: false },
//   { name: "Mark", isActive: true }
// ];

// function getActiveUsers(users){
// const activeUser = [];
// for (const user of users) {
//     if (user.isActive === true) {
//        activeUser.push(user)
//     }
// }
// return  activeUser;
// };

// console.log(getActiveUsers(users));
// // Bohdan, John, Mark

// console.log(getActiveUsers([
//   { name: "Alex", isActive: false },
//   { name: "Anna", isActive: false }
// ]));
// // []

// console.log(getActiveUsers([]));
// // []

// const users = [
//   { name: "Bohdan", age: 27 },
//   { name: "Alex", age: 16 },
//   { name: "John", age: 32 },
//   { name: "Anna", age: 22 }
// ];

// function findUser(users, userName){

// for (const user of users) {

//     if (user.name === userName) {
//   return user;
//     }
// }

//    return null;

// };

// console.log(findUser(users, "John"));
// // { name: "John", age: 32 }

// console.log(findUser(users, "Bohdan"));
// // { name: "Bohdan", age: 27 }

// console.log(findUser(users, "Mark"));
// // null

// console.log(findUser([], "Alex"));
// // null

// const products = [
//   { name: "Monstera", price: 80 },
//   { name: "Cactus", price: 25 },
//   { name: "Orchid", price: 120 },
//   { name: "Rose", price: 15 }
// ];

// function findMostExpensiveProduct(products){
// let maxPrice = -Infinity;
// let expensiveProduct = null;

// for (const product of products) {

//     if (product.price > maxPrice) {
//         maxPrice = product.price;
//         expensiveProduct = product;
//     }
// }
// return expensiveProduct;

// };

// console.log(findMostExpensiveProduct(products));
// // { name: "Orchid", price: 120 }

// console.log(findMostExpensiveProduct([
//   { name: "Laptop", price: 1200 },
//   { name: "Mouse", price: 50 }
// ]));
// // { name: "Laptop", price: 1200 }

// const products = [
//   { name: "Monstera", price: 80, discount: true },
//   { name: "Cactus", price: 25, discount: false },
//   { name: "Orchid", price: 120, discount: true },
//   { name: "Rose", price: 15, discount: false }
// ];

// function getDiscountedProducts(products){
// let productDiscount = [];

// for (const product of products) {
//     if (product.discount === true) {
//         productDiscount.push(product)
//     }
// }
// return productDiscount;

// };
// console.log(getDiscountedProducts(products));
// // Monstera и Orchid

// console.log(getDiscountedProducts([
//   { name: "Laptop", price: 1200, discount: false },
//   { name: "Mouse", price: 50, discount: false }
// ]));
// // []

// console.log(getDiscountedProducts([]));
// // []

// const users = [
//   { name: "Bohdan", age: 27 },
//   { name: "Alex", age: 16 },
//   { name: "John", age: 32 },
//   { name: "Mark", age: 19 },
//   { name: "Anna", age: 15 }
// ];

// function getUsersByAge(users, minAge){
// let ageValid = [];

// for (const user of users) {
//     if (user.age >= minAge) {
//         ageValid.push(user)
//     }
// }
// return ageValid;

// };

// console.log(getUsersByAge(users, 18));
// // Bohdan, John, Mark

// console.log(getUsersByAge(users, 30));
// // John

// console.log(getUsersByAge(users, 40));
// // []

// console.log(getUsersByAge([], 18));
// // []

// const products = [
//   { name: "Monstera", price: 80 },
//   { name: "Cactus", price: 25 },
//   { name: "Orchid", price: 120 },
//   { name: "Rose", price: 15 }
// ];

// function findProduct(products, productName){
// for (const product of products) {
//     if (product.name === productName) {
//         return product;
//     }
// }
// return null;

// };

// console.log(findProduct(products, "Orchid"));
// // { name: "Orchid", price: 120 }

// console.log(findProduct(products, "Cactus"));
// // { name: "Cactus", price: 25 }

// console.log(findProduct(products, "Palm"));
// // null

// console.log(findProduct([], "Rose"));
// // null

// const products = [
//   { name: "Monstera", price: 80 },
//   { name: "Cactus", price: 25 },
//   { name: "Orchid", price: 120 },
//   { name: "Rose", price: 15 },
//   { name: "Palm", price: 90 }
// ];

// function findFirstExpensiveProduct(products, minPrice){

// for (const product of products) {
//     if (product.price > minPrice) {
//         return product;
//     }
// }

// return null;

// };

// console.log(findFirstExpensiveProduct(products, 50));
// // { name: "Monstera", price: 80 }

// console.log(findFirstExpensiveProduct(products, 100));
// // { name: "Orchid", price: 120 }

// console.log(findFirstExpensiveProduct(products, 150));
// // null

// console.log(findFirstExpensiveProduct([], 50));
// // null

// const numbers = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

//  function getAllNumbers(numbers){
// let newMasive = [];
// for (const number of numbers) {
//     newMasive.push(...number);
// }

// return newMasive;

//  };

//  console.log(getAllNumbers([[1, 2], [3, 4]]));
// // [1, 2, 3, 4]

// console.log(getAllNumbers([[5, 6], [7, 8], [9]]));
// // [5, 6, 7, 8, 9]

// console.log(getAllNumbers([]));
// // []

// function mergeArrays(first, second){
// let totalMasive = [...first, ...second];
// return totalMasive;

// };

// console.log(mergeArrays([1, 2], [3, 4]));
// // [1, 2, 3, 4]

// console.log(mergeArrays(["A", "B"], ["C"]));
// // ["A", "B", "C"]

// console.log(mergeArrays([], [10, 20]));
// // [10, 20]

// console.log(mergeArrays([5, 6], []));
// // [5, 6]

// const user = {
//   name: "Bohdan",
//   age: 27,
//   city: "Odesa"
// };
// function updateUser(user, newAge){
// const updatedUser = {
//     ...user,
//     age: newAge
// };
// return updatedUser;
// }

// const updatedUser = updateUser(user, 28);

// console.log(updatedUser);
// // { name: "Bohdan", age: 28, city: "Odesa" }

// console.log(user);
// // { name: "Bohdan", age: 27, city: "Odesa" }

// const product = {
//   name: "Monstera",
//   price: 80
// };

// function addCategory(product, category){
// const newCategory = {
// ...product,
// category: category

// };

// return newCategory;
// };

// console.log(addCategory(product, "Plants"));
// // { name: "Monstera", price: 80, category: "Plants" }

// console.log(product);
// // { name: "Monstera", price: 80 }

// function calculateSum(...numbers){

// let newNumber = 0;

//     for (const number of numbers) {
//         newNumber += number
//     }
//     return newNumber;
// };
// console.log(calculateSum(10, 20));
// // 30

// console.log(calculateSum(5, 10, 15));
// // 30

// console.log(calculateSum(1, 2, 3, 4, 5));
// // 15

// console.log(calculateSum());
// // 0

// function showFirstAndRest(first, ...others){

// return {first, others};
// };

// console.log(showFirstAndRest("Bohdan", 27, "Odesa"));
// // { first: "Bohdan", others: [27, "Odesa"] }

// console.log(showFirstAndRest("Alex", 25, "Kyiv", true));
// // { first: "Alex", others: [25, "Kyiv", true] }

// console.log(showFirstAndRest("John"));
// // { first: "John", others: [] }

// const fruits = ["apple", "banana", "orange", "pear", "kiwi"];

// function getFirstAndRemaining(fruits){

// const [first, ...remaining] = fruits;
// return {first, remaining}

// };

// console.log(getFirstAndRemaining(["apple", "banana", "orange"]));
// // { first: "apple", remaining: ["banana", "orange"] }

// console.log(getFirstAndRemaining(["Monstera", "Cactus"]));
// // { first: "Monstera", remaining: ["Cactus"] }

//////////////////////////////////////////////////////////////////

// const getUserNames = (users) =>{

// let  userName = [];
// for (const user of users) {
//    userName.push(user.name);
// }
// return userName;

// };

// console.log(
//   getUserNames([
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       balance: 2811
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       balance: 3821
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       balance: 3793
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       balance: 2278
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       balance: 3951
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       balance: 1498
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       balance: 2764
//     }
//   ])
// ); // ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]

// const getUsersWithFriend = (users, friendName) => {

//   return users.filter(user => user.friends.includes(friendName));

// };

// //////////////////////////////////////////////////////////////////

// const allUsers = [
//   {
//     name: "Moore Hensley",
//     friends: ["Sharron Pace"]
//   },
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"]
//   },
//   {
//     name: "Ross Vazquez",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"]
//   },
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"]
//   },
//   {
//     name: "Carey Barr",
//     friends: ["Jordan Sampson", "Eddie Strong"]
//   },
//   {
//     name: "Blackburn Dotson",
//     friends: ["Jacklyn Lucas", "Linda Chapman"]
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"]
//   }
// ];

// console.log(getUsersWithFriend(allUsers, "Briana Decker"));
// // [
// //   {
// //     name: "Sharlene Bush",
// //     friends: ["Briana Decker", "Sharron Pace"]
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     friends: ["Goldie Gentry", "Briana Decker"]
// //   }
// // ]

// console.log(getUsersWithFriend(allUsers, "Goldie Gentry"));
// // [
// //   {
// //     name: "Elma Head",
// //     friends: ["Goldie Gentry", "Aisha Tran"]
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     friends: ["Goldie Gentry", "Briana Decker"]
// //   }
// // ]

// console.log(getUsersWithFriend(allUsers, "Adrian Cross" )); // []

///////////////////////////////////////////////////////////

// const sortByDescendingFriendCount = (users) =>{

// return users.toSorted((a, b) => b.friends.length - a.friends.length);

// };

// console.log(
//   sortByDescendingFriendCount([
//     {
//       name: "Moore Hensley",
//       friends: ["Sharron Pace"],
//       gender: "male"
//     },
//     {
//       name: "Sharlene Bush",
//       friends: ["Briana Decker", "Sharron Pace"],
//       gender: "female"
//     },
//     {
//       name: "Ross Vazquez",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       gender: "male"
//     },
//     {
//       name: "Elma Head",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       gender: "female"
//     },
//     {
//       name: "Carey Barr",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       gender: "male"
//     },
//     {
//       name: "Blackburn Dotson",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       gender: "male"
//     },
//     {
//       name: "Sheree Anthony",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       gender: "female"
//     }
//   ])
// );
// [
//   {
//     name: "Ross Vazquez",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"],
//     gender: "female"
//   },
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     gender: "female"
//   },
//   {
//     name: "Moore Hensley",
//     friends: ["Sharron Pace"],
//     gender: "male"
//   }
// ]

///////////////////////////////////////////////////////////////////////////////////^

// const getTotalBalanceByGender = (users, gender) => {
//   return users
//     .filter(user => user.gender === gender)
//     .map(user => user.balance)
//     .reduce((total, balance) => total + balance, 0);
// };
// const clients = [
//   {
//     name: "Moore Hensley",
//     gender: "male",
//     balance: 2811
//   },
//   {
//     name: "Sharlene Bush",
//     gender: "female",
//     balance: 3821
//   },
//   {
//     name: "Ross Vazquez",
//     gender: "male",
//     balance: 3793
//   },
//   {
//     name: "Elma Head",
//     gender: "female",
//     balance: 2278
//   },
//   {
//     name: "Carey Barr",
//     gender: "male",
//     balance: 3951
//   },
//   {
//     name: "Blackburn Dotson",
//     gender: "male",
//     balance: 1498
//   },
//   {
//     name: "Sheree Anthony",
//     gender: "female",
//     balance: 2764
//   }
// ];

// console.log(getTotalBalanceByGender(clients, "male")); // 12053
// console.log(getTotalBalanceByGender(clients, "female")); // 8863
// let apple = 30;
// let grape = 100;
// let total = apple += grape;
//  console.log(`total fruit = ${total}`);

// const products = [
//   { name: "Monstera", price: 80, discount: true },
//   { name: "Cactus", price: 25, discount: false },
//   { name: "Orchid", price: 120, discount: true },
//   { name: "Rose", price: 15, discount: false },
//   { name: "Palm", price: 90, discount: true }
// ];

//  const getDiscountTotal = (products) => {

//   const total = products

//   .filter(product => product.discount === true)
//   .map(product => product.price)
//   .reduce((total, price) => total + price, 0);
//   return total;
//  };

//  console.log(getDiscountTotal(products));
// // 290

// console.log(getDiscountTotal([
//   { name: "Laptop", price: 1000, discount: false },
//   { name: "Mouse", price: 50, discount: true }
// ]));
// // 50

// console.log(getDiscountTotal([]));
// // 0

// const users = [
//   { name: "Bohdan", balance: 1200, isActive: true },
//   { name: "Alex", balance: 800, isActive: false },
//   { name: "John", balance: 2000, isActive: true },
//   { name: "Anna", balance: 1000, isActive: true }
// ];

// const getAverageActiveBalance = (users) =>{
// const activeUser = users.filter(user => user.isActive === true);

// const totalBalance = activeUser
// .map(user => user.balance)
// .reduce((total, balance) => total + balance, 0)

// return activeUser.length === 0 ? 0 :
// totalBalance / activeUser.length;

// };

// console.log(getAverageActiveBalance(users));
// // 1400

// console.log(getAverageActiveBalance([
//   { name: "Alex", balance: 500, isActive: false },
//   { name: "John", balance: 1500, isActive: true }
// ]));
// // 1500

// console.log(getAverageActiveBalance([]));
// // 0

// const products = [
//   { name: "Monstera", price: 80, isAvailable: true },
//   { name: "Cactus", price: 25, isAvailable: false },
//   { name: "Orchid", price: 120, isAvailable: true },
//   { name: "Rose", price: 40, isAvailable: false },
//   { name: "Palm", price: 100, isAvailable: true }
// ];

// const getAveragePrice = (products) =>{

// const newAverage =  products.filter(product => product.isAvailable);
// const totalPrice = newAverage
// .map(product => product.price)
// .reduce ((total, price) => total + price, 0);

// return totalPrice === 0 ? 0 : totalPrice / newAverage.length;

// }

// console.log(getAveragePrice(products));
// // 100

// console.log(getAveragePrice([
//   { name: "Laptop", price: 1000, isAvailable: true },
//   { name: "Mouse", price: 100, isAvailable: false }
// ]));
// // 1000

// console.log(getAveragePrice([
//   { name: "Keyboard", price: 200, isAvailable: false }
// ]));
// // 0

// console.log(getAveragePrice([]));

// // 0

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "horror"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];

// const genres = books.flatMap(book => book.genres);
// const newMasive = [...new Set(genres)];
// console.log(newMasive);
// console.log(genres);

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

// const products = [
//   { name: "Monstera", price: 80 },
//   { name: "Cactus", price: 25 },
//   { name: "Orchid", price: 120 }
// ];
// const productCards = products.map(product => {
//   return `
//     <div class="product-card">
//       <h2>${product.name}</h2>
//       <p>${product.price} грн.</p>
//     </div>
//   `;
// });

// document.querySelector(".products").innerHTML = productCards.join("");

// const users = [
//   { name: "Bohdan", age: 27, isActive: true },
//   { name: "Alex", age: 16, isActive: false },
//   { name: "John", age: 32, isActive: true },
//   { name: "Anna", age: 22, isActive: false },
//   { name: "Mark", age: 19, isActive: true }
// ];

// const getActiveUserNames = (users) =>{

//     const isActiveUser = users
//     .filter(user => user.isActive === true)
//     .map( user => user.name);
//     return isActiveUser;

// };
// console.log(getActiveUserNames(users));
// // ["Bohdan", "John", "Mark"]

// console.log(getActiveUserNames([
//   { name: "Alex", age: 16, isActive: false },
//   { name: "Anna", age: 22, isActive: false }
// ]));
// // []

// console.log(getActiveUserNames([]));

// // []

// const users = [
//   { name: "Bohdan", age: 27, balance: 1200 },
//   { name: "Alex", age: 16, balance: 500 },
//   { name: "John", age: 32, balance: 2000 },
//   { name: "Anna", age: 22, balance: 800 }
// ];
// const findUserByName = (users, name) =>{

// return users.find(user => user.name === name)

// };

// console.log(findUserByName(users, "John"));
// // { name: "John", age: 32, balance: 2000 }

// console.log(findUserByName(users, "Bohdan"));
// // { name: "Bohdan", age: 27, balance: 1200 }

// console.log(findUserByName(users, "Mark"));
// // undefined

// const users = [
//   { name: "Bohdan", age: 27 },
//   { name: "John", age: 32 },
//   { name: "Mark", age: 19 }
// ];

// const areAllUsersAdults = (users) =>{
//     return users.every(user => user.age >= 18);
// }

// console.log(areAllUsersAdults(users));
// // true

// console.log(areAllUsersAdults([
//   { name: "Alex", age: 16 },
//   { name: "John", age: 32 }
// ]));
// // false

// console.log(areAllUsersAdults([]));
// // true

// const products = [
//   { name: "Monstera", price: 80, inStock: false },
//   { name: "Cactus", price: 25, inStock: false },
//   { name: "Orchid", price: 120, inStock: true },
//   { name: "Rose", price: 15, inStock: false }
// ];

// const hasAvailableProduct = (products) =>{

// return products.some(product => product.inStock)

// };

// console.log(hasAvailableProduct(products));
// // true

// console.log(hasAvailableProduct([
//   { name: "Laptop", inStock: false },
//   { name: "Mouse", inStock: false }
// ]));
// // false

// console.log(hasAvailableProduct([]));
// // false

// const products = [
//   { name: "Monstera", price: 80 },
//   { name: "Cactus", price: 25 },
//   { name: "Orchid", price: 120 },
//   { name: "Rose", price: 15 }
// ];

// const findMostExpensiveProduct = (products) =>{
// if (products.length === 0) {
//   return null;
// }
// const acc = products.reduce((acc, product) => acc.price > product.price ? acc : product);
// return acc;

// };

// console.log(findMostExpensiveProduct(products));
// // { name: "Orchid", price: 120 }

// console.log(findMostExpensiveProduct([
//   { name: "Laptop", price: 1200 },
//   { name: "Mouse", price: 50 }
// ]));
// // { name: "Laptop", price: 1200 }

// const users = [
//   { name: "Bohdan", friends: ["Alex", "John"] },
//   { name: "Anna", friends: ["Mark", "Alex"] },
//   { name: "John", friends: ["Anna"] }
// ];

// const getUniqueFriends  = (users) =>{

// const unique = users.flatMap(user => user.friends)

// return [... new Set(unique)];

// }
// console.log(getUniqueFriends(users));
// // ["Alex", "John", "Mark", "Alex", "Anna"]

// const users = [
//   { name: "Bohdan", age: 27 },
//   { name: "Alex", age: 16 },
//   { name: "John", age: 32 },
//   { name: "Anna", age: 22 }
// ];

// const getUserIndex = (users, userName) =>{

// const newUserr =  users.find(user => user.name);

// return users.findIndex(user => user.name === userName)

// }

// console.log(getUserIndex(users, "John"));
// // 2

// console.log(getUserIndex(users, "Bohdan"));
// // 0

// console.log(getUserIndex(users, "Anna"));
// // 3

// console.log(getUserIndex(users, "Mark"));
// // -1

// const orders = [
//   { id: 1, price: 250, isPaid: true },
//   { id: 2, price: 400, isPaid: false },
//   { id: 3, price: 150, isPaid: true },
//   { id: 4, price: 300, isPaid: true }
// ];
// const getPaidOrdersTotal = (orders) =>{
//     const totalPaidPrice = orders
//     .filter(order => order.isPaid === true)
//     .map(order => order.price)
//      .reduce((total, price)=> total + price ,0)
// return totalPaidPrice

// }

// console.log(getPaidOrdersTotal(orders));
// // 700

// console.log(getPaidOrdersTotal([
//   { id: 1, price: 500, isPaid: false },
//   { id: 2, price: 200, isPaid: true }
// ]));
// // 200

// console.log(getPaidOrdersTotal([]));
// // 0

////////////////////////////////////////////////////////
// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
//   // Change code below this line
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15

// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750

// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

///////////////////////////////////////////////////////////////
// class Storage{
// constructor(item){
// this.item = item;
// };
// getItems(){
//     return this.item
// };
// addItem(newItem){

// this.item.push(newItem);
// };
// removeItem(itemToRemove){
//   const index = this.item.indexOf(itemToRemove);

//   if (index !== -1) {
//     this.item.splice(index, 1);
//   }

// };

// };
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
//////////////////////////////////////////////////////////

// class StringBuilder{
//    #value
// constructor(initialValue) {
// this.#value = initialValue;
//   }

//   getValue(){
// return this.#value
//   };

//   padEnd(str){

// this.#value += str
//   };

// padStart(str){
// this.#value = str + this.#value;

// };

// padBoth(str){
// this.#value = str + this.#value +  str;
// };

// };

// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."

// builder.padStart("^");
// console.log(builder.getValue()); // "^."

// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"

// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

// const player = {
//   name: "Bogdan",
// };

// function showInfo(level, score) {
//   console.log(
//     `${this.name}: уровень ${level}, очки ${score}`
//   );
// }

// const showPlayer = showInfo.bind(player, 10, 500);
// showPlayer()

// const car = {
//   brand: "BMW",
// };

// function showCar(model, year, color) {
//   console.log(
//     `${this.brand} ${model} ${year} ${color}`
//   );
// }

// const myCar = showCar.bind(car, "X5" );
// myCar(2024, "Black")

// class BankAccount{
// #balance

//     constructor(owner, balance){
// this.owner = owner;
// this.#balance = balance;
// }
//  get balance (){
// return this.#balance;
//  }

//  deposit(amount){

//  if (amount > 0) {
//     this.#balance += amount;
//   }

//  }

//  withdraw(amount){
//     if (amount > 0 && this.#balance >= amount) {
//        this.#balance -=  amount ;
//     }

//  }

// transfer(targetAccount, amount){
//     if (this.#balance > 0 && this.#balance >= amount) {
//         this.#balance -= amount
//         targetAccount.deposit(amount);

//     }

// }

// };
// const alex = new BankAccount("Alex", 1000);
// const bogdan = new BankAccount("Bogdan", 500);

// alex.transfer(bogdan, 300);

// console.log(alex.balance);   // 700
// console.log(bogdan.balance); // 800
//////////////////////////////////////////////////////////

// const item = document.querySelectorAll("li.item");

// console.log(`Number of categories: ${item.length} `);

// item.forEach((item) => {
//   const title = item.querySelector("h2");

//   console.log(` Category: ${title.textContent}`);

//   const itemUnder = item.querySelectorAll("li");
//   console.log(`Elements: ${itemUnder.length}`);
// });
// ///////////////////////////////////////////////////////////////////

// const images = [
//   {
//     url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
//     alt: "White and Black Long Fur Cat",
//   },
//   {
//     url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish",
//   },
//   {
//     url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
//     alt: "Group of Horses Running",
//   },
//   {
//     url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
//     alt: "Alpine Spring Meadows",
//   },
//   {
//     url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
//     alt: "Nature Landscape",
//   },
//   {
//     url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
//     alt: "Lighthouse Coast Sea",
//   },
// ];

// const imageJs = document.querySelector(".image-js");

// images.forEach((image) => {
//   const item = document.createElement("li");
//   const img = document.createElement("img");

//   img.src = image.url;
//   img.alt = image.alt;
//   img.width = 300;
//   img.height = 200;

//   item.append(img);
//   imageJs.append(item);
// });
/////////////////////////////////////////////////

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const input = document.querySelector("#name-input");
// const output = document.querySelector("#name-output");

// input.addEventListener("input", () => {
//   const name = input.value.trim();

//   if (name === "") {
//     output.textContent = "Anonymous";
//   } else {
//     output.textContent = name;
//   }
// });
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const form = document.querySelector(".login-form");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const formData = new FormData(form);

//   const email = formData.get("email").trim();
//   const password = formData.get("password").trim();

//   if (email === "" || password === "") {
//     return alert("All form fields must be filled in");
//   }

//   const data = {
//     email,
//     password,
//   };

//   console.log(data);
//   form.reset();
// });
///!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

///!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const button = document.querySelector('.change-color')

// button.addEventListener('click',()=>{
//     const color = getRandomHexColor()
//     document.body.style.backgroundColor = color;
//     const span = document.querySelector(".color");
//     span.textContent = color
// })

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, '0')}`;
// }
///!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const videos = [
//   "https://www.w3schools.com/html/mov_bbb.mp4",
//   "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
//   "https://www.w3schools.com/html/movie.mp4",

// ];

// const container = document.querySelector(".videos");
// const video = document.createElement("video");
// const nextButton = document.querySelector(".next-video");

// let currentIndex = 0;

// video.src = videos[currentIndex];
// video.controls = true;
// video.width = 400;
// video.autoplay = true;
// video.muted = true;

// nextButton.addEventListener("click", () => {
//   currentIndex += 1;

//   if (currentIndex >= videos.length) {
//     currentIndex = 0;
//   }

//   video.src = videos[currentIndex];
//   video.play();
// });

// container.append(video);

// const images = [
//   {
//     preview:
//       "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
//     original:
//       "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
//     description: "Hokkaido Flower",
//   },
//   {
//     preview:
//       "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
//     original:
//       "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
//     description: "Container Haulage Freight",
//   },
//   {
//     preview:
//       "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
//     original:
//       "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
//     description: "Aerial Beach View",
//   },
//   {
//     preview:
//       "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
//     original:
//       "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
//     description: "Flower Blooms",
//   },
//   {
//     preview:
//       "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
//     original:
//       "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
//     description: "Alpine Mountains",
//   },
//   {
//     preview:
//       "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
//     original:
//       "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
//     description: "Mountain Lake Sailing",
//   },
//   {
//     preview:
//       "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
//     original:
//       "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
//     description: "Alpine Spring Meadows",
//   },
//   {
//     preview:
//       "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
//     original:
//       "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
//     description: "Nature Landscape",
//   },
//   {
//     preview:
//       "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
//     original:
//       "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
//     description: "Lighthouse Coast Sea",
//   },
// ];
// const gallery = document.querySelector(".gallery");

// const markup = images
//   .map(image => {
//     return `
//       <li class="gallery-item">
//         <a class="gallery-link" href="${image.original}">
//           <img
//             class="gallery-image"
//             src="${image.preview}"
//             data-source="${image.original}"
//             alt="${image.description}"
//           />
//         </a>
//       </li>
//     `;
//   })
//   .join("");

// gallery.insertAdjacentHTML("beforeend", markup);

// gallery.addEventListener('click', event =>{
// event.preventDefault();
// if (event.target.nodeName !== "IMG") {
//   return;
// }
// const source = event.target.dataset.source;
// const instance = basicLightbox.create(
// `<img src="${source}">`
// );
//   instance.show();
//   });

// const users = [
//   { id: 1, name: "Alex", age: 25, isActive: true },
//   { id: 2, name: "John", age: 17, isActive: true },
//   { id: 3, name: "Emma", age: 28, isActive: false },
//   { id: 4, name: "Kate", age: 22, isActive: true },
//   { id: 5, name: "Mike", age: 16, isActive: false },
// ];

// const getActiveUsers = (users) => {
//   return users
//     .filter((user) => user.isActive && user.age >= 18)
//     .map((user) => user.name.toUpperCase());
// };
// console.log(getActiveUsers(users));

// const orders = [
//   { id: 1, name: "Laptop", price: 1200, quantity: 2, paid: true },
//   { id: 2, name: "Mouse", price: 50, quantity: 3, paid: false },
//   { id: 3, name: "Keyboard", price: 100, quantity: 2, paid: true },
//   { id: 4, name: "Monitor", price: 300, quantity: 1, paid: true },
//   { id: 5, name: "Headphones", price: 80, quantity: 4, paid: false },
// ];
// const getTotalRevenue = (orders) => {
//   return orders
//     .filter((order) => order.paid)
//     .reduce((total, price) => {
//       const totalPrice = price.quantity * price.price;
//       return totalPrice + total;
//     }, 0);
// };

// console.log(getTotalRevenue(orders));
// // 2900
// const cart = [
//   { id: 1, name: "Laptop", price: 1200, quantity: 2 },
//   { id: 2, name: "Mouse", price: 50, quantity: 1 },
// ];

// const product = {
//   id: 2,
//   name: "Mouse",
//   price: 50,
// };
// const addToCart = (cart, product) =>{
// const trueProduct = cart.find((item)=> item.id === product.id)
// console.log(trueProduct);

// if (trueProduct) {
// return cart.map((item)=> {
//    if (item.id === product.id) {
//    return {...item, quantity: item.quantity + 1}
//    } 
//     return item;
// }) ;
  

// }else{
// return[...cart, {...product, quantity: 1}]
// }


// }




// console.log(addToCart(cart, product));

// // [
// //   { id: 1, name: "Laptop", price: 1200, quantity: 2 },
// //   { id: 2, name: "Mouse", price: 50, quantity: 2 },
// // ]

// const cart = [
//   { id: 1, name: "Laptop", price: 1200, quantity: 2 },
//   { id: 2, name: "Mouse", price: 50, quantity: 1 },
//   { id: 3, name: "Monitor", price: 300, quantity: 3 },
// ];

// const removeFromCart = (cart, productId) =>{
//     const findProduct = cart
//     .find((item)=> item.id === productId)
//       if (!findProduct) {
//         return cart;
//       }
//       if (findProduct.quantity > 1) {
//         return cart.map((item)=>{
//             if (item.id === productId) {
//              return {...item, quantity: item.quantity -1} 
//             }else{
//              return item;
//             }
//         });
      
//           }
// else if (findProduct.quantity === 1) {
//             return cart.filter((item) => item.id !== productId)

      
        
// }      
// };
// console.log(removeFromCart(cart, 1));
// // Laptop: quantity: 1

// console.log(removeFromCart(cart, 2));
// // Mouse полностью удалён

// console.log(removeFromCart(cart, 3));
// // Monitor: quantity: 2

// console.log(removeFromCart(cart, 10));
// // Корзина без изменений



// const users = [
//   { id: 1, name: "Alex", email: "alex@gmail.com" },
//   { id: 2, name: "John", email: "john@gmail.com" },
//   { id: 3, name: "Emma", email: "emma@gmail.com" },
// ];

// const updateEmail = (users, userId, newEmail) =>{


// return users.map((item)=>{
//     if (item.id === userId) {
//         return {...item, email: newEmail}
//     }else{
//         return item;
//     }
// })






// }


// console.log(updateEmail(users, 2, "john@outlook.com"));

// const products = [
//   { id: 1, name: "Laptop", isFavorite: false },
//   { id: 2, name: "Mouse", isFavorite: true },
//   { id: 3, name: "Monitor", isFavorite: false },
// ];
// const  toggleFavorite = (products, productId) =>{
// return products.map((product)=>{
// if (product.id === productId) {
//     return {...product, isFavorite: !product.isFavorite}
// } else {
//     return product
// }
// });


// };
// console.log(toggleFavorite(products, 2));

// const products = [
//   { id: 1, name: "iPhone 16", price: 799, stock: 5 },
//   { id: 2, name: "Samsung S25", price: 899, stock: 0 },
//   { id: 3, name: "iPhone 15", price: 649, stock: 3 },
//   { id: 4, name: "Google Pixel", price: 699, stock: 4 },
//   { id: 5, name: "iPhone 14", price: 499, stock: 0 },
// ];

// const searchProducts = (products, query)=>{
//     return products
// .filter((product)=> product.name.toUpperCase().includes(query.toUpperCase()) && product.stock > 0)
    
    
// };

// console.log(searchProducts(products, "IPHONE"));

// const products = [
//   { id: 1, name: "Laptop", price: 1200, stock: 5 },
//   { id: 2, name: "Mouse", price: 50, stock: 10 },
//   { id: 3, name: "Keyboard", price: 100, stock: 0 },
//   { id: 4, name: "Monitor", price: 300, stock: 3 },
//   { id: 5, name: "Headphones", price: 80, stock: 7 },
// ];
// const getAffordableProducts = (products, maxPrice) =>{
// return products
// .filter((product)=> product.price <= maxPrice && product.stock > 0)
// .map((item)=> item.name);



// };
// console.log(getAffordableProducts(products, 300));
// // ["Mouse", "Monitor", "Headphones"]

// console.log(getAffordableProducts(products, 80));
// // ["Mouse", "Headphones"]

// console.log(getAffordableProducts(products, 20));
// // []


const cart = [
  { id: 1, name: "Laptop", price: 1200, quantity: 1, discount: 10 },
  { id: 2, name: "Mouse", price: 50, quantity: 2, discount: 0 },
  { id: 3, name: "Monitor", price: 300, quantity: 2, discount: 20 },
  { id: 4, name: "Keyboard", price: 100, quantity: 1, discount: 15 },
];
const calculateOrder = (cart, selectedIds)=>{
const filterItems = cart
.filter((item) => selectedIds.includes(item.id))
.reduce((total, item) =>{
const discount = item.price * item.discount / 100;
const priceWithDiscount = item.price - discount;
const totalPrice = priceWithDiscount * item.quantity;


})



}

console.log(calculateOrder(cart, [1, 3]));
// { totalPrice: 1560, totalQuantity: 3 }

console.log(calculateOrder(cart, [2, 4]));
// { totalPrice: 185, totalQuantity: 3 }

console.log(calculateOrder(cart, [10]));
// { totalPrice: 0, totalQuantity: 0 }

console.log(calculateOrder(cart, []));
// { totalPrice: 0, totalQuantity: 0 }

