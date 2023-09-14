import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "gymmembership",
    })
    .then(() => console.log("Database Connected"))
    .catch((e) => console.log(e));
};
