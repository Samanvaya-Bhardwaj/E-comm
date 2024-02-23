import mongoose from 'mongoose';
import colors from 'colors';

const connectDB = async () =>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connected to Mongo DB ${conn.connection.host}`)
    } catch(error){
        console.log(`erro in MongoDB ${error}`.bgRed.white)
    }
};
export default connectDB;