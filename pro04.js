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

// Problem 04 (REAL)- Delete/Store Files
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

//node pro04.js (Run in terminal)

//((->(For Test Practice(Value: pdfData.jpg Output: Delete)<-))
//Value: pdfData.jpg
//Output: Delete

// Problem 04 (REAL)- Delete/Store Files

//(The Real Part Starts)

//Value: result.pdf
//Output: Store

//Value: data.docx
//Output: Store

//Value: pdfData.jpg
//Output: Delete

//Value: #exp.mp4
//Output: Store

//Value: docx.txt
//Output: Delete

//Value: docx.xpdf
//Output: Delete

//Value: slipdf.txt
//Output: Delete
