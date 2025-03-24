const mongoose =require('mongoose');

const book=new mongoose.Schema({
    title:String,
    author:String,
    price:String,
    publishyear:String
});

const bookschema=mongoose.model('Book',book);
module.exports=bookschema;