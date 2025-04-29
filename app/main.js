import { NavBar } from "./components/navbar/navbar.js";
import { Photography } from "./views/photography/photography.js";
import { Projects } from "./views/projects/projects.js";
import { ComponentManager } from "./core/component-manager.js";
import { Footer } from "./components/footer/footer.js";
import { Tabs } from "./components/tabs/tabs.js";

const manager = new ComponentManager();

manager.register("navbar", NavBar, { selector: "navbar-container" });
manager.register("photography", Photography, {
  selector: "photography-container",
});
manager.register("projects", Projects, { selector: "projects-container" });
manager.register("footer", Footer, { selector: "footer-container" });
manager.register("tabs", Tabs, { selector: "tabs-container" });

manager.mountAll();
