//piece of data = va; 
//reference to next node - next

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    //pushes item in the list
    push(val) {
        //creating new node using the passed value
        let node = new Node(val);

        //if there is no head, set the head and tail to be newly created node
        if (!this.head) {
            this.head = node;
            this.tail = node;

        } else {
            // else set the next property on the tail to be the new node 
            this.tail.next = node;
            // and set the tail property to be newly created node
            this.tail = node;

        }
        //increment the length by 1
        this.length++;
        return this;
    }

    //pops out the element from SinglyLinkedList and returns it
    pop() {
        //if there is no nodes in the list, return undefined
        if (!this.head) return undefined;
        let current = this.head; //current node = the head
        let pre = current; //pre node = current for now 
        //loop through through the list until reaching the tail
        while (current.next) {
            pre = current
            current = current.next;
        }

        pre.next = null; // setting the 2nd last node to be null
        this.tail = pre; // setting the taile to be the 2nd last node
        this.length--; // decrementing the length by 1
        if (this.length < 1) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    //removes the head element and makes it point to next head
    shift() {
        if (!this.head) return undefined;
        //storing the current head in current variable
        let current = this.head;
        //setting the head to be current.next
        this.head = current.next;
        //decrementing length by 1
        this.length--;

        return current;

    }

    //adds element to the beginning of the list 
    unshift(value) {
        //creating new node with the inserted value
        let node = new Node(value);
        //if there is no element then set the new node to be head and tail
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            //setting the new nodes next to be the current head
            node.next = this.head;
            //setting the current head to be the new node
            this.head = node;
        }
        //incrementing the length by 1
        this.length++;
        return this;
    }

    //gets the element from index
    get(index) {
        //if index is less than zero or greather than or equal to the length of the list, return null
        if (index < 0 || index >= this.length) return null;
        let count = 0; //starting count
        //setting current variable = this.head to keep track of which element we are at
        let current = this.head;
        //loops until count is lesser than index
        while (count < index) {
            current = current.next; //sets current to current.next 
            count++; //increment count by 1
        }
        return current; //returns current 
    }

    //sets the value of a indexed element
    set(index, value) {

        let current = this.get(index);
        if (current) {
            current.val = value;
            return true
        } else {
            return false;
        }
    }

    //inserts new element at the given index
    insert(index, val) {

        //if index is less than zero or greater than the length return false;
        if (index < 0 || index > this.length) return false;
        //if index is equal to the length of the list call push(val)
        if (index === this.length) {
            this.push(val);
            return true;
        }
        //if index is equal to zero call unshift(val)
        else if (index === 0) {
            this.unshift(val);
            return true;
        }
        else {
            //creating new node with the value
            let node = new Node(val);
            let pre = this.get(index - 1); // getting previous elemnt 
            node.next = pre.next;// setting new node next property to the previous element next property
            pre.next = node; //setting previous element  next property to new node
            this.length++; //incrementing the length by 1
            return true;
        }

    }

    //removes element at the given index
    remove(index) {
        //checking the edge cases
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        let previousNode = this.get(index - 1); //previous element of the removed 
        let removed = previousNode.next; // the element thats gonna be removed 
        previousNode.next = removed.next // setting new element where the element was removed
        return removed;
    }

    //to reverse the linked list
    reverse() {
        //swapping head and tail
        this.head = this.tail;
        this.tail = node;

        let node = this.head; //creating a variable called node and initializing it to the head property
        let next = null; 
        let prev = null;

        //looping through the linkedlist
        for (let i = 0; i < this.length; i++) {
            next = node.next; //setting the next to be the next property of whatever node is 
            node.next = prev; // setting next property on the node to be whatever previous is
            prev = node; // setting prev to be the value of the node variable
            node = next; // setting node variable to be the value of next variable
        }
        return this;

    }

    print() {
        let arr = []
        let current = this.head;
        while (current) {
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }


}

let list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);


// console.log(list.unshift(20));
// console.log(list.unshift(30));
list.reverse();

list.print();