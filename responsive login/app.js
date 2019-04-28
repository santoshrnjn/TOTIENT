var express = require('express');
var app = express();
var user = require('./data.json');
var jwt = require('jsonwebtoken');

app.set('view engine', 'ejs');

app.use('/styles',express.static('styles'));
app.use('/images',express.static('images'));



app.get('/', function(req, res) {
     
     var person = user.users;
     console.log(person);
    jwt.sign({person }, "privateKey",  function(err, token) {
        console.log(token);
      });
    res.sendFile(__dirname +'/login.html');  
});

app.post('/success',verifyToken, function(req, res) {
    jwt.verify(req.token,"privateKey",function(err,authData){
        if(err){
            res.sendStatus(403);
        }else{
            res.render('success',{uname : req.query.name});
            connsole.log(authData)
        }
    })
    // var flag=0;
    // var q = req.query.name; 
    // console.log(req.query.name);   
    // user.users.forEach(element => {
    //     if(element.name == req.query.name){   
    //             { flag=1;                
    //             }
    //         }
    //     });  
    // if(flag){
    //     res.render('success',{uname : req.query.name});
    // } else{
    //     res.send(q.name+" Not Logged In Successfully");
    // } 
});

// app.get('*', function(req, res){
//     res.send('Sorry, this is an invalid URL.');
//  });

 //Verify Token
 function verifyToken(req,res,next){
     const bearerHeader = req.headers['authorization'];
     //to check if bearer is undefined
     if(typeof bearerHeader !== 'undefined'){

     }else{
         res.sendStatus(403);
     }
    }

app.listen(3000 ,function () {
    console.log('listening on port 3000!')
  });