// 344. Reverse String
// https://leetcode.com/problems/reverse-string/description/

/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
  return s.split('').reverse().join('');
};

let s = 'hello';
console.info(reverseString(s));
