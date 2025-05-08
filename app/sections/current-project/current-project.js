import { Component } from "../../core/component.js";
import { domInjector } from "../../core/dom-injector.js";

export class CurrentProject extends Component {
  constructor({ selector }) {
    super({
      selector: selector,
      template: "app/sections/current-project/current-project.html",
      styles: "app/sections/current-project/current-project.css",
      script: () => {
        const card = {
          url: "app/components/project-card/project-card.html",
          destinationId: "projects__cards-container",
        };

        const cardData = [
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

        domInjector(card.url, card.destinationId, cardData);
      },
    });
  }
}
