const express = require('express'),
http = require('http'),
mongoose = require('mongoose'),
socketIO = require('socket.io'),
bodyparser = require('body-parser'),
path = require("path"),
fs = require("fs"),
cors = require('cors'),
UserModel = require('./model/User'),
MessageModel = require('./model/Message'),
config = require('./config/db.js'),
router = express.Router(),
app = express(),
multer = require('multer'),
upload = multer({ dest: './public/images/' });

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());
app.get('/', (req, res) => {
    res.send("ReactJS ChatApp server");
});

// our localhost port
const port = 4001;

// our server instance
const server = http.createServer(app);

// This creates our socket using the instance of the server
const io = socketIO(server);

mongoose.Promise = global.Promise;
    mongoose.connect(config.db,{ useNewUrlParser: true }).then(
        () => {
          console.log('Database is connected');

          // This is what the socket.io syntax is like, we will work this later
          io.on('connection', socket => {
            console.log('User connected')
            
            socket.on('UserConnected', (message) => {
              console.log(message + ' connected to chat')
              socket.emit("status", "connected");
            });

            socket.on('chat', function (msg) {
              socket.broadcast.emit('chat', msg);
            });

            socket.on('disconnect', () => {
              console.log('user disconnected')
            })
          });
        },
        err => {console.log('Can not connect to the database' + err)}
);


app.get('/login/:username/:password', (req, res) => {
  let username = req.params.username;
  let password = req.params.password;
  console.log('login user: '+JSON.stringify(req.params))
  UserModel.find({username: username, password: password}).exec(async function(err, user){ 
    if(err) { 
      console.log("Error retrieving Usercollection."); 
    } 
    else { 
      console.log("retrieved Usercollection.");
      res.status(200).send(user);
    } 
  })
  
});

app.post('/user', upload.single('imageFile'), (req, res) => {
    let user = req.body;
    console.log("user: "+JSON.stringify(user));
    let userData = new UserModel(user);

    userData.save(function(err, usercollection){ 
        if(err) { 
            console.log("Error retrieving usercollection."); 
            
        } 
        else { 
            res.status(200).send(user); 
            
        } 
    })
  
});

server.listen(port, () => console.log(`Listening on port ${port}`))