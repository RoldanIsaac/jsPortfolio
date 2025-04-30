import { Component } from "../../core/component.js";

export class About extends Component {
  constructor() {
    super({
      selector: "#app",
      template: "app/views/about/about.html",
      styles: "app/views/about/about.css",
      script: () => {},
    });
  }
}
