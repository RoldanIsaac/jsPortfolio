import { Component } from "../../core/component.js";

export class Contact extends Component {
  constructor({ selector }) {
    super({
      selector: selector,
      template: "app/sections/contact/contact.html",
      styles: "app/sections/contact/contact.css",
      script: () => {},
    });
  }
}
