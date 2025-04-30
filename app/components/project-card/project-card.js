import { Component } from "./../../core/component.js";

export class ProjectCard extends Component {
  constructor() {
    super({
      // selector: "projects__cards-container",
      selector: "null",
      template: "app/components/project-card/project-card.html",
      styles: "app/components/project-card/project-card.css",
      scripts: () => {},
    });
  }
}
