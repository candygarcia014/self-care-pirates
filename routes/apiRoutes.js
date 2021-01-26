const fileUpload = require("express-fileupload");
const AWS = require("aws-sdk");
const keys = require("../utils/keys.js");
const router = require('express').Router();
const jwt = require("../configs/jwt");
const { User, Posts } = require("../models/index");
const passport = require("../configs/passport");
const isUserAuthenticated = require('../middlewear/isAuthenticated');

// creating s3 instance (to allow uploads)
const s3 = new AWS.S3({
    accessKeyId: keys.s3key,
    secretAccessKey: keys.s3secret
});

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
    console.log(req.body)
    Posts.create(req.body).then(data =>{
        console.log(data) 
        return res.status (200).json({})
    })
})
//route to find all posts and sends back to user/frontend  
router.get("/posts", (req, res) => {
    Posts.find().then(data => res.json(data));
})

// Photo Upload
router.post("/upload/:userId", async (req, res) => {
    const { userId } = req.params
    // Sending error back if no file was uploaded
    if (!req.files) {
        return res.status(400).send("No file was uploaded.");
    }

    // references the file uploaded from the input field with the 'name' attribute specified following 'req.files.'
    const uploadFile = req.files.file;

    console.log(req.files);

    // setting up S3 upload parameters
    const params = {
        Body: uploadFile.data, // data from uploaded file
        Bucket: keys.s3bucket, // bucket name
        Key: `${Date.now()}-${uploadFile.name}` // file name to use for S3 bucket
    };

    // uploading file to the bucket
    s3.upload(params, (err, response) => {
        if (err) throw err;
        User.findOneAndUpdate({ _id: userId }, { image: response.Location }, { new: true}).then(x => x)
        console.log(`File uploaded successfully at ${response.Location}`);
        // terminating the req/res cycle by sending a JSON object with the uploaded
        // file path AND any date sent along with the upload... this is where you 
        // could write to your db if needed, now that you have the url path for the
        // newly uploaded file!
        res.json({ url: response.Location, data: req.body });
    });
});



module.exports = router;

