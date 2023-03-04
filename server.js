var express =require('express')
var cors = require('cors')
var body_parser=require('body-parser')
var babel_pollyfill=require('babel-polyfill');
var bookRoute=require('./route/booksRoute')
var storeRoute=require('./route/storeRoute')

var app=express()


app.use(cors())


app.use(body_parser.urlencoded({ extended: false }))

app.use(body_parser.json())


app.use("/api/v1", bookRoute)
app.use("/api/v1", storeRoute)

app.get('/', (req, res) => {
    res.send('hello')
  })


app.listen(3000, () => {
    console.log(`Server started .........`)
  })
  