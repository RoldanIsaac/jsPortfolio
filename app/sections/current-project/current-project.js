import { Component } from "../../core/component.js";
import { Chip } from "../../components/chip/chip.js";

export class CurrentProject extends Component {
  constructor({ selector }) {
    super({
      selector: selector,
      template: "app/sections/current-project/current-project.html",
      styles: "app/sections/current-project/current-project.css",
      script: () => {},
      imports: [
        {
          name: "chip",
          componentClass: Chip,
          selector: "#chip-container",
          props: {
            label: "Google Api Services",
          },
        },
      ],
    });
  }
}
