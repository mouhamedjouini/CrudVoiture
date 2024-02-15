const mongoose = require('mongoose');
const Voiture = new mongoose.Schema({

    name : String ,
    description : String,
 

  




})




module.exports = mongoose.model('voitures',Voiture)