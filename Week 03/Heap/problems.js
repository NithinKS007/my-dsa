//Find the kth largest element in an unsorted array using heap
const MinHeap = require("./minHeap");

const findKthLargest = (nums, k) => {
  const heap = new MinHeap();
  for (let num of nums) {
    heap.insert(num);
    if (heap.size() > k) {
      heap.poll();
    }
  }
  return heap.peek();
};

findKthLargest()