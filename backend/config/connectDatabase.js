const mongoose=require('mongoose');

const connectDatabase=()=>{
    mongoose.connect(process.env.URL).then(()=>{
        console.log("MongoDB connected Successfully")
    });
}

module.exports=connectDatabase;