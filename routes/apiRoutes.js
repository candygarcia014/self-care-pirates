const router = require('express').Router();
const jwt = require("../configs/jwt");
const { User, Posts, Comments } = require("../models/index");
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

//gets user and all of their posts 
router.get("/user/:id", (req, res) => {
    const { id } = req.params;
    User.findById(id).populate(['userPosts', 'userComments']).populate('comments').then(user => res.json(user));

});
//posts route - to post the new posts 
// 1. send post req to backend - in the backend we need to find the user ID to get all of his posts out of his database and update with the new posts. 
router.post("/posts/:id", (req, res) =>{
    const { id } = req.params
    console.log(id)
    Posts.create(req.body).then(data =>{
        console.log(data) 
        User.findOneAndUpdate({_id: id}, {$push: { userPosts: data.id }}, { new: true }).then(res => {
        return res.status (200).json("posted")
    });
    });
    console.log(req.body)
})
//route to find all posts and sends back to user/frontend  
router.get("/posts", (req, res) => {
    Posts.find().sort({ date: -1 }).then(data => res.json(data));
})

//route to get individual post and returns data for that post 
router.get("/posts/:id", (req, res) => {
    Posts.findById(req.params.id).populate("comments").then(data => {
        res.json(data);
    })
});

//create a new comment under the post
router.post("/posts/:postId/:userId/comments", (req, res) => {
    const { postId, userId } = req.params;
    Comments.create (req.body).then(data =>{
        console.log(data) 
        //comments get pushed into the posts model
        Posts.findOneAndUpdate({_id: postId}, {$push: { comments: data.id }}, { new: true }).then(data => {
        //Comment gets pushed into the user model 
        User.findOneAndUpdate({_id: userId}, { $push: { userComments: data.id }}, { new: true }).then(data1 => data1);
        return res.status(200).json("posted")
    });
});

});


module.exports = router;

