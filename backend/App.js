const express=require('express');
const app=express();
const path=require('path');
const dotenv=require('dotenv');
dotenv.config({path:path.join(__dirname,'config','config.env')});
const connectDatabase=require('./config/connectDatabase');


const getbook=require('./router/router');
connectDatabase();

app.use(express.json());
app.use('/api/v1',getbook);

app.listen(8000,()=>{
    console.log(`Server is running on port is 8000`);
});