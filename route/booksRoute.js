var express = require('express')
const router =express.Router()
const noteCtrl =require('../controller/noteController')

router.get("/notes/getallnotes", noteCtrl.getAllNotes)

router.post("/notes/save",noteCtrl.saveNote)

router.put("/notes/update",noteCtrl.updateNote)

router.delete("/notes/delete",noteCtrl.deleteNote)

module.exports = router