class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    pop() {
        if (this.isEmpty()) {
            return null;
        }
        if (this.heap.length === 1) {
            return this.heap.pop();
        }
        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return root;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    heapifyUp() {
        let currentIdx = this.heap.length - 1;
        while (currentIdx > 0) {
            const parentIdx = Math.floor((currentIdx - 1) / 2);
            if (this.heap[currentIdx] < this.heap[parentIdx]) {
                [this.heap[currentIdx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[currentIdx]];
                currentIdx = parentIdx;
            } else {
                break;
            }
        }
    }

    heapifyDown() {
        let currentIdx = 0;
        while (true) {
            const leftChildIdx = 2 * currentIdx + 1;
            const rightChildIdx = 2 * currentIdx + 2;
            let smallestChildIdx = currentIdx;

            if (leftChildIdx < this.heap.length && this.heap[leftChildIdx] < this.heap[smallestChildIdx]) {
                smallestChildIdx = leftChildIdx;
            }

            if (rightChildIdx < this.heap.length && this.heap[rightChildIdx] < this.heap[smallestChildIdx]) {
                smallestChildIdx = rightChildIdx;
            }

            if (smallestChildIdx !== currentIdx) {
                [this.heap[currentIdx], this.heap[smallestChildIdx]] = [this.heap[smallestChildIdx], this.heap[currentIdx]];
                currentIdx = smallestChildIdx;
            } else {
                break;
            }
        }
    }
}

function solution(scoville, K) {
    let count = 0;
    const heap = new MinHeap();

    for (const value of scoville) {
        heap.push(value);
    }

    while (heap.heap.length > 1 && heap.heap[0] < K) {
        const first = heap.pop();
        const second = heap.pop();
        const mixed = first + (second * 2);
        heap.push(mixed);
        count++;
    }

    return heap.heap[0] >= K ? count : -1;
}