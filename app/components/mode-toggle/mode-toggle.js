import { Component } from "../../core/component.js";

export class ModeToggle extends Component {
  constructor({ selector, props }) {
    super({
      selector: selector,
      template: "app/components/mode-toggle/mode-toggle.html",
      styles: "app/components/mode-toggle/mode-toggle.css",
      script: (el) => {
        const button = el.querySelector("button");

        button.addEventListener("click", () => {
          document.style.backgroundColor = "black";
        });
      },
      props,
    });
  }
}
