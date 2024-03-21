import axios from "axios";

const BASE_URL = "http://localhost:3000";

export default axios.create({
  baseURL: BASE_URL,
});

export function registerUser(userPayload) {
  console.log(userPayload);
}

export function loginUser(userPayload) {
  console.log(userPayload);
}
