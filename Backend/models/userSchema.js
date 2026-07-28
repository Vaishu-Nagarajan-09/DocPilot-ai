const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
    },
    email:{
        type: String,
        required:true,
        lowercase: true,
        unique: true,
        trim:true
    },
    hashPassword:{
        type: String,
        required: true,
        trim: true,
    },
    salt: {
        type: String,
        required: true
   },
   planName: {
        type: String,
        required: true
   },
    payTime:{
         type: Date,
         required: true
    },
    endDate:{
        type: Date,
        required: true
    }
});

const userDetails = mongoose.model('User',userSchema);

module.exports = userDetails;
