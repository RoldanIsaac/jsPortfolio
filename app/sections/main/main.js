import { Component } from "../../core/component.js";
import { Chip } from "../../components/chip/chip.js";
import { DualProfession } from "../../components/dual-profession/dual-profession.js";

export class Main extends Component {
  constructor({ selector }) {
    super({
      selector: selector,
      template: "app/sections/main/main.html",
      styles: "app/sections/main/main.css",
      script: () => {},
      imports: [
        ...chips,
        {
          name: "dualProfession",
          componentClass: DualProfession,
          selector: "#dual-profession",
        },
      ],
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
