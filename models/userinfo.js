const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserAcctSchema = new Schema({
     fname: {
        type: String,
        trim: true,
        required: "First name is Required"
      },
      lname: {
        type: String,
        trim: true,
        required: "Last name is Required"
      },
      email: {
        type: String,
        trim: true,
        required: "Email is Required"
      }, 
      password: {
        type: String,
        trim: true,
        required: "Password is Required"
      },
      chekins:{
        type: Number,
        default:0
       },

      profilepic:{
        type: String,
        trim:true
      },

      checkindate:{
        type:String
      },

      isDeleted:{
        type: Boolean,
        default: false
      }
});


const UserAcct = mongoose.model("UserAcct", UserAcctSchema);

module.exports = UserAcct;