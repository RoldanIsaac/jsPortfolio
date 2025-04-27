const views = [
  {
    url: "app/components/navbar/navbar.html",
    destinationId: "navbar-container",
  },
  {
    url: "app/views/avatar.html",
    destinationId: "avatar-container",
  },
  {
    url: "app/components/tabs/tabs.html",
    destinationId: "tabs-container",
  },
  {
    url: "app/views/projects/projects.html",
    destinationId: "projects-container",
  },
  {
    url: "app/views/skills/skills.html",
    destinationId: "skills-container",
  },
  {
    url: "app/views/about-me/about-me.html",
    destinationId: "about-me-container",
  },
  {
    url: "app/views/testimonials/testimonials.html",
    destinationId: "testimonials-container",
  },
  {
    url: "app/components/footer/footer.html",
    destinationId: "footer-container",
  },
];

views.forEach(({ url, destinationId }) => {
  domInjectorSingle(url, destinationId, null);
});
