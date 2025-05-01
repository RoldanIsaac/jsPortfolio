import { Component } from "../../core/component.js";

export class Skills extends Component {
  constructor({ selector }) {
    super({
      selector: selector,
      template: "app/sections/testimonials/testimonials.html",
      styles: "app/sections/testimonials/testimonials.css",
      script: () => {},
    });
  }
}
