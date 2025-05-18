import { Component } from "../../core/component.js";
import { DualProfession } from "../../components/dual-profession/dual-profession.js";

export class Main extends Component {
  constructor({ selector }) {
    super({
      selector: selector,
      template: "app/sections/main/main.html",
      styles: "app/sections/main/main.css",
      script: () => {
        let counter = 0;
        const size = 300; // en px
        const carouselSlide = document.querySelector(
          ".carousel__slides-container"
        );
        const indicators = document.querySelectorAll(".indicator");
        const totalSlides = indicators.length;
        let autoChangeInterval;

        function goToSlide(index) {
          counter = index;
          carouselSlide.style.transform = `translateX(${-size * counter}px)`;
          updateIndicators();
        }

        function updateIndicators() {
          indicators.forEach((indicator, index) => {
            indicator.classList.toggle("active", index === counter);
          });
        }

        indicators.forEach((indicator, index) => {
          indicator.addEventListener("click", () => {
            goToSlide(index);
            resetInterval();
          });
        });

        function nextSlide() {
          counter = (counter + 1) % totalSlides;
          goToSlide(counter);
        }

        function startAutoChange() {
          autoChangeInterval = setInterval(nextSlide, 3000);
        }

        function resetInterval() {
          clearInterval(autoChangeInterval);
          startAutoChange();
        }

        document
          .querySelector(".carousel-container")
          .addEventListener("mouseenter", () => {
            clearInterval(autoChangeInterval);
          });

        document
          .querySelector(".carousel-container")
          .addEventListener("mouseleave", startAutoChange);

        // Iniciar
        goToSlide(0);
        startAutoChange();

        // // Manejar el redimensionamiento de la ventana
        // window.addEventListener("resize", () => {
        //   carouselSlide.style.transition = "none";
        //   goToSlide(counter);
        //   setTimeout(() => {
        //     carouselSlide.style.transition = "transform 0.5s ease-in-out";
        //   }, 100);
        // });
      },
      imports: [
        {
          name: "dualProfession",
          componentClass: DualProfession,
          selector: "#dual-profession",
        },
      ],
    });
  }
}
