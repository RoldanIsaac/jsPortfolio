import { Component } from "../../core/component.js";
import { ModeToggle } from "../mode-toggle/mode-toggle.js";

export class Footer extends Component {
  constructor({ selector }) {
    super({
      selector: selector,
      template: "app/components/footer/footer.html",
      styles: "app/components/footer/footer.css",
      script: () => {},
      imports: [
        {
          name: "modeToggle",
          componentClass: ModeToggle,
          selector: "#mode-toggle",
        },
      ],
    });
  }
}
