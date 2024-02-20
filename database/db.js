import mongoose from "mongoose"

import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;    
// const PASSWORD = process.env.DB_PASSWORD; 


const Connection =()=>{
    const DB_URI= process.env.DB_USERNAME
    try{
mongoose.connect(DB_URI, {useNewUrlParser: true});
console.log('Database connected')
    }catch(error){
console.log('error while connection')
    }
}

export default Connection;