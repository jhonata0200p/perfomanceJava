export function header() {
  return `<header class="row-start-2 row-end-3 bg-slate-950 border-r border-slate-800/60 w-64 min-h-screen">
      <div
        class="text-slate-200 flex flex-col justify-between items-center h-full p-6 py-10"
      >
       
        <figure class="flex flex-col items-center text-center w-full group">
          <div class="relative p-1 rounded-full bg-gradient-to-tr from-amber-500 to-amber-300 shadow-md transition-transform duration-300 group-hover:scale-105">
            <img class="h-20 w-20 rounded-full object-cover"
              src="https://cdn.ntmx.me/media/2023/06/14/_hd950c3715c5eed99fd1baa7d33d81997780f6c615.JPG"
              alt="Jhonatan"
            />
          </div>
          <h2 class="mt-4 font-bold text-lg text-slate-100 tracking-wide">Jhonatan</h2>
          <p class="text-xs font-semibold uppercase tracking-widest text-amber-400/80 mt-1">Manager</p>
        </figure>

        
        <div class="flex flex-col gap-3 w-full mt-auto pt-8">
          <button id="create-function" class="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-2.5 px-5 rounded-xl shadow-md shadow-amber-500/10 transition-all duration-200 flex items-center justify-center gap-2 text-sm">
            Crear Función
          </button>
          
          <button id="btn-logout" class="w-full bg-slate-900 hover:bg-rose-950/40 text-slate-400 hover:text-rose-400 border border-slate-800 hover:border-rose-900/50 font-medium py-2.5 px-5 rounded-xl transition-all duration-200 text-sm">
            Cerrar Sesión
          </button>
        </div>

      </div>
    </header>`;
}