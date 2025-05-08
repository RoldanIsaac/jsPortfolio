import { Component } from "./../../core/component.js";

export class Banner extends Component {
  constructor({ selector, props }) {
    super({
      selector,
      template: "app/components/banner/banner.html",
      styles: "app/components/banner/banner.css",
      script: () => {},
      props,
    });
  }
}
