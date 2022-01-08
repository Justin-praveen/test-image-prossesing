const express = require("express");
var ip = require("ip");
const nodemailer = require("nodemailer");

const fs = require("fs");
const { exec } = require('child_process');

const rout = express.Router();


rout.get("/auth",(req,res)=>{

    
const transport = nodemailer.createTransport({
    service : "gmail",
    auth :{
        user:"justinbiber4026130@gmail.com",
        pass : "Vinith@4026130"
    }
})

const mailOptions = {

    from : "justinbiber4026130@gmail.com",
    to : "justinpraveen14@gmail.com",
    subject : "---UN AUTHORISED ENTRY---",
    text : ` THIS IP :${ip.address()}`
    
}

transport.sendMail(mailOptions,(err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data)
    }

})

    exec('shutdown /s');
    const ju = {
        value : "admin"
    };

    res.json(ju)
})

rout.get("/data",(req,res)=>{

  const hi = fs.readFileSync("D:/Projects/Quise/qu-i/server/data.json")

  const ju = JSON.parse(hi)

  res.json(ju)

     

})

rout.post("/add",async(req,res)=>{

    const hy = fs.readFileSync("D:/Projects/Quise/qu-i/server/data.json");
    const oo = JSON.parse(hy)
    
   
     const ju =await req.body;
    console.log(ju);
    res.json(ju)
    oo.data.push(ju)
    
    const op = JSON.stringify(oo,null,2)
    
    fs.writeFileSync("D:/Projects/Quise/qu-i/server/data.json",op,(err)=>{
        if(err){
            console.log("iiiii")
        }else{
            console.log("oooo")
        }
    
    })
    


})

module.exports = rout



