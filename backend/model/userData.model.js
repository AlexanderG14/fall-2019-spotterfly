const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userDataSchema = new Schema({
    UserID: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    }, 
    Username: {
        type: String,
        required: true,
        trim: true,
    },   //need to add location type GeoLocation Object 
    Song: {
        type: [],
        trim: true,
    },

}, {
    timestamps: true, // use some sort of time for login / sync not this one 
});

const UserData = mongoose.model('userData', userDataSchema);

module.exports = UserData;