/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.replace(/[^a-z0-9]/ig, '').toLowerCase();
  const size = str.length;

  if (size === 0 || size === 1) {
    return true;
  }
  let i = 0 , j = size-1;
  while(i<j){
    if(str[i] !== str[j]) return false;
    i++;
    j--;
  }
  return true;
}

module.exports = isPalindrome;
