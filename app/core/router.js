export class Router {
  constructor(routes) {
    this.routes = routes;
    window.addEventListener("popstate", () => this.loadRoute());
  }

  // Initial load
  start() {
    // First Path will show '/'
    // So execute loadRoute here will be like navigate("/")
    document.addEventListener("DOMContentLoaded", () => this.loadRoute());
  }

  navigate(path) {
    window.history.pushState({}, "", path);
    this.loadRoute();
  }

  loadRoute() {
    const path = window.location.pathname;
    const route = this.routes[path];
    if (route) {
      this.routes[path]();
    } else {
      console.error(`No route found for ${path}`);
      document.getElementById("app").innerHTML = "<h1>404 - Not Found</h1>";
    }
  }
}
