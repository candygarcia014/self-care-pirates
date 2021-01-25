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
    name: function(id) {
        return axios.get("/api/user/" + id);
    },
    //creates posts
    createPosts: function(data) {
        return axios.post("/api/posts", data);
    },
    //gets all posts
    getPosts:async function(data) {
        return await axios.get("/api/posts", data);
    }
}
