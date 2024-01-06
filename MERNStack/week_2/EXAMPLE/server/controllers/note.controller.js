const Note = require("../models/note.model");


// C R U D

module.exports = {
    // READ ALL 
    findALLNotes: (req ,res) =>{
        Note.find()
        .then((notes) =>{res.json(notes)})
        .catch(err =>{ res.json(err);
        });
    },

    // READ ONE 

    findOneSingleNote:(req,res) => {
        Note.findOne({ _id: req.params.id })
        .then((oneSingleNote) => {
            res.json(oneSingleNote);
        })
        .catch((err)=> {
            res.json(err);
        });
    },

    // CREATE

    creatNewNote: (req,res) => {
        Note.create(req.body)
        .then((newlycreatedNote) => {
            res.json(newlycreatedNote);
        })
        .catch((err) => {
            res.json(err);
        });
    },

    //  UPDATE

    updateExistingNote: (req, res) => {
        Note.findOneAndUpdate({_id:req.params.id}, req.body, {
            nesw:true,
            runValidators:true,
        })
        .then((updateNote) => {
            res.json(updateNote);
        })
        .catch((err) => {
            res.json(err);
        });
    },

    // DELETE
    
    deleteAnExistingNote: (req,res) =>
    {
        Note.deleteOne({ _id: req.params.id})
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            res.json(err);
        });
    },
};


