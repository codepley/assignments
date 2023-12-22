/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let str1 = str.split(",").join("").split(" ").join("").toLowerCase()
  let str2 = str1.split("").reverse().join("")
  return str1 === str2
}

// isPalindrome("No lemon, no melon")

module.exports = isPalindrome;
