import { Component } from "../../core/component.js";
import { VercelCard } from "../../components/vercel-card/vercel-card.js";

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
      label: "Google Api Services",
      bg: "hsl(20, 87.10%, 54.50%)",
      color: "hsl(20, 51.70%, 94.30%)",
    },
  },
  {
    name: "vercelCard2",
    componentClass: VercelCard,
    selector: "#vercel-card-2",
    props: {
      label: "SaaS",
      bg: "hsl(50, 72.40%, 57.50%)",
      color: "hsl(50, 50%, 90%)",
    },
  },
  {
    name: "vercelCard3",
    componentClass: VercelCard,
    selector: "#vercel-card-3",
    props: {
      label: "NestJs",
      bg: "hsl(100, 60.20%, 50.80%)",
      color: "hsl(100, 50%, 90%)",
    },
  },
  {
    name: "vercelCard4",
    componentClass: VercelCard,
    selector: "#vercel-card-4",
    props: {
      label: "React",
      bg: "hsl(150, 52.40%, 32.90%)",
      color: "hsl(150, 50%, 90%)",
    },
  },
  {
    name: "vercelCard5",
    componentClass: VercelCard,
    selector: "#vercel-card-5",
    props: {
      label: "PandaCSS",
      bg: "hsl(201, 65.00%, 20.20%)",
      color: "hsl(200, 50%, 90%)",
    },
  },
];
