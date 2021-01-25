const router = require('express').Router();
const jwt = require("../configs/jwt");
const { User, Posts } = require("../models/index");
const passport = require("../configs/passport");
const isUserAuthenticated = require('../middlewear/isAuthenticated');
router.post("/signup", (req, res) => {
    console.log(req.body)
    const { email, firstName, lastName, username, password } = req.body
        if(!email || !firstName || !lastName || !username || !password) {
            return res.status(500).send("Please fill out all fields");
        }; //Creates user - sign-up
        User.findOne({$or: [{email}, {username}]}).select("firstName lastName username email date" ).then(user => {
            if(user === null) {
                User.create(req.body);
                return res.status(200).send("User created");
            }// Checking if email/username exists in the database
                if(email === user.email) {
                    return res.status(500).send("Email already exists. Please use a different email.");
                };
                if (username === user.username) {
                    return res.status(500).send("Username already exists. Please use a different username.");
                };
        }).catch(err => res.status(500).json(err))
});
//login route 
router.post("/login", passport.authenticate("local"), (req, res) => { 
    const { id } = req.user
    res.status(200).json({ token: jwt.sign({id}), token_type: "Bearer" });
});
//logout route 
router.get("/logout", (req,res) => {
    req.logout();
    res.json("User logged out")
});
router.get("/user/:id", (req, res) => {
    const { id } = req.params
    User.findById(id).then(user => res.json(user));
});
//posts route - to post the new posts 
router.post("/posts", (req, res) =>{
    Posts.create(req.body).then(data =>{
        console.log(data) 
        return res.status (200).json({})
    })
})
//route to find all posts and sen back to user 
router.get("/posts", (req, res) => {
    Posts.find().then(data => res.json(data));
})

module.exports = router;

