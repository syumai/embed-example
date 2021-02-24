// src/counter.ts
var Counter = class {
  constructor() {
    this.count = 0;
  }
  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }
  current() {
    return this.count;
  }
};

// src/index.ts
var createApp = (root) => {
  const appContainer = document.createElement("div");
  const countContainer = document.createElement("div");
  const incrementButton = document.createElement("button");
  const decrementButton = document.createElement("button");
  incrementButton.textContent = "+";
  decrementButton.textContent = "-";
  const counter = new Counter();
  const update = () => {
    countContainer.textContent = counter.current().toString();
  };
  incrementButton.addEventListener("click", () => {
    counter.increment();
    update();
  });
  decrementButton.addEventListener("click", () => {
    counter.decrement();
    update();
  });
  update();
  appContainer.appendChild(countContainer);
  appContainer.appendChild(incrementButton);
  appContainer.appendChild(decrementButton);
  root.appendChild(appContainer);
};
export {
  createApp
};
