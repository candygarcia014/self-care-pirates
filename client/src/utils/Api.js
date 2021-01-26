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
    createPosts: function(data, id) {
        return axios.post("/api/posts/" + id, data);
    },
    //gets all posts
    getPosts:async function(data) {
        return await axios.get("/api/posts", data);
    },

    // Photo Upload
    uploadPhoto: function(data, id) {
        console.log(id)
        return axios.post("/api/upload/" + id, data);
    }, 
    //this is the front end post page 
    getSinglePost: async function(id) {
        return await axios.get("/api/posts/" + id)
    },

}


//post api that will create the comments - to render the response from the backend