fetch("app/components/navbar/navbar.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("navbar-container").innerHTML = data;
  });

fetch("app/views/avatar.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("avatar-container").innerHTML = data;
  });

fetch("app/components/tabs/tabs.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("tabs-container").innerHTML = data;
  });

fetch("app/views/proyects.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("proyects-container").innerHTML = data;
  });

fetch("app/views/skills/skills.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("skills-container").innerHTML = data;
  });

fetch("app/views/about-me/about-me.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("about-me-container").innerHTML = data;
  });

fetch("app/views/testimonials/testimonials.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("testimonials-container").innerHTML = data;
  });
