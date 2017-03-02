"use strict";

let Portfolio = require('../models/portfolio');

let portfolioController = {

    getAllportfolio:function(req, res){

        Portfolio.find(function(err, portfolio){
            if(err)
                return err.message;
            else
                return portfolio;
        })
    },
    getportfolio:function(req, res){
        Portfolio.find({ "_id": ObjectId(req._id)}, function(err, portfolio) {
          if(err)
              return err.message;
          else
              return portfolio;
        })
    },

  createPortfolio:function(req, res){
        let portfolio = new Portfolio();
        portfolio.registereduser = req.registereduser
        
        portfolio.save(function(err, portfolio){
            if(err){
                return err.message
                console.log(err);
            }
            else{
                console.log(portfolio );
                return portfolio;
              }
            })
    }
}

module.exports = portfolioController;
