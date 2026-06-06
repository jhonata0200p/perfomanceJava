import { renderRoute } from "../router/router";

export const deleteFunction = async (id) => {
  const response = await fetch(`http://localhost:3002/functions/${id}`, {
    method: "DELETE",
  });
  renderRoute();
};

export async function createFunction(funtion) {


  await fetch(`http://localhost:3002/functions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(funtion)
  });
}