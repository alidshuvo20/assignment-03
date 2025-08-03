//Delete / Store

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

// Problem 04 - Delete/Store Files
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

//node pro04.js (Run in terminal)
