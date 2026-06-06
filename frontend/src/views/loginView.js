import { getUsers } from "../services/api";
import { navigateTo } from "../router/router";
import { authStore } from "../services/authStore";

export async function loginView(app) {
  app.className = "bg-slate-950 flex justify-center items-center h-screen";
  app.innerHTML = `<form
        id="form-login"
        class="border-2 border-amber-300 w-md p-5 bg-amber-50 grid grid-cols-1 gap-3"
      >
        <div class="flex flex-col">
          <label for="" class="text-amber-800">Email</label>
          <input
            type="text"
            name="email"
            placeholder="type your email"
            class="border-2 border-amber-300"
          />
        </div>
        <div class="flex flex-col">
          <label for="" class="text-amber-800">Password</label>
          <input
            type="text"
            name="password"
            placeholder="type your Password"
            class="border-2 border-amber-300"
          />
        </div>
        <button class="btnLogin bg-amber-300 w-full h-9 text-amber-800 cursor-pointer">
          Login
        </button>
      </form>`;

  const form = document.getElementById("form-login");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const email = data.get("email");
    const password = data.get("password");
    console.log(email);
    console.log(password);

    const users = await getUsers();
    console.log(users);

    const user = users.find((u) => email === u.email);

    console.log(user);

    if (email === user.email && password === user.password) {
      navigateTo("/projects");
      authStore.onLogin(user);
    }
  });
}