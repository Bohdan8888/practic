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



const products = [
  { name: "Monstera", price: 80 },
  { name: "Cactus", price: 25 },
  { name: "Orchid", price: 120 },
  { name: "Rose", price: 15 }
];
function getExpensiveProducts(products, minPrice){
  const newPprice = [];
  for (const product of products) {
    if (product.price > minPrice) {
        newPprice.push(product)
    }
  }
  return newPprice;
};



console.log(getExpensiveProducts(products, 50));
// [
//   { name: "Monstera", price: 80 },
//   { name: "Orchid", price: 120 }
// ]

console.log(getExpensiveProducts(products, 100));
// [
//   { name: "Orchid", price: 120 }
// ]

console.log(getExpensiveProducts(products, 150));
// []
