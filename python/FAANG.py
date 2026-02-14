# Flatten nested lists without loading everything in memory.
# nested = [1, [2, [3, 4]], 5]



# Peekable Generator
class Peekable:
    def __init__(self, gen):
        self.gen = gen
        self.buffer = None

    def peek(self):
        if self.buffer is None:
            self.buffer = next(self.gen)
        return self.buffer

    def next(self):
        if self.buffer:
            val = self.buffer
            self.buffer = None
            return val
        return next(self.gen)

# Token Bucket (Rate Limiter)
import time

def token_bucket(rate):
    tokens = rate
    last = time.time()

    while True:
        now = time.time()
        tokens += (now - last) * rate
        tokens = min(tokens, rate)
        last = now

        if tokens >= 1:
            tokens -= 1
            yield True
        else:
            yield False
