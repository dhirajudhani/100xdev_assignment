/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let count = 0;
  let n = str.length;
  let vowels = ['a', 'e', 'i', 'o', 'u']
  
  str = str.toLowerCase();
  for(let i = 0;i<n;i++){
    if(vowels.includes(str[i])){
      count++;
    }
  }
  return count
}

module.exports = countVowels;