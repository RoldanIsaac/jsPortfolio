import { Component } from "../../core/component.js";
import { domInjector } from "../../core/dom-injector.js";

export class Photography extends Component {
  constructor({ selector }) {
    super({
      selector: selector,
      template: "app/views/photography/photography.html",
      styles: "app/views/photography/photography.css",
      script: () => {
        const photoCard = {
          url: "app/components/photo/photo-card.html",
          destinationId: "galery",
        };

        const myPhotos = [
          {
            url: "public/screenshoots/sho-2.png",
            title: "SHO Management System",
            description: "Descripción de la Card 1",
          },
          {
            url: "public/screenshoots/sho-3.png",
            title: "Pro Dynamic Web",
            description: "Descripción de la Card 3",
          },
          {
            url: "public/screenshoots/sho.png",
            title: "Google Services Integration",
            description: "Descripción de la Card 2",
          },
        ];

        domInjector(photoCard.url, photoCard.destinationId, myPhotos);
      },
    });
  }
}
