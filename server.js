const express = require('express')
const dotenv = require('dotenv')
const path = require('path')


const connectDB =require('./config/config')
require('colors')
const morgan = require('morgan')

//config dotenv
dotenv.config()

//conncetion
connectDB()

const app = express()

//middleware
app.use(express.json())
app.use(morgan('dev'))


app.use('/api/pizzas', require('./routes/pizzaRoute'))
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/orders', require('./routes/orderRoute'))

if(process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join(__dirname, '/client/build')))
  app.get('*', (req,res) =>{
    res.sendFile(path.resolve(__dirname,"client", "build" , "index.html"))
  })
}else{
    app.get('/', (req,res)=>{
        res.send("<h1>Hello From Node Server Vai nodemon</h1>")
    });
}


const PORT = process.env.PORT || 8080
app.listen(PORT,()=>{
    console.log(`Sever Running on ${process.env.NODE_ENV} mode on port no ${PORT}`.bgMagenta.white)
})