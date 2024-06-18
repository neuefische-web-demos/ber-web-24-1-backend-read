import mongoose from "mongoose";

const { Schema } = mongoose;

const jokeSchema = new Schema({
  // joke: String,
  joke: { type: String, required: true },
});

// this is a model... this will be for doing CRUD operations
const Joke = mongoose.models.Joke || mongoose.model("Joke", jokeSchema);

export default Joke;
