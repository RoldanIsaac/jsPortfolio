import { Component } from "../../core/component.js";
import { Avatar } from "../../components/avatar/avatar.js";

export class About extends Component {
  constructor({ selector }) {
    super({
      selector: selector,
      template: "app/views/about/about.html",
      styles: "app/views/about/about.css",
      script: () => {},
      imports: [
        {
          name: "avatar",
          componentClass: Avatar,
          selector: "#avatar",
          props: {
            name: "Orlando Llamos",
            description: "A modern web dev",
          },
        },
      ],
    });
  }
}
