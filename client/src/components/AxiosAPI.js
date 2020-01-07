import axios from "axios";

export default axios.create({
  baseURL: "https://veganease-llc.herokuapp.com" || "https://localhost:8000",
  responseType: "json"
});
