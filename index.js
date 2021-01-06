require('dotenv').config(); 
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

mongoose.connect(process.env.DATABASE_STRING, {useNewUrlParser: true, useUnifiedTopology:true,useFindAndModify: false,})
const db = mongoose.connection
db.on('error', (err) => console.log(err) )
db.once('open', () => console.log('Database Connected'))

app.use(express.json())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

const labsRouter = require('./routes/lab')
const examesRouter = require('./routes/exame')
app.use('/', labsRouter)

app.use('/exame', examesRouter)
app.use('/lab', labsRouter) 

app.listen(3000, () => console.log('servidor rodando'))


