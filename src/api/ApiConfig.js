import axios from "axios";

const LogisticaApi= axios.create({
  
   baseURL: "http://retopagoefectivo.azurewebsites.net/api",
  headers: {
    "Content-type": "application/json"
  }
});
export default LogisticaApi;