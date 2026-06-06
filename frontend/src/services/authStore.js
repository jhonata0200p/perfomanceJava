import { navigateTo, renderRoute } from "../router/router";

export const authStore = {
  isLoged: false,
  user: null,

  loadData() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user !== null) {
      this.isLoged = true;
      this.user = user;
    }
  },

  onLogin(user) {
    ((this.user = user),
      (this.isLoged = true),
      localStorage.setItem("user", JSON.stringify(user)));
  },

  onLogout() {
    localStorage.removeItem("user");
    ((this.isLoged = false), (this.user = null), navigateTo("/"));
  },
};