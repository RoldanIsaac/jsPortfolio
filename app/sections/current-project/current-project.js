import { Component } from "../../core/component.js";

import { domInjector } from "../../core/dom-injector.js";
import { Chip } from "../../components/chip/chip.js";

export class CurrentProject extends Component {
  constructor({ selector }) {
    super({
      selector: selector,
      template: "app/sections/current-project/current-project.html",
      styles: "app/sections/current-project/current-project.css",
      imports: [...chips],
      script: () => {
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

export const chips = [
  {
    name: "chip1",
    componentClass: Chip,
    selector: "#chip-1",
    props: {
      label: "Google Api Services",
      bg: "hsl(20, 87.10%, 54.50%)",
      color: "hsl(20, 51.70%, 94.30%)",
    },
  },
  {
    name: "chip2",
    componentClass: Chip,
    selector: "#chip-2",
    props: {
      label: "SaaS",
      bg: "hsl(50, 72.40%, 57.50%)",
      color: "hsl(50, 50%, 90%)",
    },
  },
  {
    name: "chip3",
    componentClass: Chip,
    selector: "#chip-3",
    props: {
      label: "NestJs",
      bg: "hsl(100, 60.20%, 50.80%)",
      color: "hsl(100, 50%, 90%)",
    },
  },
  {
    name: "chip4",
    componentClass: Chip,
    selector: "#chip-4",
    props: {
      label: "React",
      bg: "hsl(150, 52.40%, 32.90%)",
      color: "hsl(150, 50%, 90%)",
    },
  },
  {
    name: "chip5",
    componentClass: Chip,
    selector: "#chip-5",
    props: {
      label: "PandaCSS",
      bg: "hsl(201, 65.00%, 20.20%)",
      color: "hsl(200, 50%, 90%)",
    },
  },
];
