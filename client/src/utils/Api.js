import axios from "axios";

export default { 
    signup: function(data) {
        return axios.post("/api/signup", data);
    },
    login: function(data) {
        return axios.post("/api/login", data);
    },
    logout: function() {
        return axios.get("/api/logout");
    },
    // Userpage
    name: function(data) {
        return axios.get("/api/user", data);
    }
}
