"use strict";

let Registereduser = require('../models/registereduser');
let Portfolio = require('../models/portfolio');
var ObjectId = require('mongodb').ObjectId; 

let registereduserController = {

    getAllregistereduser:function(req, res){

        Registereduser.find(function(err, registereduser){
            if(err)
                return err.message;
            else
                return registereduser;
        })
    },
    getregistereduser:function(req, res){
        Registereduser.find({ "_id": ObjectId(req.id)}, function(err, registereduser) {
          if(err)
              return err.message;
          else
              return registereduser;
        })
    },
    login:function(req, res){
        Registereduser.find({ "name":req.name,"password":req.password}, function(err, registereduser) {
          if(err)
              return err.message;
          else
              return registereduser;
        })
    },


  register:function(req, res){
        let register = new Registereduser();
        register._studentid = req._studentid
        register.name = req.name
        register.profile_pic = req.profile_pic
        register.password = req.password

        register.save(function(err, registereduser){
            if(err){
                return err.message
                console.log(err);
            }
            else{
              let portofolio = new Portofolio();
              portfolio._id = registereduser._id
              portfolio.save(function(err, portfolio){
                  if(err){
                      return err.message
                      console.log(err);
                  }
                  else{
                console.log(registereduser, portfolio );
                return {'registereduser': registereduser, 'portfolio' : portfolio };
              }
            })
          }
        })
    }

}

module.exports = registereduserController;
