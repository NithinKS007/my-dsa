class MinHeap {
    constructor() {
       this.heap = []; 
    }
 
    getParentIndex(index) {
       return Math.floor((index - 1) / 2); 
    }
 
    getLeftIndex(index) {
       return index * 2 + 1; 
    }
 
    getRightIndex(index) {
       return index * 2 + 2; 
    }
 
    swap(index1, index2) {
       const temp = this.heap[index1]; 
       this.heap[index1] = this.heap[index2]; 
       this.heap[index2] = temp; 
    }
 
    insert(value) {
       this.heap.push(value); 
       this.bubbleUp(); 
    }
 
    bubbleUp() {
       let currentIndex = this.heap.length - 1;
 
       while (currentIndex > 0 && this.heap[currentIndex] < this.heap[this.getParentIndex(currentIndex)]) {
          this.swap(currentIndex, this.getParentIndex(currentIndex));
          currentIndex = this.getParentIndex(currentIndex); 
       }
    }
 
    poll() {
      if (this.heap.length === 0) return null; 
      const minValue = this.heap[0]; 
      this.heap[0] = this.heap[this.heap.length - 1];
      this.heap.pop(); 
      this.bubbleDown(0);  
  
      return minValue; 
  }
  
  bubbleDown(index) {
   let left = this.getLeftIndex(index);
   let right = this.getRightIndex(index);
   let targetIndex = index;

   if (left < this.heap.length && this.heap[left] < this.heap[targetIndex]) {
       targetIndex = left;
   }

   if (right < this.heap.length && this.heap[right] < this.heap[targetIndex]) {
       targetIndex = right;
   }

   if (targetIndex !== index) {
       this.swap(index, targetIndex);
       this.bubbleDown(targetIndex); 
   }
}
  
 
    peek() {
       return this.heap.length > 0 ? this.heap[0] : null; 
    }
 
    size() {
       return this.heap.length; 
    }
    display() {
        for (let i = 0; i < this.heap.length; i++) {
           console.log(this.heap[i]);
        }
     }
 }
const minHeap = new MinHeap();
minHeap.insert(10);
minHeap.insert(5);
minHeap.insert(20);
minHeap.display()

console.log(minHeap.poll()); 

