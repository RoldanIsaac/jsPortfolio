import { Component } from "../../core/component.js";
import { Chip } from "../../components/chip/chip.js";
import { DualProfession } from "../../components/dual-profession/dual-profession.js";

export const chips = [
  {
    name: "chip1",
    componentClass: Chip,
    selector: "#chip-1",
    props: {
      label: "Google Api Services",
      bg: "hsl(20, 50%, 30%)",
      color: "hsl(20, 50%, 90%)",
    },
  },
  {
    name: "chip2",
    componentClass: Chip,
    selector: "#chip-2",
    props: {
      label: "SaaS",
      bg: "hsl(50, 50%, 30%)",
      color: "hsl(50, 50%, 90%)",
    },
  },
  {
    name: "chip3",
    componentClass: Chip,
    selector: "#chip-3",
    props: {
      label: "NestJs",
      bg: "hsl(100, 50%, 30%)",
      color: "hsl(100, 50%, 90%)",
    },
  },
  {
    name: "chip4",
    componentClass: Chip,
    selector: "#chip-4",
    props: {
      label: "React",
      bg: "hsl(150, 50%, 20%)",
      color: "hsl(150, 50%, 90%)",
    },
  },
  {
    name: "chip5",
    componentClass: Chip,
    selector: "#chip-5",
    props: {
      label: "PandaCSS",
      bg: "hsl(200, 50%, 20%)",
      color: "hsl(200, 50%, 90%)",
    },
  },
];

export class CurrentProject extends Component {
  constructor({ selector }) {
    super({
      selector: selector,
      template: "app/sections/current-project/current-project.html",
      styles: "app/sections/current-project/current-project.css",
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
