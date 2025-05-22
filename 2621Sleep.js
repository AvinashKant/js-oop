async function sleep(millis) {
    return await new Promise(resolve => setTimeout(resolve, millis));
}



//2619. Array Prototype Last
Array.prototype.last = function() {
    if (this.length === 0) {
      return -1;
    }
    return this[this.length - 1];    
};