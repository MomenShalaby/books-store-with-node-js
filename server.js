var express =require('express')
var cors = require('cors')
var body_parser=require('body-parser')
var babel_pollyfill=require('babel-polyfill');
var noteRoute=require('./route/noteRoute')

var app=express()


app.use(cors())


app.use(body_parser.urlencoded({ extended: false }))

app.use(body_parser.json())


app.use("/api/v1", noteRoute)

app.get('/', (req, res) => {
    res.send('hello')
  })

app.use('/app/v1',noteRoute)

app.listen(3000, () => {
    console.log(`Server started .........`)
  })
  