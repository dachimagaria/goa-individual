// // 1
// let age = Number(prompt("Enter your age"));

// if (age >= 18) {
//     console.log("Adult");
// } else {
//     console.log("Minor");
// }

// // 2
// let num = Number(prompt("Enter a number"));

// if (num > 0) {
//     console.log("Positive");
// } else {
//     console.log("Negative or Zero");
// }

// // 3
// let price = Number(prompt("Enter product price"));

// if (price > 100) {
//     price -= 20;
// }

// console.log(price);

// // 4
// let score = Number(prompt("Enter your score"));

// if (score >= 50) {
//     console.log("Passed");
// } else {
//     console.log("Failed");
// }

// // 5
// let score2 = Number(prompt("Enter your score"));

// let result = score2 >= 90 ? "Excellent" :
//              score2 >= 70 ? "Good" :
//              score2 >= 50 ? "Average" : "Failed";

// console.log(result);

// // 6
// let num2 = Number(prompt("Enter a number"));

// let result2 = num2 > 0 ? "Positive" :
//               num2 === 0 ? "Zero" : "Negative";

// console.log(result2);

// // 7
// let a = Number(prompt("Enter first side"));
// let b = Number(prompt("Enter second side"));
// let c = Number(prompt("Enter third side"));

// let result3 = a === b && b === c ? "Equilateral" :
//               a === b || b === c || a === c ? "Isosceles" : "Scalene";

// console.log(result3);

// // 8
// let price2 = Number(prompt("Enter purchase amount"));

// let discount = price2 > 200 ? 0.30 :
//                price2 > 100 ? 0.15 : 0;

// let finalPrice = price2 - price2 * discount;

// console.log(finalPrice);

// // 9
// let score3 = Number(prompt("Enter score"));

// switch (true) {
//     case score3 >= 90 && score3 <= 100:
//         console.log("Excellent");
//         break;
//     case score3 >= 70:
//         console.log("Good");
//         break;
//     case score3 >= 50:
//         console.log("Average");
//         break;
//     case score3 >= 0:
//         console.log("Failed");
//         break;
//     default:
//         console.log("Invalid Score");
// }

// // 10
// let price3 = Number(prompt("Enter product price"));
// let age2 = Number(prompt("Enter your age"));
// let premium = prompt("Do you have Premium? true/false") === "true";

// switch (true) {
//     case price3 > 200 && premium:
//         console.log("30% Discount");
//         break;
//     case price3 > 100 || premium:
//         console.log("15% Discount");
//         break;
//     case age2 < 18 && !premium:
//         console.log("No Discount");
//         break;
//     default:
//         console.log("5% Discount");
// }

// // 11
// let age3 = Number(prompt("Enter athlete age"));
// let score4 = Number(prompt("Enter athlete score"));
// let experience = prompt("Do you have experience? true/false") === "true";

// switch (true) {
//     case age3 >= 18 && score4 >= 90 && experience:
//         console.log("Professional");
//         break;
//     case age3 >= 16 && score4 >= 70:
//         console.log("Advanced");
//         break;
//     case score4 >= 50 || experience:
//         console.log("Intermediate");
//         break;
//     default:
//         console.log("Beginner");
// }