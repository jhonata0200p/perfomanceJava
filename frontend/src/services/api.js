export async function getUsers() {
  const response = await fetch("http://localhost:3002/users");
  const data = await response.json();
  return data;
}

export async function getFunctions() {
  const response = await fetch("http://localhost:3002/functions");
  const data = await response.json();
  return data;
}

export async function getReservations() {
  const response = await fetch("http://localhost:3002/reservations");
  const data = await response.json();
  return data;
}