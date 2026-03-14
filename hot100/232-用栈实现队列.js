/**
 * 232. 用栈实现队列
 * https://leetcode.cn/problems/implement-queue-using-stacks/
 */

class MyQueue {
  constructor() {
    this.stack = [];
  }
  push(x) {
    this.stack.push(x);
  }
  pop() {
    return this.stack.shift();
  }
  peek() {
    return this.stack[0];
  }
  empty() {
    return this.stack.length === 0;
  }
}
