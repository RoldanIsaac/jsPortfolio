import { Component } from "../../core/component.js";

export class ModeToggle extends Component {
  constructor({ selector, props }) {
    super({
      selector: selector,
      template: "app/components/mode-toggle/mode-toggle.html",
      styles: "app/components/mode-toggle/mode-toggle.css",
      script: (el) => {
        const button = el.querySelector("button");

        const weatherIcon = el.querySelector("#wheather_svg");

        button.addEventListener("click", () => {
          const currentTheme = document.body.getAttribute("data-theme");

          if (currentTheme === "dark") {
            document.body.setAttribute("data-theme", "light");
            weatherIcon.src = "public/icons/sun.svg";
          } else {
            document.body.setAttribute("data-theme", "dark");
            weatherIcon.src = "public/icons/moon.svg";
          }
        });
      },
      props,
    });
  }
}
