const { SList: OriginalSList, Node } = require('../../Python_Weeks3-6/W4_Ch5_SLists/sList');

class SList extends OriginalSList {
  constructor() {
    super();
  }

  reverse() {
    this.display();
    if (!this.head || !this.head.next) return this;

    let newHead = this.head.next;
    this.head.next = null;

    while (newHead) {
      const nextNewHead = newHead.next;
      newHead.next = this.head;
      this.head = newHead;
      newHead = nextNewHead;
    }
    return this;
  }

  /* 
    * If you manually create two objects that have same exact
    * keys and values. They will not be == or ===
    * However, if you have two vars that point to the same obj
    * == or === will return true because it is the same instance

    * APPROACH:
      * two runners are sent out and one runner goes faster so it will
      * eventually 'lap' the slower runner if there is a loop, 
      * at the moment faster runner laps slower runner, they are at the same
      * place, aka same instance of a node.
  */
  hasLoop() {
    if (!this.head) return false;
    
    let fasterRunner = this.head;
    let runner = this.head;

    while (fasterRunner && fasterRunner.next) {
      runner = runner.next;
      fasterRunner = fasterRunner.next.next;

      if (runner === fasterRunner)
        return true;
    }
    return false;
  }

  breakLoop() {
    let fasterRunner = this.head, slowerRunner = this.head;

    while (fasterRunner && fasterRunner.next) {
      fasterRunner = fasterRunner.next.next;
      slowerRunner = slowerRunner.next;

      if (fasterRunner === slowerRunner) {

        if (slowerRunner === this.head) {
          // "perfect loop" leading to the head
          while (fasterRunner.next !== slowerRunner) {
            // slowerRunner stops to 'rest' at the start of track (head)
            // fasterRunner keeps running until his 'next' step would lap
            // the slowerRunner, and then stops there
            fasterRunner = fasterRunner.next;
          }
        }
        else {
          // non perfect loop (tail does not connect to head)
          // new runner enters track at the part of the track before
          // the loop part (track can be visualized as the letter 'd')
          // fasterRunner is already in the loop
          let newRunner = this.head;
          while (newRunner.next !== fasterRunner.next) {
            newRunner = newRunner.next;
            fasterRunner = fasterRunner.next;
          }

        }
        fasterRunner.next = null;
        return this;
      }
    }
    return this;
  }

  display() {
    if (!this.hasLoop())
      OriginalSList.prototype.display.call(this);
    else {
      console.log('list has a loop, break it to display.');
    }
  }
}

const sList = new SList();
sList.seed([1, 2, 3, 4, 5]);
sList.head.next.next.next.next.next = sList.head;
// sList.head.next.next.next.next.next = sList.head.next.next;
console.log(
  sList.hasLoop()
);
sList.display();
sList.breakLoop();
sList.display();