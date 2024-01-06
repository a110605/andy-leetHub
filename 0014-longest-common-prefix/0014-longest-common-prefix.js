/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs === null || strs.length === 0) return "";
    
    let prefix = strs[0]; // assume first word is common prefix
    // compare to following words
    for(let i = 1 ; i < strs.length; i++){
        while(strs[i].indexOf(prefix) !== 0){
            prefix = prefix.substring(0, prefix.length - 1);
            // console.log('in while p=',prefix)
        }
    }
    return prefix;
};