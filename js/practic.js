function checkAge(age) {
if (age >= 18) {
    return "Access granted";
} else {
    return "Access denied";
};


};
console.log(checkAge(20)); // "Access granted"
console.log(checkAge(17)); // "Access denied"
console.log(checkAge(18)); // "Access granted"
console.log(checkAge(12)); // "Access denied"


function canPurchase(isAvailable, quantity, isBlocked){

const canShop = isAvailable && !isBlocked && quantity > 0;
if (canShop) {
    return canShop;
} else {
    return canShop;
};
};

console.log(canPurchase(true, 5, false));  // true
console.log(canPurchase(false, 5, false)); // false
console.log(canPurchase(true, 0, false));  // false
console.log(canPurchase(true, 5, true));   // false
console.log(canPurchase(false, 0, true));  // false


function normalizeInput(input, to){
 
if (to === "upper") {
    return input.toUpperCase();
} else {
    return input.toLowerCase();
}
};


console.log(normalizeInput("Hello World", "upper"));
// "HELLO WORLD"

console.log(normalizeInput("HELLO WORLD", "lower"));
// "hello world"

console.log(normalizeInput("Big SALE", "lower"));
// "big sale"

console.log(normalizeInput("JavaScript", "upper"));
// "JAVASCRIPT"

function  checkForName(fullName, firstName){
const lowerCaseFirstName = firstName.toLowerCase();
const lowerCaseFullName = fullName.toLowerCase();

return lowerCaseFullName.includes(lowerCaseFirstName);


};
console.log(checkForName("Bohdan Sharyha", "Bohdan")); // true
console.log(checkForName("Bohdan Sharyha", "bohdan")); // true
console.log(checkForName("Bohdan Sharyha", "Alex"));   // false
console.log(checkForName("John Smith", "JOHN"));       // true
console.log(checkForName("John Smith", "Peter"));  
    // false

function checkFileExtension(fileName, ext){

 if (fileName.endsWith(ext)) {
    return "File extension matches";
 } else {
    return "File extension does not match";
 }
};
console.log(checkFileExtension("index.html", ".html"));
console.log(checkFileExtension("styles.css", ".js"));
console.log(checkFileExtension("app.js", ".js"));


function checkImage (fileName){
if (fileName.endsWith(".jpg")) {
    return "Valid image";
} else {
    return "Invalid image";
}


} ;
console.log(checkImage("monstera.jpg"));
// "Valid image"

console.log(checkImage("plant.png"));
// "Invalid image"

console.log(checkImage("flower.jpg"));
// "Valid image"

console.log(checkImage("photo.pdf"));



// "Invalid image"

function checkUsername(username){
    if (username.startsWith("user_")) {

        return "Username is valid";
    } else {

       return "Username is invalid";
    }
};
console.log(checkUsername("user_bohdan"));
// "Username is valid"

console.log(checkUsername("admin_bohdan"));
// "Username is invalid"

console.log(checkUsername("user_alex"));
// "Username is valid"

console.log(checkUsername("guest_123"));
// "Username is invalid"


function  checkForWord(message, word){
    if (message.includes(word)) {
        return true;
    } else {
        return false;
    }
};
console.log(checkForWord("Hello Plantora", "Plantora"));
// true

console.log(checkForWord("Hello Plantora", "JavaScript"));
// false

console.log(checkForWord("I love programming", "love"));
// true

console.log(checkForWord("Monstera is beautiful", "rose"));
// false



function createUsername(username){
    return username.trim()
};
console.log(createUsername("  Bohdan  "));
// "Bohdan"

console.log(createUsername("Alex   "));
// "Alex"

console.log(createUsername("  Mark"));
// "Mark"

console.log(createUsername("John"));
// "John"


function  getFileName(file){
    const dotIndex = file.indexOf(".");
if (dotIndex !== -1) {
    return file.slice(0, dotIndex);
} else {
    return file;
}
};
console.log(getFileName("styles.css")); // "styles"
console.log(getFileName("app.js"));     // "app"
console.log(getFileName("index.html")); // "index"
console.log(getFileName("app"));        // "app"
console.log(getFileName("index"));      // "index"
