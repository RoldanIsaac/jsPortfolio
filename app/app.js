import { Router } from "./core/router.js";
import { ComponentManager } from "./core/component-manager.js";
import { Portfolio } from "./views/portfolio/portfolio.js";

// Rutes definition
const routes = {
  "/": () => mountComponent("portfolio", Portfolio, "app"),
  "/photography": () => mountComponent("photography"),
  "/developer": () => mountComponent("developer"),
  "/about": () => mountComponent("about"),
};

const manager = new ComponentManager();
const mountComponent = (name, component, selector) => {
  manager.register(name, component, { selector });
  manager.mountAll();
};

const router = new Router(routes);
router.start();
