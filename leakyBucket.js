const BUCKET_CAPACITY = 10; // Max requests the bucket can hold
const LEAK_RATE = 1000; // Milliseconds between requests processing

let leakyBucket = {
    requests: [],
    addRequest: function(requestId) {
        if (this.requests.length < BUCKET_CAPACITY) {
            this.requests.push(requestId);
            console.log(`📥 Request ${requestId} added.`);
            return true;
        } else {
            console.log(`❌ Bucket full. Request ${requestId} dropped.`);
            return false;
        }
    },
    processRequest: function() {
        if (this.requests.length > 0) {
            const requestId = this.requests.shift();
            console.log(`✅ Processing Request ${requestId}`);
            return true;
        }
        return false;
    }
};

function handleIncomingRequest(requestId) {
    if (!leakyBucket.addRequest(requestId)) {
        console.log('Request could not be processed. Try again later.');
    }
}

setInterval(() => {
    leakyBucket.processRequest();
}, LEAK_RATE); // Processes one request per LEAK_RATE