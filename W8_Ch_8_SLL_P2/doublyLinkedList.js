// head.prev is null if there is no loop

class DLLNode {
  constructor(val, prev = null, next = null) {
    this.val = val;
    this.prev = prev;
    this.next = next;
  }
}

class DLL {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(val) {
    const newTail = new DLLNode(val);

    if (!this.head) {
      this.head = this.tail = newTail;
    }
    else {
      this.tail.next = newTail;
      newTail.prev = this.tail;

      this.tail = newTail;
    }
  }

  append(targetVal, newVal) {
    const newNode = new DLLNode(newVal);
    let runner = this.head;
    
    while (runner) {
      if (runner.val === targetVal) {
        newNode.prev = runner;
        newNode.next = runner.next;
        runner.next.prev = newNode;
        runner.next = newNode;
        return;
      }
      else {
        runner = runner.next;
      }
    }
  }

  prepend(targetVal, newVal) {
    const newNode = new DLLNode(newVal);
    let runner = this.head;

    while (runner) {
      if (runner.val === targetVal) {
        newNode.next = runner;
        newNode.prev = runner.prev;
        runner.prev.next = newNode;
        runner.prev = newNode;
        return;
      }
      else {
        runner = runner.next;
      }
    }
  }

  deleteMiddleNode() {
    let forwardRunner = this.head;
    let backwardsRunner = this.tail;

    while (forwardRunner && backwardsRunner) {
      if (forwardRunner === backwardsRunner) {
        forwardRunner.prev.next = forwardRunner.next;
        return;
      }
      else {
        forwardRunner = forwardRunner.next;
        backwardsRunner = backwardsRunner.prev;
      }
    }
  }

  print(separator = ", ") {
    let str = "";

    if (this.head) {
      str = `${this.head.val}`;
      
      let runner = this.head.next;

      while (runner) {
        str += `${separator}${runner.val}`;
        runner = runner.next;
      }
    }
    console.log(str);
    return str;
  }
}

const dll = new DLL();
dll.push(1);
dll.push(2);
dll.push(3);
dll.push(4);
dll.append(2, 2.5);
dll.prepend(2, 1.5);
dll.deleteMiddleNode();
dll.print();



