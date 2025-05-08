import { Component } from "../../core/component.js";
import { domInjector } from "../../core/dom-injector.js";

export class Projects extends Component {
  constructor({ selector }) {
    super({
      selector: selector,
      template: "app/sections/projects/projects.html",
      styles: "app/sections/projects/projects.css",
      script: () => {
        const vercelCard = {
          url: "app/components/vercel-card/vercel-card.html",
          destinationId: "vercel-cards-container",
        };

        const cardsData = [
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

        domInjector(vercelCard.url, vercelCard.destinationId, cardsData);
      },
    });
  }
}
