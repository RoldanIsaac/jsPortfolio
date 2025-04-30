import { Component } from "../../core/component.js";

export class Skills extends Component {
  constructor() {
    super({
      selector: "#skills-container",
      template: "app/sections/skills/skills.html",
      styles: "app/sections/skills/skills.css",
      script: () => {},
    });
  }
}
