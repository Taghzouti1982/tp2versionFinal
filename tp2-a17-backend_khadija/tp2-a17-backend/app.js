//modules
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const platsRouter = require('./routes/plats')

//connection avec MongoDB
mongoose.connect("mongodb+srv://khadijaKhorchani:Mekka2025@cluster0.wvlnx4d.mongodb.net/tp2_a17?retryWrites=true&w=majority", { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))


//middlewars
app.use(express.json())
app.use('/plats', platsRouter)


//lancer l'application
app.listen(4000, () => console.log('server started 4000'))
