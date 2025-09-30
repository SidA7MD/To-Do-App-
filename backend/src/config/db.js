import mongoose from "mongoose";

export const conn = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("CONNECTED 😊");
    }catch(error){
        console.error("DISCONNECTED 😔",error);
        process.exit(1);
    }
}