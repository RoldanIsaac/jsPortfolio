import { Component } from "../../core/component.js";

export class Footer extends Component {
  constructor() {
    super({
      selector: "#footer-container",
      template: "app/components/footer/footer.html",
      styles: "app/components/footer/footer.css",
      script: () => {},
    });
  }
}
