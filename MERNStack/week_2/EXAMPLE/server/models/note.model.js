//  import mongoose to build the model

const mongoose = require("mongoose");


//  the model - the rules -the entries need to follow

const NoteSchema = new mongoose.Schema({

    title:{
        type:String,
        trim : true,
        required:[true , "{PATH} is required"],
        minLength:[3,"{PATH} must be at least 3 chars"], 
    },

    content:{
        type:String,
        trim:true,
        required:[true,"{PATH} is required "],
        minLength: [3,"{PATH} must be at least 3chars"],
    },

    isImportant:{
        type:Boolean,
        default:false,
    },

    },

    {timestamps:true}
);

module.exports = mongoose.model("Note", NoteSchema);