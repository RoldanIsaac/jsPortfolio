// import { domInjector } from "../../core/dom-injector";

const cardTemplate = {
  url: "app/components/project-card/project-card.html",
  destinationId: "projects__cards-container",
};

const cardsData = [
  {
    title: "SHO Management System",
    imageUrl: "public/screenshoots/sho-2.png",
    description: "Descripción de la Card 1",
  },
  {
    title: "Pro Dynamic Web",
    imageUrl: "public/screenshoots/sho-3.png",
    description: "Descripción de la Card 3",
  },
  {
    title: "Google Services Integration",
    imageUrl: "public/screenshoots/sho.png",
    description: "Descripción de la Card 2",
  },
];

domInjector(cardTemplate.url, cardsData, cardTemplate.destinationId);
