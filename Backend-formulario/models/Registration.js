const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Esquema de registro
const registrationSchema= new Schema ({
    name: {
        type :String,
        require:true,
    },
    email: {
        type:String,
        require:true,
        unique: true,
    },
    password: {
        type:String,
        require:true,

    },

});

module.exports = mongoose.model('Registration', registrationSchema);
