import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID YDsPYYph4oZoF3CpC09Vvby3fndHppD24vjwiydp5es",
  },
});
