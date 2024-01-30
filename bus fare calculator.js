/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
console.log("Ticket fare Calculator");

var ticketPrice = 800;
// var age = 9;
var age = 65;
var isStudent = true;
// var isStudent = false;
console.log("==========================");

if (age < 10) {
  console.log("Free for children");
} else if (age >= 60) {
  console.log(
    "Senior citizens gets a 15% Discount - have to pay: " +
      (ticketPrice * 15) / 100
  );
} else {
  console.log("Ticket price: " + ticketPrice);
}
if (isStudent) {
  console.log(
    "Students get a 50% discount - have to pay: " + (ticketPrice * 50) / 100
  );
}
