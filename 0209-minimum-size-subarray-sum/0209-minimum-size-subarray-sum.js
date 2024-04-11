/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    if(nums.find(num => num >= target)){
        return 1;
    }
    let minLength = Infinity;
    let l = 0; 
    let sum = 0;
    for(let r = 0; r < nums.length; r++){
        sum += nums[r];
        while(sum >= target){
            minLength = Math.min(minLength, r - l + 1);
            sum -= nums[l];
            l++;
        }
    }
    return minLength === Infinity? 0 : minLength;
};