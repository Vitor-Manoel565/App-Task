import axios from "axios";

const apiURL = process.env.NEXT_PUBLIC_API_URL;

export const BackendApi = axios.create({
  baseURL: apiURL,
  headers: {
    "Content-Type": "application/json",
  },
});
