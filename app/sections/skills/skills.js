import { Component } from "../../core/component.js";

export class Skills extends Component {
  constructor({ selector }) {
    super({
      selector: selector,
      template: "app/sections/skills/skills.html",
      styles: "app/sections/skills/skills.css",
      script: () => {},
    });
  }
}
