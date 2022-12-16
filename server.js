const dotenev = require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoute = require('./routes/userRoute');
const taskRoute = require('./routes/taskRoute')
const errorHandler = require('./middlewares/errorMiddleware');
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors({
    origin: ["https://virtualoffice.nriherbal.com", "http://localhost"],
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'PATCH'],
    allowedHeaders: ["https://virtualoffice.nriherbal.com", "http://localhost"],
    preflightContinue: true
    
}))

// Routes Middleware
app.use('/api/users', userRoute)
app.use('/api', taskRoute)

// Routes
app.get('/' , (req, res)=>{
    res.send('hello')
})

// Error Middleware
app.use(errorHandler)

// Create our listening port
const PORT = process.env.PORT || 5000

// Connect mongoDB
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    app.listen(PORT, ()=>{
       console.log(`server started at port ${PORT}`)
    })
})
.catch((err => console.log(err)))