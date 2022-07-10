const childProcess = require('child_process');
const process = require('process');

childProcess.exec('wkhtmltopdf --javascript-delay 10000 ./test.html ./d.pdf', (error, stdout, stderr) => {
  if (error) {
    console.log(error);
  } else {
    console.log(stdout);
  }
});




