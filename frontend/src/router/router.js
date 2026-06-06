import { loginView } from "../views/loginView";
import { projectsView } from "../views/functionsView";

const routes = {
  "/": loginView,
  "/projects": projectsView,
};

export const navigateTo = (path) => {
  history.pushState({}, "", path);
  renderRoute();
};

export async function renderRoute() {
  const app = document.querySelector("#app");

  const path = window.location.pathname;

  const page = routes[path];

  await page(app);
}