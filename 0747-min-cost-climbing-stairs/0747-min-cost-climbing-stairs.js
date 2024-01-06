/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    // Bottom up - iteration - Getting rid of recursive stack - O(n) 
	const n = cost.length;
	const dp = new Array(n).fill(0);

	for (let i = 0; i < n; i++) {
		if (i < 2){ // i = 0 or i = 1
            dp[i] = cost[i];
        }else{    
            dp[i] = cost[i] + Math.min(dp[i-1], dp[i-2]);
        }
	}
    // console.log(dp)
	return Math.min(dp[n-1], dp[n-2]);
};