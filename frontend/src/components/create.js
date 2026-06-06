export function edit() {


  return `<form id="ventana-crear" class="hidden fixed inset-0 bg-black/70 flex justify-center items-center z-50">
  <div class="bg-slate-900 p-6 rounded-xl w-80 text-white flex flex-col gap-2">
    <button id="btn-cerrar" class="bg-red-500 px-4 py-2 rounded">Cerrar</button>
    <h3 class="font-bold text-lg mb-4">Crear Funcion</h3>
    <label for="">Nombre de la pelicula</label>
    <input name="movieName" type="text"  class="w-full bg-slate-800 p-2 rounded mb-4">

    <label for="">Ingrese la sala:</label>
  <select name="salas" id="salas" class="bg-slate-800">
    <option value="Sala A">Sala A</option>
    <option value="Sala B">Sala B</option>
    <option value="Sala C">Sala C</option>
    <option value="Sala D">Sala D</option>
  </select>
  <label >Selecciona una fecha:</label>
<input type="date" id="fecha" name="fecha">

<label >Selecciona una hora de inicio:</label>
<input type="time" id="horaStart" name="horaStart">

<label >Selecciona una hora de finalizacion:</label>
<input type="time" id="horaEnd" name="horaEnd">

  <label >Ingresa la capacidad:</label>
  <input class="border" type="number" id="capacidad" name="capacidad" min="1" max="10" step="1" value="cantidad">
<label for="">Ingrese el estado:</label>
  <select name="estado" id="estado" class="bg-slate-800">
    <option value="Sala A">Activa</option>
    <option value="Sala B">cancelada</option>

  </select>
    
    <button id="btn-crear" class="bg-green-500 px-4 py-2 rounded">Crear</button>
  </div>
</form>`;
}