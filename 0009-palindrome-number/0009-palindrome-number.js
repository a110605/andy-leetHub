/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) return false;
    const xStr = x.toString();
    const len = xStr.length
    for(let i = 0 ; i < len/2 ; i++){
        if(xStr[i] !== xStr[len - i - 1]){
            return false;
        }
    }
    return true;
};