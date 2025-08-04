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

//node pro03.js (Run in terminal)

//For Value: 4

// Output:
// 1 - rest
// 2 - rest
// 3 - medicine
// 4 - rest

//For Value: 6

// Output:
// 1 - rest
// 2 - rest
// 3 - medicine
// 4 - rest
// 5 - rest
// 6 - medicine
