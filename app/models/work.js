var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var workSchema = mongoose.Schema({
  _id: {
    type:Number,
    required:true,
    unique:true
  },
    details:{
        type:String,
        required:true
    },
    type:{
        type:Number,
        required:true
    },
      portfolio: {
        type: Schema.Types.ObjectId,
        ref: 'portfolio',
        required: true
      }
})

var Work = mongoose.model("Work", workSchema);

module.exports = Work;
