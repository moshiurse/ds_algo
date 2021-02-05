class Stack {
    constructor() {
        this.data = [];
    }

    add(item) {
        this.data.push(item);
    }

    remove() {
        return this.data.pop();
    }

    getLastElm() {
        return this.data[this.data.length - 1];
    }
}

let stack = new Stack();
stack.add(1);
stack.add(2);
stack.getLastElm();
stack.remove();
console.log(stack.getLastElm());

module.exports = Stack;