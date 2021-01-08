class Queue {
    constructor() {
        this.data = [];
    }

    add(item) {
        this.data.unshift(item);
        console.log(this.data);
    }

    remove() {
        return this.data.pop();
    }

    items() {
        return this.data;
    }
}

let myQueue = new Queue();

myQueue.add(1);
myQueue.add(2);
myQueue.add(3);
myQueue.add(4);

console.log(myQueue.items());
myQueue.remove();
console.log(myQueue.items());
