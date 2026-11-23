// // 1
// let firstName = "goga";
// let lastName = "CHALAURI";
// let age = 21;
// let city = "Tbilisi";
// let hobby = "gaming";

// let fullName = firstName + " " + lastName;
// let message = `My name is ${firstName} ${lastName}, I am ${age} years old and I live in ${city}.`;

// console.log(message);
// console.log(fullName.length);
// console.log(firstName.startsWith("g"));
// console.log(typeof age);
// console.log(typeof city);

// //////////////////////////

// // 2
// let password = "   Goga12345   ";

// let cleanPassword = password.trim();

// console.log(cleanPassword.startsWith("Goga"));
// console.log(cleanPassword.length);

// let newPassword = cleanPassword.replaceAll("a", "@");
// newPassword = newPassword.toUpperCase();

// console.log(newPassword);
// console.log(typeof newPassword);

// //////////////////////////

// 3
// let productName = "gaming keyboard";
// let price = 150;
// let quantity = 3;
// let customerName = "goga";
// let deliveryCity = "tbilisi";

// console.log(productName.toUpperCase());

// let totalPrice = price * quantity;
// let deliveryFee = 15;
// let finalPrice = totalPrice + deliveryFee;

// let orderNumber = 1000;
// orderNumber++;

// let orderDescription = `Order ${orderNumber}: ${customerName.toUpperCase()} bought ${quantity} ${productName} in ${deliveryCity}. Total price: ${finalPrice} GEL.`;

// console.log(finalPrice);
// console.log(orderDescription);
// console.log(productName.length);
// console.log(deliveryCity.startsWith("t"));

// //////////////////////////

// 4
// let sentence = "javascript is very interesting and javascript is powerful";

// let firstReplace = sentence.replace("javascript", "python");
// let allReplace = sentence.replaceAll("javascript", "python");
// let upperSentence = allReplace.toUpperCase();

// console.log(firstReplace);
// console.log(upperSentence);
// console.log(upperSentence.length);
// console.log(upperSentence.slice(0, 10));
// console.log(upperSentence.startsWith("PYTHON"));
// console.log(upperSentence.split(" "));

// let repeatedText = "PYTHON ".repeat(3);
// console.log(repeatedText.trim());

// //////////////////////////

// 5
let movieName = "interstellar";
let ticketPrice = 18;
let ticketCount = 4;
let customer = "giorgi";
let discount = 10;

let totalCost = ticketPrice * ticketCount;
let finalPrice = totalCost - discount;

let ticketId = 500;
ticketId++;

let upperCustomer = customer.toUpperCase();
let upperMovie = movieName.toUpperCase();

let orderInfo = `Ticket ID: ${ticketId}, Customer: ${upperCustomer}, Movie: ${upperMovie}, Tickets: ${ticketCount}, Final price: ${finalPrice} GEL.`;

console.log(totalCost);
console.log(finalPrice);
console.log(upperCustomer);
console.log(upperMovie);
console.log(orderInfo);
console.log(movieName.slice(-5));
console.log(customer.startsWith("g"));

// //////////////////////////

// 6
let hotelName = "   grand palace hotel   ";
let customerName = "goga chalauri";
let roomPrice = 250;
let days = 5;
let roomNumber = 101;
let breakfastPrice = 30;
let hasBreakfast = true;

let cleanHotelName = hotelName.trim().toUpperCase();

let customerWords = customerName.split(" ");
let firstTwoLetters = customerWords[0].slice(0, 2);
let upperLastName = customerWords[1].toUpperCase();

let totalHotelPrice = roomPrice * days;

if (hasBreakfast) {
    totalHotelPrice += breakfastPrice * days;
}

let bookingNumber = 100;
bookingNumber++;

roomNumber++;

console.log(cleanHotelName);
console.log(customerWords);
console.log(firstTwoLetters);
console.log(upperLastName);
console.log(totalHotelPrice);
console.log(bookingNumber);
console.log(roomNumber);
console.log(cleanHotelName.startsWith("GRAND"));
console.log(customerName.length);



let finalMessage = `Hotel: ${cleanHotelName}, Customer: ${customerWords[0]} ${upperLastName}, Room: ${roomNumber}, Days: ${days}, Final price: ${totalHotelPrice} GEL.`;

console.log(finalMessage);