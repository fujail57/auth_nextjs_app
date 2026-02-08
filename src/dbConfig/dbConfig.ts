import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDb connected successfully");
    });

    connection.on("error", (error) => {
      console.log(
        `MongoDb connections error, Please make sure mongoDb is running. ${error}`,
      );
      process.exit();
    });
  } catch (error) {
    console.log({ message: "Mongo connection faild", error });
  }
}
