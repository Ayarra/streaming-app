import axios from "axios";

const BASE_URL = "http://localhost:3000";

axios.create({
  baseURL: BASE_URL,
});

export async function getMovies() {
  const { data } = await axios.get("http://localhost:3000/movies");
  return data;
}

export async function getMovie(movieId) {
  const { data } = await axios.get(`http://localhost:3000/movies/${movieId}`);
  return data;
}

export function registerUser(userPayload) {}

export function loginUser(userPayload) {}
