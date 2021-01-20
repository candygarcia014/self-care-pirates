import axios from "axios";

export default { 
    signup: function() {
        return axios.post("/signup")
    }
}