import mongoose from "mongoose";

const mongoConnStr = `${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}`
const server = mongoConnStr;
const database = process.env.DATABASE_NAME;


export const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb://${server}/${database}`)

  } catch (err: any) {
    console.log(err)
  }
}

