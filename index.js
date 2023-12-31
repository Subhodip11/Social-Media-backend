const express = require('express');
const app = express();

require('dotenv').config({path: '.env'});

app.use(express.json())

const {conn} = require('./dbconfig.js');

app.use('/api', require('./routes/userRoutes'), require('./routes/postRoutes'))

const port = process.env.PORT || 8001


conn.then(db=>{
    if(!db) return "Error connecting db"
    console.log("Database connected...")
    app.listen(port, ()=>{
        console.log(`Server started at port - ${port}`);
    })
}).catch(err=>{
    console.log(err.message)
})