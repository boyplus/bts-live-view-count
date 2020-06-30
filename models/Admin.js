const mongoose = require('mongoose');
const { Schema } = mongoose;

const adminSchema = new Schema({
    googleId: String,
    name: String,
});

mongoose.model('admins', adminSchema);
