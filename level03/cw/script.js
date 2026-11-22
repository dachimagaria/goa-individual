// 1)შექმენი ცვლადი და შეინახე რაიმე რიცხვი , შენი დავალებაა კონსოლში გამოიტანო მისიი ფესვი

// 2)შექმენი ცვლადი და შეინახე შიგნით რაიმე უარყოფითი რიცხვი , შენი დავალებაა დაბეჭდო ეს რიცხვი და გადაიყვანო დადებით რიცხვად

// 3)10 , 25  , 30 , 60 , 80 --> ამ რიცხვებიდან ჯერ გამოიტანე მინიმალური შემდეგ კი მაქსიმალური რიცხვი

// 4)შექმენი ცვლადი და შიგნით შეინახე რენდომ რიცხვი 1 დან 10 მდე

// let number = 64

// console.log(Math.sqrt(number))

// let negative_number = -1232

// console.log(Math.abs(negative_number))

// console.log(Math.max(10 , 25  , 30 , 60 , 80))

// console.log(Math.min(10 , 25  , 30 , 60 , 80))

// console.log(Math.floor(Math.random()*9)+1)

// 1)let age = 20;
// let hasLicense = true;
// let hasExperience = false;

// პირობები:
// - თუ ასაკი 18-ზე ნაკლებია — "Too young to drive".
// - თუ მართვის მოწმობა არ აქვს — "License required".
// - თუ ასაკი 18 ან მეტია და აქვს მართვის მოწმობა და გამოცდილება — "Experienced driver".
// - თუ ასაკი 18 ან მეტია და აქვს მართვის მოწმობა, მაგრამ გამოცდილება არ აქვს — "Beginner driver".

// 2)let age = 17;
// let isStudent = false;
// let hasDiscountCard = true;
// let totalPrice = 150;

// პირობების მიხედვით განსაზღვრე, ეკუთვნის თუ არა მომხმარებელს ფასდაკლება:
// 1. თუ მომხმარებელი 18 წლამდეა ან სტუდენტია — მიიღოს 15% ფასდაკლება.
// 2. თუ მომხმარებელს ფასდაკლების ბარათი აქვს ან შენაძენის თანხა 200 ლარზე მეტია — მიიღოს 20% ფასდაკლება.
// 3. თუ ორივე პირობა სრულდება (პირველიც და მეორეც) — მიიღოს 30% ფასდაკლება.
// 4. სხვა შემთხვევაში ფასდაკლება არ ეკუთვნის.

// let age = 20;
// let hasLicense = true;
// let hasExperience = false;

// if(age < 18){
//     console.log("Too young to drive")

// }else if(hasLicense === false){
//     console.log("License required")

// }else if(age >= 18 && hasLicense === true){
//     console.log("Experienced driver")

// }else if(age >= 18 && hasLicense === true && hasExperience === false){
//     console.log("Beginner driver")
// }

let age = 17;
let isStudent = false;
let hasDiscountCard = true;
let totalPrice = 150;

if (age === 17 || isStudent === true) {
  console.log("შენ მიიღე 15% ფასდაკლება");

}else if(hasDiscountCard === true || totalPrice > 200){
    console.log("შენ მიიღე 20% ფასდაკლება")

}else if((age === 17 || isStudent === true) && (hasDiscountCard === true || totalPrice > 200)){
    console.log("შენ მიიღე 30% ფასდაკლება")

}else{
    console.log("შენ ფასდაკლება არ გეკუთვნის")
}
