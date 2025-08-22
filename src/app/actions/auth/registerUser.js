"use server";

import dbConnect from "@/lib/dbConnect";
import bcrypt from "bcrypt"; // <--- bcrypt import

const collectionNamesObj = {
  userCollection: "users",
};

export const registerUser = async (payload) => {
  const userCollection = dbConnect(collectionNamesObj.userCollection);

  // Password hash
  const saltRounds = 10; // recommended default
  const hashedPassword = await bcrypt.hash(payload.password, saltRounds);

  const result = await userCollection.insertOne({
    name: payload.name,
    email: payload.email,
    password: hashedPassword, // store hashed password
    createdAt: new Date(),
  });

  console.log("User inserted:", result.insertedId);

  return {
    acknowledged: result.acknowledged,
    insertedId: result.insertedId.toString(), // convert ObjectId to string
  };
};
