/**
 * input = [a,b,c,d]
output = {a:{b:{c:{d}}}}
 */

function arrayToNestedObject(arr) {
  return arr.reduceRight((acc, key) => ({ [key]: acc }), {});
}

console.log(arrayToNestedObject(['a', 'b', 'c', 'd']))
//console.log(arrayToNestedObject(['a', 'b', 'c', 'd', 'e', 'f']))
//console.log(arrayToNestedObject(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']))