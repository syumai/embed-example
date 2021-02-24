export class Counter {
  private count = 0;
  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }
  current() {
    return this.count;
  }
}
