const express = require('express');
const nodemailer = require('nodemailer');

let mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth:{
        user: " ",//sender mail Address
        pass: " " //sender mail Password
    }
})

let options = {
    from:" ", // Sender Mail Address
    to:"jayantchoudhary271@gmail.com", // Receiver Mail Address
    subject:" TEST Email ",
    text:" Testing node mailer "
}

mailTransporter.sendMail(options,(err)=>{
    if(err){
        console.log("Mail NOT Sent");
    } else {
        console.log("Email Sent Successfully");
    }
})