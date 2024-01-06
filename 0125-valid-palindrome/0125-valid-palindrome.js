/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const arr = s.toLowerCase().split('').filter(c => /[0-9a-z]/.test(c));
    return arr.join('') === arr.reverse().join('')
};