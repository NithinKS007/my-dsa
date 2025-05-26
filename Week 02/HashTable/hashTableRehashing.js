class HashTable {
    constructor(capacity) {
      this.buckets = new Array(capacity);
      this.capacity = capacity;
      this.size = 0; // Tracks the number of elements in the hash table
      this.loadFactorThreshold = 0.7;
    }
  
    hash(key) {
      let hashValue = 0;
      for (let i = 0; i < key.length; i++) {
        hashValue += key.charCodeAt(i);
      }
      return hashValue % this.capacity;
    }
  
    // Resizing the hash table if the load factor exceeds the threshold
    resize() {
      const newCapacity = this.capacity * 2;
      const newTable = new HashTable(newCapacity);
  
      // Rehash all existing entries to the new table
      for (let bucket of this.buckets) {
        if (bucket) {
          for (let [key, value] of bucket) {
            newTable.set(key, value);
          }
        }
      }
  
      this.capacity = newCapacity;
      this.buckets = newTable.buckets;
    }
  
    set(key, value) {
      // Resize if necessary
      if (this.size / this.capacity > this.loadFactorThreshold) {
        this.resize();
      }
  
      const index = this.hash(key);
  
      if (!this.buckets[index]) {
        this.buckets[index] = [];
      }
      const bucket = this.buckets[index];
  
      const existingEntryIndex = bucket.findIndex(
        ([existingKey]) => existingKey === key
      );
  
      if (existingEntryIndex !== -1) {
        bucket[existingEntryIndex][1] = value;
      } else {
        bucket.push([key, value]);
        this.size++;
      }
    }
  
    get(key) {
      const index = this.hash(key);
      const bucket = this.buckets[index];
  
      if (bucket) {
        const entry = bucket.find(([existingKey]) => existingKey === key);
        return entry ? entry[1] : undefined;
      }
  
      return undefined;
    }
  
    remove(key) {
      const index = this.hash(key);
      const bucket = this.buckets[index];
  
      if (bucket) {
        const entryIndex = bucket.findIndex(
          ([existingKey]) => existingKey === key
        );
  
        if (entryIndex !== -1) {
          bucket.splice(entryIndex, 1);
          this.size--;
        }
      }
    }
  
    has(key) {
      const index = this.hash(key);
      const bucket = this.buckets[index];
  
      if (bucket) {
        return bucket.some(([existingKey]) => existingKey === key);
      }
  
      return false;
    }
  
    display() {
      for (let i = 0; i < this.buckets.length; i++) {
        if (this.buckets[i]) {
          console.log(`Bucket ${i}:`, this.buckets[i]);
        } else {
          console.log(`Bucket ${i}: empty`);
        }
      }
    }
  
    loadFactor() {
      return this.size / this.capacity;
    }
  }

  const table = new HashTable(10);
  table.set("name", "Nithin");
  table.set("age", "20");
  table.set("naem", "Kottayam");
  table.set("maen", "Kottayam");
  table.set("Place2", "Ernakulam");
  table.set("Place3", "Mumbai"); // This will trigger a resize
  
  console.log("Load Factor:", table.loadFactor());
  table.display();
  table.has("age");
  