class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let count = 0;
        let node = this.head;

        while (node) {
            count++;
            node = node.next;
        }
        console.log(count);
        return count;
    }

    getFirst() {
        console.log(this.head ? this.head : 'No Node in Linked List');
        return this.head ? this.head : 'No Node in Linked List';
    }

    getLast() {
        if (!this.head) {
            return null;
        }

        let node = this.head;

        while (node) {
            if (!node.next) {
                return node;
            }
            node = node.next;
        }
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (!this.head) {
            console.log('No Node In Linked List');
            return;
        }
        this.head = this.head.next;
        console.log(this.head);
    }

    removeLast() {
        if (!this.head) {
            return;
        }

        if (!this.head.next) {
            this.head = null;
            return;
        }

        let previous = this.head;
        let node = this.head.next;

        while (node.next) {
            previous = node;
            node = node.next;
        }
        previous.next = null;
        console.log(this.head);
    }

    insertLast(data) {
        const last = this.getLast();

        if (last) {
            last.next = new Node(data);
        } else {
            this.head = new Node(data);
        }
        console.log(this.head);
    }

    getAt(index) {
        let node = this.head;
        let count = 0;

        while (node) {
            if (index == count) {
                return node;
            }
            count++;
            node = node.next;
        }

        return null;
    }

    removeAt(index) {
        if (!this.head) {
            return;
        }

        if (index === 0) {
            this.head = this.head.next;
            console.log(this.head);
            return;
        }

        const previous = this.getAt(index - 1);
        if (!previous || !previous.next) {
            return null;
        }
        previous.next = previous.next.next;

        console.log(this.head);
    }

    insertAt(data, index) {
        if (!this.head) {
            this.head = new Node(data);
            console.log(this.head);
            return;
        }

        if (index === 0) {
            this.head = new Node(data, this.head);
            console.log(this.head);
            return;
        }

        const previous = this.getAt(index - 1) || this.getLast();
        const node = new Node(data, previous.next);
        previous.next = node;
        console.log(this.head);

    }
}

let list = new LinkedList();
list.insertFirst('aaa');
list.insertFirst('bbb');
list.insertFirst('ccc');
// list.clear();
// list.getFirst();
// list.getLast();
// list.size();
// list.removeFirst();
// list.removeLast();
// list.getLast();
// list.insertLast('aaaaaaaaa');
// console.log(list.getAt(1));
// list.removeAt(4);
list.insertAt('asanbhag', 3);