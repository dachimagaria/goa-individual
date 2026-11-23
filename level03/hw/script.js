// 1
// let age = 22;
// let isStudent = true;
// let totalPrice = 180;
// let hasCard = false;

// if (age < 18 && isStudent) {
//     console.log("25% discount");
// } else if (isStudent || hasCard) {
//     console.log("15% discount");
// } else if (totalPrice > 200) {
//     console.log("10% discount");
// } else {
//     console.log("No discount");
// }

// //////////////////////////

// // 2
// let level = 20;
// let coins = 150;
// let health = 80;
// let hasKey = true;

// if (health <= 0) {
//     console.log("Game Over");
// } else if (level >= 15 && coins >= 100) {
//     console.log("Level unlocked");
// } else if (hasKey && level >= 10) {
//     console.log("Secret level unlocked");
// } else if (level < 10 || coins < 50) {
//     console.log("Not enough resources");
// } else {
//     console.log("Keep playing");
// }

// //////////////////////////

// // 3
// let age = 25;
// let experience = 3;
// let englishLevel = 80;
// let hasDiploma = true;

// if (age < 18) {
//     console.log("Too young");
// } else if (experience >= 2 && englishLevel >= 70) {
//     console.log("Accepted");
// } else if (hasDiploma && englishLevel >= 85) {
//     console.log("Accepted without experience");
// } else if (experience === 0 || englishLevel < 50) {
//     console.log("Rejected");
// } else {
//     console.log("Interview required");
// }

// //////////////////////////

// // 4
// let age = 17;
// let weight = 65;
// let hasMedicalPermission = true;
// let isProfessional = false;

// if (age < 14) {
//     console.log("Age restriction");
// } else if (age >= 18 && hasMedicalPermission) {
//     console.log("Full membership");
// } else if (age >= 14 && age <= 17 && hasMedicalPermission) {
//     console.log("Limited membership");
// } else if ((isProfessional || hasMedicalPermission) && age >= 14) {
//     console.log("Special membership");
// } else {
//     console.log("Membership denied");
// }

// //////////////////////////

// // 5
// let money = 1200;
// let phonePrice = 1500;
// let hasInstallment = true;
// let isMember = false;

// if (money >= phonePrice) {
//     console.log("Purchase successful");
// } else if (hasInstallment && isMember) {
//     console.log("Purchase with 20% discount");
// } else if (hasInstallment || isMember) {
//     console.log("Purchase with installment");
// } else {
//     console.log("Not enough money");
// }

// 6)
let budget = 2000;
let days = 7;
let hasPassport = true;
let isSummer = false;

if (hasPassport === false) {
  console.log("Passport required");
} else if (budget >= 1500 && days >= 5) {
  console.log("Trip approved");
} else if (isSummer === true && budget >= 1000) {
  console.log("Summer trip approved");
} else if (budget <= 500 || days <= 2) {
  console.log("trip rejected");
} else {
  console.log("Choose a cheaper destination");
}
/////////////////////////////////

// 7)
let attendance = 85;
let homeworkCount = 8;
let hasProject = true;
let hasDebts = false;

if (hasDebts === true && hasProject === false) {
  console.log("Not allowed");
} else if (attendance >= 80 && homeworkCount >= 7) {
  console.log("Exam allowed");
} else if (hasProject === true || attendance >= 95) {
  console.log("Special permission granted");
} else if (attendance <= 50 || homeworkCount <= 3) {
  console.log("Exam denied");
} else {
  console.log("Additional tasks required");
}
/////////////////////////////////

// 8)

let totalSpent = 2500;
let ordersCount = 12;
let accountAge = 2;
let hasPremium = false;
let isBlocked = false;

if (isBlocked === true) {
  console.log("Account blocked");
} else if (totalSpent >= 2000 && ordersCount >= 10) {
  console.log("VIP Customer");
} else if (hasPremium === true && accountAge >= 1) {
  console.log("Premium Customer");
} else if (totalSpent >= 1000 || ordersCount >= 5) {
  console.log("Regular Customer");
} else {
  console.log("New Customer");
}
