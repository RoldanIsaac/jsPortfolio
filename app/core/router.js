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
    this.preventDefaultLinkTagRedirection();
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
  preventDefaultLinkTagRedirection() {
    // Capture clicks on a tags and prevent page reload
    document.addEventListener("click", (e) => {
      const target = e.target.closest("a");

      if (target && target.href.startsWith(window.location.origin)) {
        e.preventDefault();

        // Get the href path
        const path = target.getAttribute("href");

        // Navigate to link
        this.navigate(path);
      }
    });
  }
}
