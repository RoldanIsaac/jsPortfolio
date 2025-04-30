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
    this.preventDefaultATagRedirection();
  }

  navigate(path) {
    window.history.pushState({}, "", path);
    this.loadRoute();
  }

  loadRoute() {
    const path = window.location.pathname;
    const route = this.routes[path];
    if (route) {
      route();
    } else {
      console.error(`No route found for ${path}`);
      document.getElementById("app").innerHTML = "<h1>404 - Not Found</h1>";
    }
  }

  // ---------------------------------------------------------------------------------------
  // @ Helpful resources
  // ---------------------------------------------------------------------------------------
  preventDefaultATagRedirection() {
    // Capture clicks on a tags and prevent page reload
    document.addEventListener("click", (e) => {
      const target = e.target.closest("a");

      if (target && target.href.startsWith(window.location.origin)) {
        e.preventDefault();
        const path = target.getAttribute("href");
        this.navigate(path);
      }
    });
  }
}
