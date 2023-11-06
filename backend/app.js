const express = require('express');
const bodyParser = require("body-parser");
var cors = require('cors')

const mongoose = require("mongoose");
require('dotenv').config();  
const route = require('./routes/route.js');
const app = express();
  
app.use(bodyParser.json());  
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.use('/', route); 

mongoose.connect(process.env.mongo_uri) 

.then( () => console.log("Mongo is connected"))

.catch(err => console.log(err))

app.listen(process.env.PORT || 8000, function () {

    console.log(`Server running on port ` + (process.env.PORT || 8000 ));
    
})     