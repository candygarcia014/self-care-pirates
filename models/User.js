const mongoose = require('mongoose'),
      { Schema } = mongoose,
      bcrypt = require('bcrypt');

const SALT_ROUNDS = 6;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        validate: [({ length }) => length >= 5, "Please type a username that is longer than 5 characters"],
        unique: true
    },
    email: {
        type: String,
        required: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
    password: {
        type: String,
        required: "Password is required!",
        trim: true,
        validate: [({ length }) => length >= 6, "Please type a longer Password"],
        select: false
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

userSchema.pre('save', function() {
    if(!this.isModified('password')) {
        return Promise.resolve();
    };
    if(this.password.length < 6) {
        return Promise.reject( new Error("Password must be longer then 6 charaters"))
    };
    return bcrypt.hash(this.password, SALT_ROUNDS).then(hash => {
        this.password = hash
    });
});

userSchema.methods.verifyPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;