const crypto = require("crypto");

function hash(value) {
  return parseInt(crypto.createHash("md5").update(value).digest("hex").slice(0, 8), 16);
}

class ConsistentHashing {
  constructor(nodes = []) {
    this.ring = new Map();
    this.sortedHashes = [];

    nodes.forEach(node => this.addNode(node));
  }

  addNode(node) {
    const nodeHash = hash(node);
    this.ring.set(nodeHash, node);
    this.sortedHashes.push(nodeHash);
    this.sortedHashes.sort((a, b) => a - b);
  }

  getNode(key) {
    const keyHash = hash(key);
    for (let h of this.sortedHashes) {
      if (keyHash <= h) return this.ring.get(h);
    }
    return this.ring.get(this.sortedHashes[0]); // wrap around
  }
}

// Example usage
const ch = new ConsistentHashing(["nodeA", "nodeB", "nodeC"]);
console.log(ch.getNode("user123")); // maps to closest node
