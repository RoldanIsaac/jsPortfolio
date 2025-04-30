import { Component } from "../../core/component.js";
import { ComponentManager } from "../../core/component-manager.js";
import { NavBar } from "../../components/navbar/navbar.js";
import { Photography } from "../../views/photography/photography.js";
import { Projects } from "../../views/projects/projects.js";
import { About } from "../../views/about/about.js";
import { Footer } from "../../components/footer/footer.js";
import { Tabs } from "../../components/tabs/tabs.js";

export class Portfolio extends Component {
  constructor() {
    super({
      selector: "#app",
      template: "app/views/portfolio/portfolio.html",
      styles: "app/views/portfolio/portfolio.css",
      script: () => {
        const manager = new ComponentManager();

        manager.register("navbar", NavBar, { selector: "navbar-container" });
        manager.register("projects", Projects, {
          selector: "projects-container",
        });
        manager.register("photography", Photography, {
          selector: "photography-container",
        });
        manager.register("tabs", Tabs, { selector: "tabs-container" });
        manager.register("about", About, { selector: "about-container" });
        manager.register("footer", Footer, { selector: "footer-container" });

        manager.mountAll();
      },
    });
  }
}
