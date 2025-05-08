import { Component } from "../../core/component.js";
import { domInjector } from "../../core/dom-injector.js";

export class Projects extends Component {
  constructor({ selector }) {
    super({
      selector: selector,
      template: "app/sections/projects/projects.html",
      styles: "app/sections/projects/projects.css",
      script: () => {},
    });
  }
}
