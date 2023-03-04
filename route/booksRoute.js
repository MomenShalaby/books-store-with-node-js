var express = require('express')
const router =express.Router()
const booksController =require('../controller/booksController')

router.get("/books/getallbooks", booksController.getAllBooks)

router.post("/books/save",booksController.saveBook)

router.put("/books/update",booksController.updateBook)

router.delete("/books/delete",booksController.deleteBook)

module.exports = router