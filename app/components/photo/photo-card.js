import { Component } from "../../core/component";

export class PhotoCard extends Component {
  constructor({ selector }) {
    super({
      selector: selector,
      template: "app/components/photo/photo-card.html",
      styles: "app/components/photo/photo-card.css",
      scripts: () => {},
    });
  }
}
