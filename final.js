// Problem 01 - Divide the Asset

var area1 = 100;
var area2 = 15;
var area3 = 2060;

//For First Area1
var share1 = area1 / 2;
console.log('\nValue of area:', area1, '\nOutput:', share1);
//console.log('\nValue:',...... , '\nOutput:',...... );

//For Second Area2
var share2 = area2 / 2;
console.log('Value of area:', area2, '\nOutput:', share2);
//console.log('\nValue:',...... , '\nOutput:',...... );

//For Third Area3
var share3 = area3 / 2;
console.log('Value of area:', area3, '\nOutput:', share3);
//console.log('\nValue:',...... , '\nOutput:',...... );

//Problem 02 - Cycle or  Laptop
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

//Problem 03 Medicine Planner

//For Last Day= 4
var lastDay = 4;
var output = '';

for (var day = 1; day <= lastDay; day++) {
  if (day % 3 === 0) {
    output += day + ' - medicine\n';
  } else {
    output += day + ' - rest\n';
  }
}
console.log('\nFor Value:', lastDay, '\nOutput:\n' + output);

//For Last Day= 6
var lastDay = 6;
var output = '';

for (var day = 1; day <= lastDay; day++) {
  if (day % 3 === 0) {
    output += day + ' - medicine\n';
  } else {
    output += day + ' - rest\n';
  }
}
console.log('\nFor Value:', lastDay, '\nOutput:\n' + output);

//Problem 04 - Delete / Store

var fileName = 'pdfData.jpg';
var action;

if (fileName[0] === '#') {
  action = 'Store';
} else if (fileName.endsWith('.pdf')) {
  action = 'Store';
} else if (fileName.endsWith('.docx')) {
  action = 'Store';
} else {
  action = 'Delete';
}
console.log(
  '\n((->(For Test Practice[Value: pdfData.jpg Output: Delete]<-))\nValue:',
  fileName,
  '\nOutput:',
  action
);

//  (REAL)- Delete/Store Files
console.log('\n\n(The Real Part Starts)');
var fileNames = [
  'result.pdf',
  'data.docx',
  'pdfData.jpg',
  '#exp.mp4',
  'docx.txt',
  'docx.xpdf',
  'slipdf.txt',
];

for (var i = 0; i < fileNames.length; i++) {
  var fileName = fileNames[i];
  var action;

  if (fileName[0] === '#') {
    action = 'Store';
  } else if (fileName.endsWith('.pdf')) {
    action = 'Store';
  } else if (fileName.endsWith('.docx')) {
    action = 'Store';
  } else {
    action = 'Delete';
  }

  console.log('\nValue:', fileName, '\nOutput:', action);
}

//Problem 05 - PH Email Generator

var student1 = { name: 'jhankar', roll: 1014, department: 'cse' };
console.log(
  '\n' + student1.name + student1.roll + '.' + student1.department + '@ph.ac.bd'
);
var student2 = { name: 'monu', roll: 99, department: 'eee' };
console.log(
  student2.name + student2.roll + '.' + student2.department + '@ph.ac.bd'
);

var student3 = { name: 'mewo', roll: 96, department: 'cse' };
console.log(
  student3.name + student3.roll + '.' + student3.department + '@ph.ac.bd'
);

//Problem 06 - Current Salary

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

//node final.js (Run in terminal)
