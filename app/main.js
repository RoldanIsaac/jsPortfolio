import { NavBar } from "./components/navbar/navbar.js";
import { Photography } from "./views/photography/photography.js";
import { Projects } from "./views/projects/projects.js";

const NavbarComponent = new NavBar();
NavbarComponent.mount();

const PhotographyComponent = new Photography();
PhotographyComponent.mount();

const ProjectsComponent = new Projects();
ProjectsComponent.mount();
