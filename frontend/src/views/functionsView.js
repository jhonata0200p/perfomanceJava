import { cardFunctions } from "../components/cardFunctions";
import { cardReservation } from "../components/cardReservations";
import { edit } from "../components/create";
import { header } from "../components/header";
import { navbar } from "../components/navbar";
import { getFunctions, getReservations } from "../services/api";
import { authStore } from "../services/authStore";
import { createFunction, deleteFunction } from "../services/crud";

export async function projectsView(app) {
  const functions = await getFunctions();
  const reservations = await getReservations();
  const user = authStore.user;
  console.log(user);

  console.log(functions);

  app.className =
    "grid grid-cols-[20%_1fr] grid-rows-[10%] h-screen bg-slate-950";

  app.innerHTML = `
    ${header()}
    <div class="col-start-2 col-end-3 flex items-center justify-center">${navbar()}</div>
     <main class="">
      <div id="cards-container" class="flex justify-center items-center gap-4 min-h-screen flex-wrap"></div>
    </main>
    ${edit()}
  `;

  const cardContainer = document.getElementById("cards-container");

  if (user.role === "admin") {
    functions.forEach((funtion) => {
      cardContainer.innerHTML += cardFunctions(funtion);
    });
    const btnCreatefunction = document.getElementById("create-function");

    btnCreatefunction.addEventListener("click", () => {
      document.getElementById("ventana-crear").classList.remove("hidden");
    });

    document.getElementById("btn-cerrar").addEventListener("click", () => {
      document.getElementById("ventana-crear").classList.add("hidden");
    })

    const formCreatFuntion = document.getElementById("ventana-crear")

    formCreatFuntion.addEventListener("submit", async (e) => {
        e.preventDefault();
        const data = new FormData(formCreatFuntion);
        
        const movieName = data.get("movieName");
        const salas = data.get("salas")
        const fecha = data.get("fecha");
        const horaStart = data.get("horaStart");
        const horaEnd = data.get("horaEnd");
        const capacidad = data.get("capacidad");
        const estado = data.get("estado");

        const funtion =   {
      "movie":movieName,
      "room": salas,
      "date": fecha,
      "hourStart" : horaStart,
      "hourEnd" : horaEnd,
      "capacity" : capacidad,
      "AvailablePlaces" : capacidad,
      "state" : estado
    }

    createFunction(funtion)

        document.getElementById("ventana-crear").classList.add("hidden")

        renderRoute()
      });
    ;
  } else if (user.role === "user") {
    cardContainer.innerHTML = `eres user`;
  }

  const btnReservation = document.getElementById("btn-reservation")

  

  btnReservation.addEventListener("click", ()=> {
    cardContainer.innerHTML = ""
    reservations.forEach((reservation) => {
      cardContainer.innerHTML += cardReservation(reservation)});
   
    
  })


  cardContainer.addEventListener("click", async (e) => {
    const btn = e.target.closest("[data-action]");

    if (!btn) return;
    const projectId = btn.dataset.id;
    
    
    const action = btn.dataset.action;

    if (action === "delete") {
      deleteFunction(projectId);
    } else if (action === "edit") {
      const nombreTarjeta = btn.dataset.name;
      const descripcionTarjeta = btn.dataset.desc;

      document.getElementById("campo-nombre").value = nombreTarjeta;
      document.getElementById("campo-descripcion").value = descripcionTarjeta;
      document.getElementById("ventana-editar").classList.remove("hidden");
    }
  });

  const btnLogout = document.getElementById("btn-logout");

  btnLogout.addEventListener("click", async () => {
    authStore.onLogout();
  });
}
