var generator = require("../Util/generator")
var memStorage = require("../Util/memoryStorage")
var model =require("../model/noteModel")

exports.getAllNotes = (req,res)=>{

    var values=memStorage.getValue(memStorage.store)
    return res.status(200).send(JSON.stringify(values))
}

exports.saveNote = (req,res)=>{
    var createdBy="admin";
    var createdOn=new Date();
    var seqID=generator.generate();
    const title =req.body.title;
    var content =req.body.content;

    if(!title ){
        return res.status(500).send({ error :'Title Missing'})
    }
    else if (!content){
        return res.status(500).send({ error :'Content Missing'})
    }

    var Note = model.Note
    var noteObj = new Note(seqID,title,content,createdBy,createdOn)
    memStorage.store.setItem(seqID,noteObj)
    return res.status(201).send(noteObj)


}


exports.updateNote = (req,res)=>{


    var createdBy="admin";
    var createdOn=new Date();
    var seqID=req.body.seqID;
    const title =req.body.title;
    var content =req.body.content;
    if(!seqID){
        return res.status(500).send({ error :'seqID Missing'})

    }
    else if(!title ){
        return res.status(500).send({ error :'title Missing'})
    }
    else if (!content){
        return res.status(500).send({ error :'Content Missing'})
    }

    if (!memStorage.store.getItem(seqID)){
        return res.status(500).send({ error :'Note doesnt exist'})

    }

    var Note = model.Note
    var noteObj = new Note(seqID,title,content,createdBy,createdOn)
    memStorage.store.setItem(seqID,noteObj)
    return res.status(200).send("Note Updated")





}


exports.deleteNote = (req,res)=>{

    var seqID=req.body.seqID;
    if(!seqID){
        return res.status(500).send({ error :'seqID Missing'})

    }
    if (!memStorage.store.getItem(seqID)){
        return res.status(500).send({ error :'Note doesnt exist'})

    }
    memStorage.store.removeItem(seqID)
    return res.status(202).send("Note Deleted")
    
}

