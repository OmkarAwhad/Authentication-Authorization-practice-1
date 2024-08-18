const express = require('express')
const bcrypt = require('bcrypt')
const User = require('../models/userModel')

/// sign up route handler
exports.signUpController = async(req,res) => {
     try {
          const {name,email,password,role} = req.body;

          // to find if the user already exists or not
          const existingUser = await User.findOne({email});
          if(existingUser){
               return res.status(400).json({
                    success:false,
                    message:"User already exists",
               })
          }

          // secure the password
          let hashedPassword;
          try{
               hashedPassword = await bcrypt.hash(password, 10); 
          }catch(err){
               return res.status(400).json({
                    success:false,
                    message:"Error hashing password",
               })
          }

          // creating user entry
          const userEntry = await User.create({
               name,email,password:hashedPassword,role
          });

          return res.status(300).json({
               success:true,
               // data:userEntry,
               message:"User created successfully",
          })


     } catch (error) {
          console.log(Error)
          return res.status(400).json({
               success:false,
               message:"User cannot be registered , please try again",
          })
     }
}