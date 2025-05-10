import { Component } from "./../../core/component.js";

export class VercelCardLg extends Component {
  constructor({ selector, props }) {
    super({
      selector,
      template: "app/components/vercel-card-lg/vercel-card-lg.html",
      styles: "app/components/vercel-card-lg/vercel-card-lg.css",
      script: () => {},
      props,
    });
  }
}
