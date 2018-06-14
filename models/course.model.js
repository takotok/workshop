var mongoose = require("mongoose");
var schema = mongoose.Schema;

var courseschema = new schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    createAt :{
        type:Date,
        required:true,
        defult:Date.now
    }
})

module.exports=mongoose.model('course', courseschema);