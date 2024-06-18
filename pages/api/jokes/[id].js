// import { jokes } from "../../../lib/data.js";

import dbConnect from "../../../db/connect.js";
import Joke from "../../../db/models/Joke.js";

export default async function handler(request, response) {
  const { id } = request.query;

  await dbConnect();

  // const joke = jokes.find((joke) => joke.id === id);

  const joke = await Joke.findById(id);

  console.log("joke on the server", joke);

  if (!joke) {
    return response.status(404).json({ status: "Not Found" });
  }

  response.status(200).json(joke);
}
