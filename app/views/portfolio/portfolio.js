import { Component } from "../../core/component.js";

export class Portfolio extends Component {
  constructor() {
    super({
      selector: "#app-container",
      template: "app/views/portfolio/portfolio.html",
      styles: "app/views/portfolio/portfolio.css",
      script: () => {},
    });
  }
}
