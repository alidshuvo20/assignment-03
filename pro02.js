//Problem - 02 Cycle or  Laptop
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
console.log('\nMoney:', money1, 'Output:', buy);

// For Money2
if (money2 >= 25000) {
  buy = 'Laptop';
} else if (money2 >= 10000) {
  buy = 'Cycle';
} else {
  buy = 'Chocolate';
}
console.log('Money:', money2, 'Output:', buy);

// For Money3
if (money3 >= 25000) {
  buy = 'Laptop';
} else if (money3 >= 10000) {
  buy = 'Cycle';
} else {
  buy = 'Chocolate';
}
console.log('Money:', money3, 'Output:', buy);

//node pro02.js (Run in terminal)

// Money1(45000) Output: Laptop
// Money2(10000) Output: Cycle
// Money3(9999)  Output: Chocolate
