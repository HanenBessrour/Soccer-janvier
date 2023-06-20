// import express module
const express = require("express");
// import bodyparser module
const bodyParser = require("body-parser");
// import bcrypt module
const bcrypt = require("bcrypt");
// import multer module
const multer = require("multer");
// import path module
const path = require("path");
// import axios module
const axios = require("axios");

// import mongoose module
const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/sportDB');


// create app express
const app = express();

// Models importation
const Match = require("./models/match");
const Team = require("./models/team");
const User = require("./models/user");
const Player = require("./models/player");
const { log } = require("console");

// application config
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
// ShortCut
app.use('/myFiles', express.static(path.join('backend/images')));
// media types : les types de fichiers qui peuvent être accepter dans notre partie backend (validators backend)
const MIME_TYPE = {
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/jpg': 'jpg'
 }
 const storageConfig = multer.diskStorage({
  // destination
  destination: (req, file, cb) => {
  const isValid = MIME_TYPE[file.mimetype];
  let error = new Error("Mime type is invalid");
  if (isValid) {
  error = null;
  }
  cb(null, 'backend/images')
  },
  filename: (req, file, cb) => {
  const name = file.originalname.toLowerCase().split(' ').join('-');
  const extension = MIME_TYPE[file.mimetype];
  const imgName = name + '-' + Date.now() + '-crococoder-' + '.' + 
 extension;
  cb(null, imgName);
  }
 });
// Security configuration
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Accept, Content-Type, X-Requested-with, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, OPTIONS, PATCH, PUT"
  );
  next();
});
// DB simulation
// let matchesTab =[
//   {id : 1, scoreOne: 1, scoreTow:3, teamOne: "CA", teamTwo:"EST" },
//   {id : 2, scoreOne: 0, scoreTow:2, teamOne:"JUV", teamTwo:"aaa" },
//   {id : 3, scoreOne: 4, scoreTow:0, teamOne: "INT", teamTwo:"ROM" },
//   {id : 4, scoreOne: 0, scoreTow:0, teamOne: "BB", teamTwo:"CC" }
// ]
let teamsTab = [
  { id: 1, team: "CA", stadium: "rades", owner: "aa" },
  { id: 2, team: "EST", stadium: "manzah", owner: "bb" },
  { id: 3, team: "CSS", stadium: "sfax", owner: "cc" },
  { id: 4, team: "ESS", stadium: "sousse", owner: "dd" }
]

let playersTab = [
  { id: 1, playerName: "CA", position: "rades", number: "aa" },
  { id: 2, playerName: "EST", position: "manzah", number: "bb" },
  { id: 3, playerName: "CSS", position: "sfax", number: "cc" }
];

function generateId(T) {
  let max;
  if (T.length == 0) {
    max = 0;
  } else {
    max = T[0].id
    for (let i = 1; i < T.length; i++) {
      if (T[i].id > max) {
        max = T[i].id
      }
    }
  }
  return max + 1;

}


// Business Logic : Get all matches
app.get("/api/matches", (req, res) => {
  console.log("here into BL get all matches");
  Match.find().then((docs) => {
    console.log("Here documents", docs);
    res.status(200).json({ matches: docs, message: "OK" });
  });
});

// business logic : Get Match By Id
app.get("/api/matches/:x", (req, res) => {
  console.log("here into BL : Get Match by Id")
  let id = req.params.x;
  Match.findOne({ _id: id }).then((doc) => {
    res.json({ match: doc });
  });
  // let findedMatch = matchesTab.find((elt)=> {
  //   return elt.id == id});
  
});


// business logic : Delete Match By Id
app.delete("/api/matches/:id", (req, res) => {
  console.log("here into BL delete all matches");
  let id = req.params.id;
  Match.deleteOne({ _id: id }).then((result) => {
    console.log("Here response after delete", result);
    result.deletedCount == 1
      ? res.json({ msg: "deleted with success" })
      : res.json({ msg: "Not deleted" });
  });

  // let isFounded = true;
  // for (let i = 0; i < matchesTab.length; i++) {
  //   if (matchesTab[i].id == id) {
  //     isFounded =true;
  //     matchesTab.splice(i,1);
  //     break;
  //   }
  // }
  // isFounded ?
  // res.json({message: "Success"})
  // : res.json ({message : "ID not found"});
});


// business logic : Add Match 
app.post("/api/matches", (req, res) => {
  console.log("here into BL Add matche")
  // creation d'une instance de type Match avec la fonctio new
  let obj = new Match(req.body);
  // save fonction prédéfinie du module mongoose
  obj.save();
  // obj.id = generateId(matchesTab);
  // console.log ("Here obj", obj);
  // matchesTab.push(obj);

  res.status(200).json({ message: "Added with success" });
});


// business logic : edit Match By Id
app.put("/api/matches", (req, res) => {
  console.log("here into BL edit matches", req.body);
  let newMatch = req.body;
  Match.updateOne({ _id: newMatch._id }, newMatch).then((result) => {
    console.log("Here result after update", result);
    result.nModified == 1
      ? res.json({ message: "Edited with success" })
      : res.json({ message: "Echec " });

  })
  // for (let i = 0; i < matchesTab.length; i++) {
  //   if (matchesTab[i].id == req.body.id) {
  //     matchesTab[i] = req.body;
  //   }
  // }
});
// ********Teams********
// BL : get teams
app.get("/api/teams", (req, res) => {
  console.log("here into BL get all teams")
  res.status(200).json({ teams: teamsTab, message: "done" });
});

