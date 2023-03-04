exports.Note = class Note{
    constructor(noteID,title,content,createdBy,createdOn){
        this.noteID=noteID;
        this.title=title;
        this.content=content;
        this.createdBy=createdBy;
        this.createdOn=createdOn;
    }
}