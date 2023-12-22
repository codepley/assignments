const fs = require("fs");

let newdata = "this is added later"

fs.readFile("a.txt", "utf-8", function(err, data) {
   newdata = data + newdata
})

fs.writeFile("a.txt", newdata, (err) => {
   if(err){
      console.log(err)
   }else{
      console.log("done");
   }
})