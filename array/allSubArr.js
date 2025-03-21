let arr = [1,3,4,6,7,8,9,10];

var allSubsets = function(nums) {
    let resultSubSet = [];
    for(let i = 0; i < nums.length; i++) {
        subset = "";
        for(let j = 1; j < nums.length; j++) {
            subset += `(${nums[i]} , ${nums[j]}), `;
        }
        resultSubSet.push(subset)
    }
    return resultSubSet;
};

console.log(allSubsets(arr)); //