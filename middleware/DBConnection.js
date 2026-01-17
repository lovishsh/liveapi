import mongoose from "mongoose";
mongoose.set("strictQuery",false);
const connectDB=async()=>{
    try {
        const url=process.env.MONGODB_URL;
        await mongoose.connect(url);
        console.log(`connection established`);
    } catch (error) {
        console.log(`connection failed ${error}`);
    }
    
}
export default connectDB;