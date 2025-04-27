const navbar = new Component({
  selector: "#navbar-container",
  template: "app/components/navbar/navbar.html",
  styles: "app/components/navbar/navbar.css",
  script: () => {
    // Script para el menú hamburguesa
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  },
});

navbar.mount();
