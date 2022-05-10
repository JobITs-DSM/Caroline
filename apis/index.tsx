import axios from "axios";
import { BASE_URL } from "./../constants/api";

const request = axios.create({ baseURL: BASE_URL });

export default request;
