import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("Connected to MongoDB");
    });

    // 连接数据库
    await mongoose.connect(`${process.env.MONGO_URI}/chat-app`);
  } catch (error) {
    console.log(error);
  }
};
