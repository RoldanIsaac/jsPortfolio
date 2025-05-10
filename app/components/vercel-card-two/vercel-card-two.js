import { Component } from "./../../core/component.js";

export class VercelCardTwo extends Component {
  constructor({ selector, props }) {
    super({
      selector,
      template: "app/components/vercel-card-two/vercel-card-two.html",
      styles: "app/components/vercel-card-two/vercel-card-two.css",
      script: () => {},
      props,
    });
  }
}
