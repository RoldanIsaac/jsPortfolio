import { Component } from "./../../core/component.js";

export class ProjectCard extends Component {
  constructor({ selector, props }) {
    super({
      selector,
      template: "app/components/project-card/project-card.html",
      styles: "app/components/project-card/project-card.css",
      script: () => {},
      props,
    });
  }
}
