import Cors from "cors";
import { readFileSync } from "fs";
import initMiddleware from "../../../lib/init-middleware";

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ["GET", "POST"],
  })
);

export default async function handler(req, res) {
  await cors(req, res);

  // cache response for 24hours
  res.setHeader("Cache-Control", "max-age=0, s-maxage=86400");

  // Rest of the API logic
  // TODO: move this to a database somewhere
  const file = readFileSync("data/aliases.json", "utf-8");
  const url_table = JSON.parse(file);

  const { alias } = req.query;

  if (!url_table.hasOwnProperty(alias)) {
    return res.status(404).json({ error: `okkar.tk/${alias} not found` });
  }

  return res.status(302).json({ url: url_table[alias] });
}
