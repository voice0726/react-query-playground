import Axios from "axios";

import { API_URL } from "@/config/constants";

export const apiClient = Axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
