import { Component } from "../../core/component.js";
import { DualProfession } from "../../components/dual-profession/dual-profession.js";

export class Main extends Component {
  constructor({ selector }) {
    super({
      selector: selector,
      template: "app/sections/main/main.html",
      styles: "app/sections/main/main.css",
      script: () => {},
      imports: [
        {
          name: "dualProfession",
          componentClass: DualProfession,
          selector: "#dual-profession",
        },
      ],
    });
  }
}
