import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/trainers/";

export function getTrainers() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function saveTrainer(trainer) {
  return fetch(baseUrl + (trainer.id || ""), {
    method: trainer.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(trainer)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteTrainer(trainerId) {
  return fetch(baseUrl + trainerId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
