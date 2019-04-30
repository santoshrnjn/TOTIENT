const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:{
        type:String,
        required:[true,"Name is a Required Field"] //name field is required
    },
    password :{
        type:String
    },
    email:{
        type:String        
    },
   
});

const Users = mongoose.model("users",UserSchema);

module.exports = Users;