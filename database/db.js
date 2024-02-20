import mongoose from "mongoose"
// QaR1Q6OYF2zuPBjj
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;    
const PASSWORD = process.env.DB_PASSWORD; 


const Connection =()=>{
    const DB_URI=`mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.ythyz6o.mongodb.net/?retryWrites=true&w=majority`
    try{
mongoose.connect(DB_URI, {useNewUrlParser: true});
console.log('Database connected')
    }catch(error){
console.log('error while connection')
    }
}

export default Connection;