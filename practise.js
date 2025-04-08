
class CustomPromise {
    constructor(executor) {
        this.state = "pending";
        this.value = undefined;
        this.callbacks = [];
        const resolve = (value) => {
            if (this.state === "pending") {
                this.state = "fulfilled";
                this.value = value;
                this.callbacks.forEach(callback => callback(value));
            }
        };
        const reject = (reason) => {
            if (this.state === "pending") {
                this.state = "rejected";
                this.value = reason;
            }
        };
        executor(resolve, reject);
    }
    then(onFulfilled) {
        if (this.state === "fulfilled") {
            onFulfilled(this.value);
        } else {
            this.callbacks.push(onFulfilled);
        }
    }
}

const promise = new CustomPromise((resolve, reject) => {
    setTimeout(() => resolve("Custom Promise Resolved!"), 1000);
});
promise.then(data => console.log(data)); 