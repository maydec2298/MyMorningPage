import axios from "axios";

const isProduction = process.env.NODE_ENV === "production";
const productionURL = `${process.env.PRODUCTION_API_ENDPOINT}`;

export const BASE_URL = isProduction
  ? productionURL
  : "https://mymorningpage.herokuapp.com";

export const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  validateStatus: (status) => {
    return status < 500;
  },
});
