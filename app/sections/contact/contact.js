import { Component } from "../../core/component.js";

export class Contact extends Component {
  constructor() {
    super({
      selector: "#contact-container",
      template: "app/sections/contact/contact.html",
      styles: "app/sections/contact/contact.css",
      script: () => {},
    });
  }
}
