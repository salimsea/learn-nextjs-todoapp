// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";

export default async function handler(req, res) {
  try {
    const response = await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return null;
      });
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Cache-Control", "max-age=180000");
    res.end(JSON.stringify(response));
  } catch (error) {
    res.json(error);
    res.status(405).end();
  }
}
