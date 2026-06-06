export function cardReservation (reservation) {
    return `<div class="max-w-sm rounded-xl border border-gray-200 bg-white p-5 shadow-sm font-sans">
  
  <!-- Encabezado: ID y Estado -->
  <div class="flex items-center justify-between border-b border-gray-100 pb-3">
    <span class="text-sm font-medium text-gray-500">
      Reserva ${reservation.id}
    </span>
    <span class="rounded-md bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-800 capitalize">
      ${reservation.state}
    </span>
  </div>


  <div class="mt-4 space-y-2.5 text-sm">
    <div class="flex justify-between">
      <span class="text-gray-400">ID Usuario:</span>
      <span class="font-medium text-gray-800">${reservation.user}</span>
    </div>
    <div class="flex justify-between">
      <span class="text-gray-400">ID Función:</span>
      <span class="font-medium text-gray-800">${reservation.funtion}</span>
    </div>
    <div class="flex justify-between">
      <span class="text-gray-400">Boletos:</span>
      <span class="font-bold text-gray-800">${reservation.tickets}</span>
    </div>
    <div class="flex justify-between">
      <span class="text-gray-400">Fecha Reserva:</span>
      <span class="font-medium text-gray-800">${reservation.reservData}</span>
    </div>
  </div>

</div>`
}