const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//set up express app
const app = express();

//connect to mongodb
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost/UserDB', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

app.use(express.static('public'));
app.use(bodyParser.json());

//initialise routes
app.use('/api',routes);

//using middleware error handling
app.use(function(err,req,res,next){
    res.status(422).send({error:err.message});
});


//listen for request
app.listen(process.env.port||3000,function(){
    console.log("Server Listening to port  3000");
});