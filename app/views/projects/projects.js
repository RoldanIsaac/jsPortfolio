const cardTemplate = {
  url: "app/components/project-card/project-card.html",
  destinationId: "projects__cards-container",
};

const cardsData = [
  {
    title: "SHO MANAGEMENT SYSTEM",
    imageUrl: "public/screenshoots/sho.png",
    description: "Descripción de la Card 1",
  },
  {
    title: "Google Services Integration",
    imageUrl: "public/screenshoots/sho-2.png",
    description: "Descripción de la Card 2",
  },
  {
    title: "Pro Dynamic Web",
    imageUrl: "public/screenshoots/sho-3.png",
    description: "Descripción de la Card 3",
  },
];

cardsData.forEach(({ title, imageUrl, description }) => {
  fetch("app/components/project-card/project-card.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error al cargar ${url}: ${response.statusText}`);
      }
      return response.text();
    })
    .then((data) => {
      if (title) {
        data = data.replace(/{{ title }}/g, title);
      }
      if (imageUrl) {
        data = data.replace(/{{ url }}/g, imageUrl);
      }
      if (description) {
        data = data.replace(/{{ description }}/g, description);
      }
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = data;
      const _data = tempDiv.firstChild;

      document.getElementById(cardTemplate.destinationId).appendChild(_data);
    })
    .catch((error) => {
      console.error(error);
      // Opcional: Puedes insertar un mensaje de error o una estructura predeterminada en el contenedor
      document.getElementById(
        cardTemplate.destinationId
      ).innerHTML = `<p>Error al cargar el contenido. Intenta de nuevo más tarde.</p>`;
    });
});
