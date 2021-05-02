import Cors from "cors";
import db from "../../../lib/db";
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

  const { alias } = req.query;

  const result = await db.collection("alias").doc(alias).get();

  try {
    const { url } = result.data();
    return res.status(302).json({ url });
  } catch (error) {
    return res.status(404).json({ error: `okkar.tk/${alias} not found` });
  }
}
