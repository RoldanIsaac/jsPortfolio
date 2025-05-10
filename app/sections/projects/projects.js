import { Component } from "../../core/component.js";
import { VercelCard } from "../../components/vercel-card/vercel-card.js";
import { VercelCardTwo } from "../../components/vercel-card-two/vercel-card-two.js";
import { VercelCardLg } from "../../components/vercel-card-lg/vercel-card-lg.js";

export class Projects extends Component {
  constructor({ selector }) {
    super({
      selector: selector,
      template: "app/sections/projects/projects.html",
      styles: "app/sections/projects/projects.css",
      imports: [...vercelCards],
      script: () => {},
    });
  }
}

export const vercelCards = [
  {
    name: "vercelCard1",
    componentClass: VercelCard,
    selector: "#vercel-card-1",
    props: {
      title: "Leaf",
      description:
        "A growing micro-framework built with the concept of reusable components in mind.",
      chipNumber1: "75%",
      chipWord1: "faster",
      chipConcept1: "Integration time",
      chipNumber2: "10%",
      chipWord2: "accessible",
      chipConcept2: "User friendly",
    },
  },
  {
    name: "vercelCard2",
    componentClass: VercelCard,
    selector: "#vercel-card-2",
    props: {
      title: "JsCalendar",
      description: "A Js Calendar for free use.",
      chipNumber1: "75%",
      chipWord1: "faster",
      chipConcept1: "Integration time",
      chipNumber2: "10%",
      chipWord2: "accessible",
      chipConcept2: "User friendly",
    },
  },
  {
    name: "vercelCardLg",
    componentClass: VercelCardLg,
    selector: "#vercel-card-lg",
    props: {
      title: "JsCalendar",
      description: "A Js Calendar for free use.",
      chipNumber1: "75%",
      chipWord1: "faster",
      chipConcept1: "Integration time",
      chipNumber2: "10%",
      chipWord2: "accessible",
      chipConcept2: "User friendly",
    },
  },
  {
    name: "vercelCardTwo2",
    componentClass: VercelCardTwo,
    selector: "#vercel-card-two-2",
    props: {
      title: "ytDownloader",
      description:
        "Youtube downloader free of charge with Python and ElectronJs",
    },
  },
  {
    name: "vercelCardTwo1",
    componentClass: VercelCardTwo,
    selector: "#vercel-card-two-1",
    props: {
      title: "JsCalendar",
      description: "A Js Calendar for free use.",
    },
  },
];
