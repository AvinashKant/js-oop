/**
 * 121. Best Time to Buy and Sell Stock
 * 
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 * Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
 * @param {*} arr 
 * @returns 
 */

var maxProfit = function (prices) {
    let maxProfile = 0;

    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            let profit = prices[j] - prices[i]; //1-7
            //console.log("c= ",prices[i] , prices[j] , profit , maxProfile , profit)
            if (prices[j] > prices[i] && profit && (profit > maxProfile)) {
                maxProfile = profit;
            }
        }
    }
    return maxProfile;
};

var maxProfit = function(prices) {
    let minPrice = Infinity;  // Smallest price so far
    let maxProfit = 0;        // Max profit found so far

    for (let i = 0; i < prices.length; i++) {
        const price = prices[i];

        if (price < minPrice) {
            minPrice = price;  // Update min if current price is lower
        } else {
            maxProfit = Math.max(maxProfit, price - minPrice);  // Update max profit
        }
    }
    return maxProfit    
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])) //5
console.log(maxProfit([7, 6, 4, 3, 1])) //0
console.log(maxProfit([1,2])) // 1
   