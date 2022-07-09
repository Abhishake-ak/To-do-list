// jshint esversion:6
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const day = require(__dirname + "/date.js")
const EventEmitter = require("events");
const emitter = new EventEmitter();

app.set("view engine", 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

const data = [];


app.get("/",( req,res)=>{
let today = day.getdate();
res.render("index",{data:data,day:today});

});
app.post("/",(req,res)=>{
    const todo = req.body.to;
    data.push(todo);
    res.redirect("/");
})
app.listen(3000,()=>{
    console.log("Server is running !");

})