import Axios from "axios";
import applyCaseMiddleware from "axios-case-converter";

import { API_URL } from "@/config/constants";

export const apiClient = applyCaseMiddleware(Axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
}));
