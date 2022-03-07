/*
const express = require("express")
const app = express()
let mysql = require('mysql');

//Chargement de path
const path = require("path")

app.use(express.static(path.join(__dirname, "ext")))


//Creation du http
const http = require("http").createServer(app)
//On add socket
const io = require("socket.io")(http)

//Chargement sequelize (équivaut a pdo dans le php)
const Sequelize = require("sequelize")


let con = mysql.createConnection({
    host: "localhost",
    user: "newuser",
    password: "password",
    database: "twitter"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected to database");
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/ext/html/login.html")
})



http.listen(8000, function () {
    console.log(`Connexion au serveur OK \nPort : ${http.address().port}` )
})*/
