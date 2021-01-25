const mongoose = require('mongoose');

const Schema = mongoose.Schema;

 const TypeSchema = new Schema({
   TYPE :{
      type: String,
      unique: true,
   },
   id_user: mongoose.Schema.Types.ObjectId,
 });

 module.exports = mongoose.model('type', TypeSchema);


