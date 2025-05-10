import { Component } from "../../core/component.js";

export class Chip extends Component {
  constructor({ selector, props }) {
    super({
      selector: selector,
      template: "app/components/chip/chip.html",
      styles: "app/components/chip/chip.css",
      script: (el) => {
        const span = el.querySelector("span");

        const setChipStyles = (() => {
          span.style.color = props.color;
          span.style.backgroundColor = props.bg;
        })();
      },
      props,
    });
  }
}
