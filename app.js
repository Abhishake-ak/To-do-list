// jshint esversion:6
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const day = require(__dirname + "/date.js");
const mongoose = require("mongoose");


app.set("view engine", 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));



mongoose.connect("mongodb+srv://Abhishake-kumar:Test123@cluster0.stlxk.mongodb.net/todolistDB");

const todoschema = {
    todo : String
};

const Todolist = mongoose.model("Todolist",todoschema);

app.get("/",( req,res)=>{
    let today = day.getdate();
Todolist.find({},function(err,found){
    res.render("index",{data:found,day:today});
})

app.post("/delete",(req,res)=>{
    const checkedid = req.body.checkbox ;
    Todolist.findByIdAndRemove(checkedid ,function(err){
        if(err){
            console.log(err);
        }else{
            res.redirect("/");
            console.log("Sucessfully Deleted");
        }
    })

   
})

});
app.post("/",(req,res)=>{
    const listitem = req.body.to;
    const again = new Todolist({
        todo : listitem
    });
    again.save();
    res.redirect("/");
})
app.listen(3000,()=>{
    console.log("Server is running !");

})