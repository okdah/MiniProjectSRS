var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var PortofolioSchema = mongoose.Schema({
  _id: {
    type:Number,
    required:true,
    unique:true
  },
    registereduser: {
      type: Schema.Types.ObjectId,
      ref: 'registereduser',
      required: true
    }
})

var Portofolio = mongoose.model("Portofolio", PortofolioSchema);

module.exports = Portofolio;
