import { Counter } from "./counter";

export const createApp = (root: HTMLElement) => {
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

  update(); // initialize container

  appContainer.appendChild(countContainer);
  appContainer.appendChild(incrementButton);
  appContainer.appendChild(decrementButton);
  root.appendChild(appContainer);
};
