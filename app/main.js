import { Router } from "./core/router.js";
import { ComponentManager } from "./core/component-manager.js";
import { Portfolio } from "./views/portfolio/portfolio.js";
import { About } from "./views/about/about.js";

const manager = new ComponentManager();

const mountComponent = (name, component, selector = "app") => {
  manager.register(name, component, { selector });
  manager.mount(name);
};

// Rutes definition
const router = new Router({
  "/": () => mountComponent("portfolio", Portfolio),
  // "/photography": () => mountComponent("photography"),
  // "/developer": () => mountComponent("developer"),
  "/about": () => mountComponent("about", About),
});

// Initialize the router
router.start();
