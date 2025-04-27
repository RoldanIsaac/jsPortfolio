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
    url: "app/views/photography/photography.html",
    destinationId: "photography-container",
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

views.forEach(({ url, destinationId, replaceValue }) => {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error al cargar ${url}: ${response.statusText}`);
      }
      return response.text();
    })
    .then((data) => {
      // Si se proporciona replaceValue, lo utilizamos para modificar el contenido
      if (replaceValue) {
        data = data.replace(replaceValue.search, replaceValue.replacement);
      }

      document.getElementById(destinationId).innerHTML = data;
    })
    .catch((error) => {
      console.error(error);
      // Opcional: Puedes insertar un mensaje de error o una estructura predeterminada en el contenedor
      document.getElementById(
        destinationId
      ).innerHTML = `<p>Error al cargar el contenido. Intenta de nuevo más tarde.</p>`;
    });
});