app.get("/api/teams/:id", (req, res) => {
  console.log("here into BL get all teams")
  id = req.params.id;
  findedTeam = teamsTab.find((elt) => {
    return elt.id == id
  });
  res.status(200).json({ team: findedTeam });
});

app.post("/api/teams", (req, res) => {
  console.log("Here into BL : Add team");
  let teamObj = new Team({
    teamName: req.body.name,
    teamStadium: req.body.stadium,
    teamOwner: req.body.owner
  });
  teamObj.save((err, doc) => {
    console.log("Here error", err);
    console.log("Here doc", doc);
    err
      ? res.json({ msg: "Error" })

      : res.json({ msg: "Added with success" });

  });

});

app.delete("/api/teams/:id", (req, res) => {
  id = req.params.id;
  isFounded = true;
  for (let i = 0; i < teamsTab.length; i++) {
    if (teamsTab[i].id == id) {
      isFounded = true;
      teamsTab.splice(i, 1);
    }
  }
  isFounded ?
    res.json({ message: "Success" })
    : res.json({ message: "ID not found" });
});

// ********Players*****
// BL : get players
app.get("/api/players", (req, res) => {
  Player.find().then((docs)=>{docs
    console.log("here into BL get all players", docs)
  })
  res.status(200).json({ playersTab: docs});
});
// BL : get player by id
app.get("/api/players/:id", (req, res) => {
  console.log("here into BL get player by id", req.params.id)
  Player.findOne({_id : req.params.id}).then((doc) => {
    res.status(200).json({ player: doc });
  });
});

app.post("/api/players", (req, res) => {
 console.log("here new player",req.body ) ;
  let p =new Player(req.body);
  p.save();
  res.status(200).json({ message: "Added successfuly" });
});

app.delete("/api/players/:id", (req, res) => {
 console.log ("here into BL :delete player",req.params.id);
  Player.deleteOne({_id : req.params}).then((result)=>{
    result.deletedCount==1  
    ? res.json({ msg: "deleted with success" })
    : res.json({ msg: "Not deleted" });
  });
});

app.put("/api/players/", (req,res)=>{
  console.log ("here into BL :edit player",req.body);
  Player.updateOne({_id : req.body._id}, req.body)
  .then((response)=>{response.nModified==1
    ? res.json({ message: "Edited with success" })
    : res.json({ message: "Echec " });
  });
});

// BL : signup
app.post("/api/users/signup",multer({ storage: storageConfig }).single('img'),
 (req, res) => {
  console.log("here into signup", req.body);
  bcrypt.hash(req.body.pwd, 8).then((cryptedPwd) => {
    console.log("Here crypted Pwd", cryptedPwd);
    req.body.pwd = cryptedPwd;
    req.body.avatar = `http://localhost:3000/myFiles/${req.file.filename}`;
    // `${req.protocol}://${req.get("host")}/myFiles/${req.file.filename}`
    let user = new User(req.body);
    user.save((err, doc) => {
      err
        ? res.json({ msg: "Error" })

        : res.json({ msg: "Added with success" });
    });
  });

});

// BL : Login
app.post("/api/users/login", (req, res) => {
  console.log("Here into BL Login", req.body);
  let user;
  // check if email exists
  User.findOne({ email: req.body.email })
    .then((doc) => {
      console.log("Here doc", doc);
      user = doc;
      // send Email error Msg
      if (!doc) {
        res.json({ msg: "Please email" })
      } else {
        // check Pwd
        return bcrypt.compare(req.body.pwd, doc.pwd);
      }
    })
    .then((isEqual) => {
      console.log("Here isEqual", isEqual);
      // Send Pwd Error Msg
      if (!isEqual) {
        res.json({ msg: "Please check PWD" });
      } else {
        let userToSend = {
          userId: user._id,
          email: user.email,
          fName: user.firstName,
          lName: user.lastName
        };
        res.json({ user: userToSend, msg: `Welcome ${user.firstName}` });
      };
    });
});

// BL : search match by scoreOne or scoreTwo
app.post("/api/matches/searchMatches", (req,res) =>{
  console.log("here into BL : search all Matchs by score", req.body)
  Match.find({
    $or : [{scoreOne : req.body.scoreOne, scoreTwo : req.body.scoreTwo}],
  }) .then((docs)=>{res.json({findedMatches: docs});
 });
  
});


// BL : search weather
app.get("/api/weather/:city", (req,res)=>{
  console.log("Here into BL: search weather by city", req.params.city);
  let apiKey = "62ee756a34835483299877a61961cafb";
  let  apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${req.params.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then((weatherResponse)=>{
    console.log("here response from API ",weatherResponse.data);
    let data = weatherResponse.data;
    let description =data. weather[0].description;
    let icon = data. weather[0].icon;
    let result = {
      temperature : data.main.temp,
      pressure : data.main.pressure,
      humidity: data.main.humidity,
      icone : `https://openweathermap.org/img/wn/${icon}@2x.png`,
      description: description,
      sunrise :data.sys.sunrise,
      sunset : data.sys.sunset
    };
 res.json({result : result});
  });
})


// make app exportable to other files
module.exports = app