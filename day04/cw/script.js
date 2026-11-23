// 1)
// let age = 17;
// let money = 20;
// let ticketPrice = 15;

// console.log(
//   age >= 18 && money >= 20
//     ? "Ticket purchased successfully!"
//     : age < 18
//       ? "You are too young!"
//       : "Not enough money!",
// );

// 2)
// let score = 85;

// console.log(
//   score >= 90 && score < 100
//     ? "Excellent"
//     : score >= 75 && score < 89
//       ? "Good"
//       : score >= 50 && score < 74
//         ? "Average"
//         : score < 50
//           ? "Fail"
//           : score > 100 || score < 0
//             ? "Invalid score!"
//             : null,
// );

// 3)შექმენი ცვლადი და შეინახე რაიმე რიცხვი 1 დან 7 ჩათვლით.

// გამოიყენე switch.

// პირობები:
// - 1 — Monday
// - 2 — Tuesday
// - 3 — Wednesday
// - 4 — Thursday
// - 5 — Friday
// - 6 — Saturday
// - 7 — Sunday
// - სხვა ნებისმიერი რიცხვის შემთხვევაში დაბეჭდე "Invalid day!".

let num = 7;

switch (num) {
  case 1:
    console.log("today is monday");
    break;
  case 2:
    console.log("today is Tuesday");
    break;
  case 3:
    console.log("today is Wednesday");
    break;
  case 4:
    console.log("today is Thursday")
    break
  case 5:
    console.log("today is Friday")
    break
  case 6:
    console.log("today is Saturday")
    break
  case 7:
    console.log("today is Sunday")
    break
  default:
    console.log("Invalid day!")
    break
}
