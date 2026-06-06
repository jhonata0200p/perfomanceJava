import './style.css'
import { renderRoute, navigateTo } from './router/router';
import { authStore } from "./services/authStore";

authStore.loadData();
window.addEventListener("DOMContentLoaded", renderRoute);
window.addEventListener("popstate", renderRoute);

if (!authStore.isLoged) {
  navigateTo("/");
} else {
  navigateTo("/projects");
}