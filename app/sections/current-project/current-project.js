import { Component } from "../../core/component.js";

export class CurrentProject extends Component {
  constructor({ selector }) {
    super({
      selector: selector,
      template: "app/sections/current-project/current-project.html",
      styles: "app/sections/current-project/current-project.css",
      script: () => {},
      imports: [],
    });
  }
}
