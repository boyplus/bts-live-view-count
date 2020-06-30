const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    role: String,
    name: String
});

mongoose.model('users', userSchema);
