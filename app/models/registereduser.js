var mongoose = require('mongoose');

var  RegistereduserSchema = mongoose.Schema({
  _studentid: {
    type:Number,
    required:true,
    unique:true
  },
  _id: {
    type:Number,
    required:true,
    unique:true
  },
    name:{
        type:String,
        required:true

    },
    profile_pic:{
        type:String,
        required:true
    },
    password: {
      type:String,
      required:true
    }
})

var Registereduser = mongoose.model("Registereduser", RegistereduserSchema);

module.exports = Registereduser;
