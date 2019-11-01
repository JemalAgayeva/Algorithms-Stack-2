String.prototype.hashCode = function () {
  let hash = 0;

  if (this.length == 0) return hash;

  for (let i = 0; i < this.length; i++) {
    const char = this.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash &= hash; //Convert-->32b int
  }

  return hash;
}

class HashMap {
  constructor(capacity) {
    this.capacity = capacity;
    this.table = [];
  }

  // set key and value
  add(key, val) {
    const hashed = key.hashCode();
    const mod = hashed % this.capacity;
    this.table[mod] = [key, val];
  }

  // retrieve value using key
  find(key) {
    const hashed = key.hashCode();
    const mod = hashed % this.capacity;
    const bucket = this.table[mod];
    return typeof bucket !== 'undefined'
      ? bucket[1]
      : null;
  }

  // remove and return the value (if found)
  remove(key) {
    const hashed = key.hashCode();
    const mod = hashed % this.capacity;
    const bucket = this.table[mod];
    const val = typeof bucket !== 'undefined'
      ? bucket[1]
      : null;
    delete this.table[mod];

    return val;
  }

  // grow capacity by 50% and then rehash
  grow() {
    this.capacity = Math.round(this.capacity * 1.5);
    for (let i = 0; i < this.table.length; i++) {
      if (typeof this.table[i] !== 'undefined') {
        const [key, val] = this.table[i];
        const hashed = key.hashCode();
        const mod = hashed % this.capacity;

        if (mod !== i) {
          delete this.table[i];
          this.table[mod] = [key, val];
        }
      }
    }
  }
}

module.exports = {
  HashMap
}