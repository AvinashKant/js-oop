/**
 * Find the minimum number of coins required to make 'n' cents.
 * You can use standard American denominations, that is, 1¢, 5¢, 10¢, and 25¢.
 * For example, given n = 16, return 3 since we can make it with a (10+5+1).
 * For example, given n = 49, return 6 since we can make it with a (25 + 10 + 10 + 1 + 1 + 1).
 * For example, given n = 0, return 0 since we can make it with a 0.
 */

function calculateSetAndMinCoin(amount) {
    const denominations = [25, 10, 5, 1];
    let minimumCoins = 0;
    let setnumber = [];
    let i = 0;
    if (amount) {
        while (amount) {
            if ((amount / denominations[i]) >= 1) {
                //console.log(amount, denominations[i], amount / denominations[i]);
                amount = amount - denominations[i];
                minimumCoins++;
                setnumber.push(denominations[i])
            } else {
                i++
            }
        }
        console.log("minimumCoins = ", minimumCoins);
        console.log("Coins = ", setnumber);
    }
}

calculateSetAndMinCoin(16);
calculateSetAndMinCoin(49);
calculateSetAndMinCoin(0);
// console.log(49/51);
// console.log(49%51);