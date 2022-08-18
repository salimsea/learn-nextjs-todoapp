import axios from "axios";
import { FUNCTextToSlug } from "helpers/common";
const parseString = require("xml2js").parseString;

export default async function handler(req, res) {
  const { id } = req.query;
  try {
    const response = await axios
      .get("https://salim-tekno.blogspot.com/feeds/posts/default")
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return null;
      });

    parseString(response, function (err, result) {
      var contents = result.feed["entry"],
        retContents = [];
      for (const item of contents) {
        var slug = FUNCTextToSlug(item["title"][0]._);
        if (slug === id) {
          var postUrl = "";
          for (const itemx of item["link"]) {
            if (itemx["$"]["rel"] == "alternate") {
              postUrl = itemx["$"]["href"];
              break;
            }
          }

          var thumbnail = `${item["media:thumbnail"][0]["$"]["url"].replace(
            "s72-c",
            "s1600"
          )}`;

          var postContent = item["content"][0]._;
          var created = new Date(item["published"]);
          var updated = new Date(item["updated"]);

          retContents.push({
            created: `${created.getDate()} - ${created.getMonth()} - ${created.getFullYear()}`,
            updated: `${updated.getDate()} - ${updated.getMonth()} - ${updated.getFullYear()}`,
            title: `${item["title"][0]._}`,
            thumbnail,
            postUrl,
            postContent,
          });
        }
      }

      res.status(200).end(JSON.stringify(retContents[0]));
    });
  } catch (error) {
    res.json(error);
    res.status(405).end();
  }
}
