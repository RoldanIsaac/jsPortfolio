import { Component } from "./../../core/component.js";

export class VercelCard extends Component {
  constructor({ selector, props }) {
    super({
      selector,
      template: "app/components/vercel-card/vercel-card.html",
      styles: "app/components/vercel-card/vercel-card.css",
      script: () => {},
      props,
    });
  }
}
