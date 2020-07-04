const mongoose = require('mongoose');
const { Schema } = mongoose;

const ConfigSchema = new Schema({
    type: { type: String, default: 'BTS' },
    allow: { type: String, default: true },
    times: { type: Number, default: 300000 },
});

mongoose.model('configs', ConfigSchema);
