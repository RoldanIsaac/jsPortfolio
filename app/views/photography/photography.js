const photoCard = {
  url: "app/components/photo/photo-card.html",
  destinationId: "galery",
};

const myPhotos = [
  {
    url: "public/screenshoots/sho-2.png",
    title: "SHO Management System",
    description: "Descripción de la Card 1",
  },
  {
    url: "public/screenshoots/sho-3.png",
    title: "Pro Dynamic Web",
    description: "Descripción de la Card 3",
  },
  {
    url: "public/screenshoots/sho.png",
    title: "Google Services Integration",
    description: "Descripción de la Card 2",
  },
];

domInjector(photoCard.url, photoCard.destinationId, myPhotos);

const link = document.createElement("link");
link.rel = "stylesheet";
link.href = "app/views/photography/photography.css";
document.head.appendChild(link);
