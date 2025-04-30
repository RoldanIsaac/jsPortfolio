import { ComponentManager } from "./core/component-manager.js";
import { Portfolio } from "./views/portfolio/portfolio.js";
const manager = new ComponentManager();

const routes = {
  "/home": () => loadPage("home"),
  "/photography": () => loadPage("photography"),
  "/developer": () => loadPage("developer"),
  "/about": () => loadPage("about"),
};

const loadPage = (page) => {
  manager.register("portfolio", Portfolio, { selector: "app" });
  manager.mountAll();
};

window.addEventListener("popstate", () => {
  const path = window.location.pathname;
  console.log("Postate: ", path);
  if (routes[path]) {
    routes[path]();
  } else {
    console.error(`No route found for ${path}`);
  }
});

const navigate = (path) => {
  window.history.pushState({}, "", path);
  if (routes[path]) {
    routes[path]();
  } else {
    console.error(`No route found for ${path}`);
  }
};

// Initial load
window.addEventListener("DOMContentLoaded", () => {
  //   const path = window.location.pathname;
  //   First Path will show '/'
  navigate("/home");
});

// import { domInjectorSingle } from "./core/dom-injector.js";
// const views = [
//   {
//     url: "app/views/testimonials/testimonials.html",
//     destinationId: "testimonials-container",
//   },
// ];

// views.forEach(({ url, destinationId }) => {
//   domInjectorSingle(url, destinationId, null);
// });
