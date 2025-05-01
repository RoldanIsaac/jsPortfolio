import { Component } from "../../core/component.js";

export class Avatar extends Component {
  constructor({ selector }) {
    super({
      selector: selector,
      template: "app/components/avatar/avatar.html",
      styles: "app/components/avatar/avatar.css",
      script: () => {},
    });
  }
}
