//Current Salary

// Problem 06 - Current Salary Calculation
//1st Example
var experience = 30;
var startingSalary = 45000;
var currentSalary = startingSalary;
var year;
// Increment 5% every year
for (var year = 1; year <= experience; year++) {
  currentSalary = currentSalary * 1.05;
}

currentSalary = Math.round(currentSalary * 100) / 100;

console.log(
  '\nValue (startingSalary:',
  startingSalary + ') (experience:',
  experience + ') \nOutput:',
  currentSalary
);

//OUTPUT: Value (startingSalary 45000) (experience 30) Output: 194617.72

//2nd Example
var experience = 3;
var startingSalary = 15000;
var currentSalary = startingSalary;
var year;
// Increment 5% every year
for (var year = 1; year <= experience; year++) {
  currentSalary = currentSalary * 1.05;
}

currentSalary = Math.round(currentSalary * 100) / 100;

console.log(
  '\nValue (startingSalary:',
  startingSalary + ') (experience:',
  experience + ') \nOutput:',
  currentSalary
);

//OUTPUT: Value (startingSalary 15000) (experience 3) Output: 17364.38

//3rd Example
var experience = 40;
var startingSalary = 30000;
var currentSalary = startingSalary;
var year;
// Increment 5% every year
for (var year = 1; year <= experience; year++) {
  currentSalary = currentSalary * 1.05;
}

currentSalary = Math.round(currentSalary * 100) / 100;

console.log(
  '\nValue (startingSalary:',
  startingSalary + ') (experience:',
  experience + ') \nOutput:',
  currentSalary
);
//OUTPUT: Value (startingSalary 30000) (experience 40) Output: 211199.66

//node pro06.js (Run in terminal)
