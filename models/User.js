const mongoose = require("mongoose");


const userschema = new mongoose.Schema({
    username:{
        type:String,
        require: true,
        min:3,
        unique:true
    },

    email: {
        type:String,
        require:true
    },
    password: {
        type:String,
        require:true
    },
    profilepic: {
        type:String,
        default:""
    },
    coverpic: {
        type:String,
        default:""
    },
    followers: {
        type:Array,
        default:[]
    },
    following: {
        type:Array,
        default:[]
    }
    },
{timestamps:true}
);

module.exports = mongoose.model("User",userschema);
