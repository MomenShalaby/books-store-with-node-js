var express = require('express')
const router =express.Router()
const booksController =require('../controller/booksController')

router.get("/books/getallbooks", booksController.getAllBooks)

router.get("/books/getbookdetails/:book_id",booksController.getBooksDetails)

router.post("/books/create",booksController.createBook)

router.put("/books/update",booksController.updateBook)

router.delete("/books/delete",booksController.deleteBook)

module.exports = router