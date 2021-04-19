import Cors from "cors";
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

  // Rest of the API logic
  // TODO: move this to a database somewhere
  const url_table = {
    linkedin: "https://www.linkedin.com/in/okarmin",
    github: "https://github.com/OkkarMin",
    telegram: "https://t.me/okarmax",
  };

  const { alias } = req.query;

  if (!url_table.hasOwnProperty(alias)) {
    return res.json({ error: `okkar.tk/${alias} not found` });
  }

  return res.json({ url: url_table[alias] });
}
