// import { jokes } from "../../../lib/data.js";

import dbConnect from "../../../db/connect.js";
import Joke from "../../../db/models/Joke.js";

export default async function handler(request, response) {
  // step 1 connect to db
  await dbConnect();

  // step 2 read from db
  const jokes = await Joke.find();
  console.log("jokes on the server: ", jokes);

  // step 3 send back response

  response.status(200).json(jokes);
}
