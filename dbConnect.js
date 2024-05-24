const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://saurabh:Saurabh2212@expenses.kozctdr.mongodb.net/?retryWrites=true&w=majority&appName=Project' , {useNewUrlParser : true , useUnifiedTopology : true})

const connection = mongoose.connection

connection.on('error', err => console.log(err))

connection.on('connected' , () => console.log('Mongo DB Connection Successfull'))