import { domInjectorSingle } from "./core/dom-injector.js";
const views = [
  {
    url: "app/views/avatar.html",
    destinationId: "avatar-container",
  },
  {
    url: "app/views/skills/skills.html",
    destinationId: "skills-container",
  },
  {
    url: "app/views/testimonials/testimonials.html",
    destinationId: "testimonials-container",
  },
];

views.forEach(({ url, destinationId }) => {
  domInjectorSingle(url, destinationId, null);
});
