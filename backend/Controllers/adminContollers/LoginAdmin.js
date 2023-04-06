// const router = require('express').Router();

const User= require('../../Schema/StudentTeacherAdmin.Schema');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose');



exports.LoginAdmin = async (req, res) => {
   


    if (req.header('Admin-Token')) {

        return  res.status(200).send({ message: "Alredy login" })
    }
  
    // email  exists ??
    const user = await User.findOne({ email: req.body.email });
    if (!user) {

        return res.status(400).send({ message: "Email or password is wrong" });

    }
    if (user.isAdmin==false) {

        return res.status(400).send({ message: "you are not a admin" });

    }

    //Paswword is correct
    const validPass = await bcrypt.compare(req.body.password, user.password)
    if (!validPass) {

        return res.status(400).send({ message: "password is not gd " });//Email or password is wrong
    }  

    //Create  and assign a token 
    const token =
        jwt.sign({
            _id: user._id, firstName: user.firstName,
            lastName: user.lastName, isAdmin: user.isAdmin , email : user.email
        }
            , process.env.TOKEN_SECRET_Admin);
    res.header('Admin-Token', token)
    // console.log('i ma log in , but the web token not in the postman')
    // console.log(`my token is : ${token}`)

    res.status(200).send({ message: "login tmm", token });


}