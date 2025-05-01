import { Component } from "../../core/component.js";
import { ComponentManager } from "../../core/component-manager.js";
import { Avatar } from "../../components/avatar/avatar.js";

export class About extends Component {
  constructor({ selector }) {
    super({
      selector: selector,
      template: "app/views/about/about.html",
      styles: "app/views/about/about.css",
      script: () => {
        const manager = new ComponentManager();
        manager.register("avatar", Avatar, { selector: "#avatar" });
        manager.mountAll();
      },
    });
  }
}
