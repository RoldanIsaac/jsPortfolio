import { Component } from "../../core/component.js";
import { domInjector } from "../../core/dom-injector.js";
import { ComponentManager } from "../../core/component-manager.js";
import { ProjectCard } from "../../components/project-card/project-card.js";

export class Projects extends Component {
  constructor({ selector }) {
    super({
      selector: selector,
      template: "app/views/projects/projects.html",
      styles: "app/views/projects/projects.css",
      script: () => {
        const manager = new ComponentManager();

        manager.register("projectCard", ProjectCard, {
          selector: "#projects__cards-container",
          props: {
            url: "public/screenshoots/sho-2.png",
            title: "SHO Management System",
            description: "Descripción de la Card 1",
          },
        });

        manager.mountAll();

        // const card = {
        //   url: "app/components/project-card/project-card.html",
        //   destinationId: "projects__cards-container",
        // };

        // const cardData = [
        //   {
        //     url: "public/screenshoots/sho-2.png",
        //     title: "SHO Management System",
        //     description: "Descripción de la Card 1",
        //   },
        //   {
        //     url: "public/screenshoots/sho-3.png",
        //     title: "Pro Dynamic Web",
        //     description: "Descripción de la Card 3",
        //   },
        //   {
        //     url: "public/screenshoots/sho.png",
        //     title: "Google Services Integration",
        //     description: "Descripción de la Card 2",
        //   },
        // ];

        // domInjector(card.url, card.destinationId, cardData);
      },
    });
  }
}
