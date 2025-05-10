import { Component } from "../../core/component.js";
import { domInjector } from "../../core/dom-injector.js";

export class Photography extends Component {
  constructor({ selector }) {
    super({
      selector: selector,
      template: "app/views/photography/photography.html",
      styles: "app/views/photography/photography.css",
      script: () => {
        let currentLabel = null;
        window.addEventListener("scroll", updateGliderPosition(currentLabel));
        window.addEventListener("resize", hideGlider);

        // Not the radios due to display:none in CSS, which will avoid
        // to get the current radio positions
        document
          .querySelectorAll(".glider-tabs__tab-label")
          .forEach((label) => {
            label.addEventListener("click", function () {
              currentLabel = label;
              updateGliderPosition(label);
            });
          });

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
      },
    });
  }
}

export function hideGlider() {
  const glider = document.getElementById("glider");
  glider.style.opacity = 0;
}
export function updateGliderPosition(currentLabel = null) {
  if (!currentLabel) return;

  const rect = currentLabel.getBoundingClientRect(); // Label position in window
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const scrollLeft = window.scrollX || document.documentElement.scrollLeft;

  const glider = document.getElementById("glider");

  glider.style.opacity = 1;

  glider.style.top = rect.top + scrollTop + "px";
  glider.style.left = rect.left + scrollLeft + "px";
  glider.style.width = rect.width + "px";
  glider.style.height = rect.height + "px";
}
