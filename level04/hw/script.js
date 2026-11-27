// 1
let age = 20;

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

//////////////////////////

// 2
let num = 10;

if (num > 0) {
    console.log("Positive");
} else {
    console.log("Negative or Zero");
}

//////////////////////////

// 3
let price = 150;

if (price > 100) {
    price -= 20;
}

console.log(price);

//////////////////////////

// 4
let score = 65;

if (score >= 50) {
    console.log("Passed");
} else {
    console.log("Failed");
}

//////////////////////////

// 5
let score2 = 85;

let result = score2 >= 90 ? "Excellent" :
             score2 >= 70 ? "Good" :
             score2 >= 50 ? "Average" : "Failed";

console.log(result);

//////////////////////////

// 6
let num2 = -5;

let result2 = num2 > 0 ? "Positive" :
              num2 === 0 ? "Zero" : "Negative";

console.log(result2);

//////////////////////////

// 7
let a = 5;
let b = 5;
let c = 5;

let result3 = a === b && b === c ? "Equilateral" :
              a === b || b === c || a === c ? "Isosceles" : "Scalene";

console.log(result3);

//////////////////////////

// 8
let price2 = 250;

let discount = price2 > 200 ? 0.30 :
               price2 > 100 ? 0.15 : 0;

let finalPrice = price2 - price2 * discount;

console.log(finalPrice);

//////////////////////////

// 9
let score3 = 95;

switch (true) {
    case score3 >= 90 && score3 <= 100:
        console.log("Excellent");
        break;
    case score3 >= 70:
        console.log("Good");
        break;
    case score3 >= 50:
        console.log("Average");
        break;
    case score3 >= 0:
        console.log("Failed");
        break;
    default:
        console.log("Invalid Score");
}

//////////////////////////

// 10
let price3 = 250;
let age2 = 20;
let premium = true;

switch (true) {
    case price3 > 200 && premium:
        console.log("30% Discount");
        break;
    case price3 > 100 || premium:
        console.log("15% Discount");
        break;
    case age2 < 18 && !premium:
        console.log("No Discount");
        break;
    default:
        console.log("5% Discount");
}

//////////////////////////

// 11
let age3 = 20;
let score4 = 95;
let experience = true;

switch (true) {
    case age3 >= 18 && score4 >= 90 && experience:
        console.log("Professional");
        break;
    case age3 >= 16 && score4 >= 70:
        console.log("Advanced");
        break;
    case score4 >= 50 || experience:
        console.log("Intermediate");
        break;
    default:
        console.log("Beginner");
}