const Stack = require('../Stack');

class Queue{
    constructor(){
        this.firstStack = new Stack();
        this.secondStack = new Stack();
    }

    add(item) {
        this.firstStack.add(item);
    }

    remove() {
         while(this.firstStack.getLastElm()){
             this.secondStack.add(this.firstStack.remove());
         } 

         const item = this.secondStack.remove();

         while(this.secondStack.getLastElm()){
            this.firstStack.add(this.secondStack.remove());
        } 

        return item;
    }

}

const q = new Queue();

q.add('red');
q.add('green');
q.add('blue');
console.log(q.remove());
console.log(q.remove());
console.log(q.remove());

