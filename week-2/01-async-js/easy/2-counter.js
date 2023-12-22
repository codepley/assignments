function startCounter(seconds) {
   console.log(seconds);
 
   if (seconds > 0) {
     // Schedule the next call after 1 second
     setTimeout(function() {
       startCounter(seconds - 1);
     }, 1000);
   } else {
     console.log("Counter has finished!");
   }
 }
 
 // Start the counter with an initial value (e.g., 10 seconds)
 startCounter(10);