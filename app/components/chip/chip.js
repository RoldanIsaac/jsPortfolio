import { Component } from "../../core/component.js";

export class Chip extends Component {
  constructor({ selector, props }) {
    super({
      selector: selector,
      template: "app/components/chip/chip.html",
      styles: "app/components/chip/chip.css",
      script: (el) => {
        // console.log(el);
        const span = el.querySelector("span");
        span.addEventListener("click", () => {
          console.log("Nothing happens");
        });
      },
      props,
    });
  }
}
