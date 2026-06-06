export function cardFunctions (funtion) {
    
    const estadoColor = funtion.state.toLowerCase() === 'activo' || funtion.state.toLowerCase() === 'disponible' 
      ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' 
      : 'bg-rose-500/20 text-rose-300 border-rose-500/30';

    return `
    <article
      class="rounded-xl border border-slate-700/50 bg-slate-900/80 p-5 shadow-lg backdrop-blur-sm hover:border-amber-500/40 transition-all duration-300 text-amber-50 max-w-sm"
    >
      <h3 class="font-extrabold text-xl text-amber-400 tracking-wide mb-4 truncate">
        ${funtion.movie}
      </h3>

      <div class="space-y-2.5 text-sm text-slate-300">

        <p class="flex items-center gap-2">
          
          <span class="text-amber-50/90 font-black text-[1rem]">${funtion.room}</span>
        </p>

        <p class="flex items-center gap-2">
          <span class="font-medium text-slate-400">Fecha:</span>
          <span class="text-amber-50/90">${funtion.date}</span>
        </p>

        <p class="flex items-center gap-2">
          <span class="font-medium text-slate-400">Horario:</span>
          <span class="text-amber-50/90 font-mono">
            ${funtion.hourStart} - ${funtion.hourEnd}
          </span>
        </p>

        <p class="flex items-center justify-between pt-2 border-t border-slate-800 mt-3">
          <span class="font-medium text-slate-400">Estado:</span>
          <span class="px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider border ${estadoColor}">
            ${funtion.state}
          </span>
        </p>

      </div>
      <div>
      <button
        data-id = "${funtion.id}"
        data-action = "edit"
        data-name="${funtion.name}"
        data-desc="${funtion.description}"
          class="col-start-2 col-end-3 bg-green-400/70 rounded-2xl hover:bg-green-500 text-green-900 cursor-pointer font-medium"
        >
          Editar
        </button>

        <button
        data-id = "${funtion.id}"
        data-action = "delete"
          class="col-start-3 col-end-4 bg-red-600/70 hover:bg-red-600 text-red-950 cursor-pointer rounded-2xl ml-1 font-medium"
        >
          Eliminar
        </button>
      </div>
    </article>
  `
}