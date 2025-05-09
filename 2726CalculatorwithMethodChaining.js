/**
 * Input: 
actions = ["Calculator", "add", "subtract", "getResult"], 
values = [10, 5, 7]
Output: 8
Explanation: 
new Calculator(10).add(5).subtract(7).getResult() // 10 + 5 - 7 = 8
Example 2:

Input: 
actions = ["Calculator", "multiply", "power", "getResult"], 
values = [2, 5, 2]
Output: 100
Explanation: 
new Calculator(2).multiply(5).power(2).getResult() // (2 * 5) ^ 2 = 100
Example 3:

Input: 
actions = ["Calculator", "divide", "getResult"], 
values = [20, 0]
Output: "Division by zero is not allowed"
Explanation: 
new Calculator(20).divide(0).getResult() // 20 / 0 

The error should be thrown because we cannot divide by zero.
 */

class Calculator {

    /** 
     * @param {number} value
     */
    constructor(value) {
        this.value = value;
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    add(value) {
        this.value = this.value + value;
        return this;

    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value) {
        this.value = this.value - value;
        return this;
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    multiply(value) {
        this.value = this.value * value;
        return this;
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {

        if (value) {
            this.value = this.value / value;
        } else {
            this.value = 'Division by zero is not allowed';
        }

        return this;
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        this.value = Math.pow(this.value, value);
        return this;
    }

    /** 
     * @return {number}
     */
    getResult() {
        return this.value;

    }
}

console.log(new Calculator(10).add(5).subtract(7).getResult()) //8
console.log(new Calculator(2).multiply(5).power(2).getResult()) //100
console.log(new Calculator(20).divide(0).getResult())