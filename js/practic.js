// function checkAge(age) {
// if (age >= 18) {
//     return "Access granted";
// } else {
//     return "Access denied";
// };


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




function slugify(title){
const toLower = title.toLowerCase();
const wordsSplit = toLower.split(" ");
const joinWords = wordsSplit.join("-");
return joinWords;
};

console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"




function makeArray(firstArray, secondArray, maxLength){
const newArrey = firstArray.concat(secondArray);

if(newArrey.length > maxLength)
    return newArrey.slice(0, maxLength)
else{
    return newArrey;
}

};


console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []


function filterArray(numbers, value) {
  const filteredNumbers = [];

  for (const number of numbers) {
    if (number > value) {
      filteredNumbers.push(number);
    }
  }

  return filteredNumbers;
};




console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
