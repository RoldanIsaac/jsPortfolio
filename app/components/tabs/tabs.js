import { Component } from "../../core/component.js";

export class Tabs extends Component {
  constructor({ selector }) {
    super({
      selector: selector,
      template: "app/components/tabs/tabs.html",
      styles: "app/components/tabs/tabs.css",
      script: () => {
        const showTab = (tabIndex) => {
          // Primero, quito la clase 'active' de todas las pestañas y contenido
          const tabs = document.querySelectorAll(".tab-button");
          const panes = document.querySelectorAll(".tab-pane");

          tabs.forEach((tab) => tab.classList.remove("active"));
          panes.forEach((pane) => pane.classList.remove("active"));

          // Luego, añado la clase 'active' a la pestaña y contenido correspondiente
          tabs[tabIndex].classList.add("active");
          panes[tabIndex].classList.add("active");
        };

        // Mostrar la primera pestaña por defecto
        showTab(0);
      },
    });
  }
}
