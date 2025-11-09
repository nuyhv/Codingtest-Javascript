function solution(scoville, K) {
    class MinHeap {
        constructor() {
            this.heap = []
        }

        push(value) {
            this.heap.push(value);
            this.heapifyUp();
        }

        pop() {
            if (this.isEmpty()) {
                return null;
            }

            const root = this.heap[0];
            const last = this.heap.pop();

            if (this.heap.length > 0) {
                this.heap[0] = last;
                this.heapifyDown();
            }

            return root
        }

        isEmpty() {
            return this.heap.length === 0;
        }

        heapifyUp() {
            let currentIndex = this.heap.length - 1;

            while (currentIndex > 0) {
                const parentIndex = Math.floor((currentIndex - 1) / 2);

                if (this.heap[currentIndex] < this.heap[parentIndex]) {
                    this.swap(currentIndex, parentIndex);
                    currentIndex = parentIndex;
                } else {
                    break;
                }
            }
        }

        heapifyDown() {
            let currentIndex = 0;

            while (true) {
                const leftChildIndex = 2 * currentIndex + 1;
                const rightChildIndex = 2 * currentIndex + 2;
                let smallestChildIndex = currentIndex;

                if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallestChildIndex]) {
                    smallestChildIndex = leftChildIndex;
                }

                if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallestChildIndex]) {
                    smallestChildIndex = rightChildIndex;
                }

                if (smallestChildIndex !== currentIndex) {
                    this.swap(currentIndex, smallestChildIndex);
                    currentIndex = smallestChildIndex;
                } else {
                    break;
                }
            }
        }

        swap(i, j) {
            [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
        }
    }

    const heap = new MinHeap();
    scoville.forEach(value => heap.push(value));

    let mixCount = 0;

    while (heap.heap.length > 1 && heap.heap[0] < K) {
        const first = heap.pop();
        const second = heap.pop();

        const newScoville = first + (second * 2);
        heap.push(newScoville);

        mixCount++;
    }

    if (heap.heap[0] < K) {
        return -1;
    }

    return mixCount
}