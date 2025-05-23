/**
 * Token Bucket Algorithm
 * The Token Bucket algorithm uses a bucket of tokens to limit and regulate the flow of requests.
 * To understand this algorithm, imagine there is a bucket containing a fixed number of tokens.
 * Tokens in this bucket are added at a fixed rate and when a request arrives at the server,
 * a token must be consumed from the bucket. If there are no tokens available, 
 * the request can be either rejected or delayed until tokens are available in the bucket.
 */

const MAX_TOKENS = 2;
const REFILL_RATE = 5000;

const bucket = {
    tokens: MAX_TOKENS,
    hasTokens: function () { // Checks if we have tokens available
        return this.tokens > 0;
    },
    consumeToken: function () { // Function to consume a token
        if (this.hasTokens())
            this.tokens -= 1;
    },
    releaseToken: function () { // Function to release a token
        if (this.tokens < MAX_TOKENS)
            this.tokens += 1;
    }
};

async function handleIncomingRequest(requestId) {
    if (!bucket.hasTokens()) {
        console.log('Out of tokens! Please try again later', requestId);
        return;
    }

    bucket.consumeToken();
    console.log('✅ Processing Request...', requestId);
    await waitFor(2 * 1000); // Simulate a fake wait time
    return true;
}

function waitFor(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

setInterval(() => {
    if (!bucket.hasTokens())
        bucket.releaseToken();
}, REFILL_RATE);

console.log(handleIncomingRequest("requestId 1"));
console.log(handleIncomingRequest("requestId 2"));
console.log(handleIncomingRequest("requestId 3"));
console.log(handleIncomingRequest("requestId 4"));
console.log(handleIncomingRequest("requestId 5"));