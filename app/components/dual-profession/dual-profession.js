import { Component } from "../../core/component.js";

export class DualProfession extends Component {
  constructor({ selector, props }) {
    super({
      selector: selector,
      template: "app/components/dual-profession/dual-profession.html",
      styles: "app/components/dual-profession/dual-profession.css",
      script: () => {},
      props,
    });
  }
}
