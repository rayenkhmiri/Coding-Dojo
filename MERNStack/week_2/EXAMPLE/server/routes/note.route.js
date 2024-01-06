const NoteController = require("../controllers/note.controller")
module.exports = app =>{
    app.get("/api/notes", NoteController.findALLNotes);
    app.get("/api/notes/:id", NoteController.findALLNotes);
    app.post("/api/notes",NoteController.creatNewNote);
    app.patch("/api/notes/:id", NoteController.updateExistingNote);
    app.delete("/api/notes/:id", NoteController.deleteAnExistingNote); 
};
