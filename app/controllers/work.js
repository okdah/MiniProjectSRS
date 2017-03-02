"use strict";

let Work = require('../models/Work');

let workController = {

    getAllworks:function(req, res){

        Work.find(function(err, works){
            if(err)
                return err.message;
            else
                return work;
        })
    },
    getwork:function(req, res){

        Work.find({ "portfolio": ObjectId(req.id)}, function(err, work) {
          if(err)
              return err.message;
          else
              return work;
        })
    },

    creatework:function(req, res){
        let work = new Work();
        work.details = req.details
        work.type = req.type
        work.portfolio = req.portfolio

        work.save(function(err, work){
            if(err){
                return err.message
                console.log(err);
            }
            else{

                console.log(work);
                return work;
            }
        })
    }
}

module.exports = workController;
