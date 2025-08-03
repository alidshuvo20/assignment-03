//Cycle or  Laptop
var money1 = 45000;
var money2 = 10000;
var money3 = 9999;
var buy;

// For Money1
if (money1 >= 25000) {
  buy = 'Laptop';
} else if (money1 >= 10000) {
  buy = 'Cycle';
} else {
  buy = 'Chocolate';
}
console.log('Money1(45000)', buy);

// For Money2
if (money2 >= 25000) {
  buy = 'Laptop';
} else if (money2 >= 10000) {
  buy = 'Cycle';
} else {
  buy = 'Chocolate';
}
console.log('Money2(10000)', buy);

// For Money3
if (money3 >= 25000) {
  buy = 'Laptop';
} else if (money3 >= 10000) {
  buy = 'Cycle';
} else {
  buy = 'Chocolate';
}
console.log('Money3(9999)', buy);

//node pro02.js (Run in terminal)

// Money1(45000) Laptop
// Money2(10000) Cycle
// Money3(9999) Chocolate
