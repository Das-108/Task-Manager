const connectDB = require('./db/connect')
const  express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const errorHandlerMiddleware = require('./middleware/errorHandle')
const asyncWrapper = require('./middleware/async')
require('dotenv').config()
const notFound = require('./middleware/notFound')

//middleware
app.use(express.static('./public'))
app.use(express.json())


//routes
app.use('/api/v1/tasks',tasks)
app.use(notFound)
app.use(errorHandlerMiddleware)





const port = 3000


const start = async () =>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => console.log(`server is listing on port ${port}`))
    }catch(error){
        console.log(error)
    }
}

start();


