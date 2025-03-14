
/**
 * Input: n = 4
 * Output: "1211"
 * Explanation:
 *  countAndSay(1) = "1"
 *  countAndSay(2) = RLE of "1" = "11"
 *  countAndSay(3) = RLE of "11" = "21"
 *  countAndSay(4) = RLE of "21" = "1211"
 */

var countAndSay = function (n) {

    if (n === 1) {
        return "1";
    }

    let sequence = "1";

    for (let i = 2; i <= n; i++) {
        let nextSequence = "";
        let count = 1;

        for (let j = 0; j < sequence.length; j++) {
            if (j + 1 < sequence.length && sequence[j] === sequence[j + 1]) {
                count++;
            } else {
                nextSequence += count.toString() + sequence[j];
                count = 1;
            }
        }
        sequence = nextSequence;
    }
    return sequence;

};



console.log(countAndSay(1));
console.log(countAndSay(2));
console.log(countAndSay(3));
console.log(countAndSay(4));
console.log(countAndSay(5));