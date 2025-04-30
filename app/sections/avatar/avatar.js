import { Component } from "../../core/component.js";

export class Avatar extends Component {
  constructor() {
    super({
      selector: "#avatar-container",
      template: "app/sections/avatar/avatar.html",
      styles: "app/sections/avatar/avatar.css",
      script: () => {},
    });
  }
}
