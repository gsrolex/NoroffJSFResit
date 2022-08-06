import { useContext } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/api";

const url = BASE_URL;
const token = "e760e1f3-7881-4578-839b-82eeef6b3d9a";

export default function useAxios() {
  const apiClient = axios.create({
    baseURL: url,
  });

  apiClient.interceptors.request.use(function (config) {
    config.headers["X-API-Key"] = token;
    return config;
  });

  return apiClient;
}
