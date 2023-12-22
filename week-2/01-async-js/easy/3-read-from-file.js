const fs = require('fs');

console.log(Date.now())
fs.readFile("a.txt", 'utf-8', function(err, data) {
  console.log(data);
  console.log(Date.now())
})

// for(let i=0; i<100000000000; i++){
//    // console.log(i);
// }