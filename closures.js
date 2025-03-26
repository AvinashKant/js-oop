/*
function balance (){
    let balance = 0;
    return {
        getAmount:  () => balance,
        deposit:function (amount){
            balance += amount;
            return balance;
        }
    }
}
let account = balance();
console.log(account.getAmount());
console.log(account.deposit(500));
console.log(account.getAmount());

*/

/**
 * Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
 * @param {*} n 
 * @returns 
 */
var createCounter = function(n) {
    let count = n; // Use let to allow reassignment
    return () => {
        const result = count;
        count++;
        return result;
    };
};

var sum = createCounter(1);
console.log(sum())
console.log(sum())