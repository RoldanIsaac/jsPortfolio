import { Component } from "../../core/component.js";
import { ModeToggle } from "../mode-toggle/mode-toggle.js";

export class NavBar extends Component {
  constructor({ selector }) {
    super({
      selector: selector,
      template: "app/components/navbar/navbar.html",
      styles: "app/components/navbar/navbar.css",
      imports: [
        {
          name: "modeToggle",
          componentClass: ModeToggle,
          selector: "#mode-toggle",
        },
      ],
      script: () => {
        // Script para el menú hamburguesa
        const hamburger = document.getElementById("hamburger");
        const navLinks = document.querySelector(".nav-links");

        hamburger.addEventListener("click", () => {
          navLinks.classList.toggle("active");
        });
      },
    });
  }
}
