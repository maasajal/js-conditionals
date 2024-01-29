/***
Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
***/
console.log("Welcome to Food Spot!");
let beefBurger = 500;
let chickenBurger = 400;
let vegeBurger = 300;
let extraPetty = 100;

let coke = 30;

let burgerPrice = beefBurger + extraPetty;
// let burgerPrice = vegeBurger + extraPetty;

if (burgerPrice > 500) {
  console.log("Total price " + burgerPrice);
  console.log("You got a free coke");
} else {
  console.log("Total price " + burgerPrice);
  console.log("If you want coke, you have to pay " + coke + "tk");
}
