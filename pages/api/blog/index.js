import axios from "axios";
import { FUNCTextToSlug } from "helpers/common";
const parseString = require("xml2js").parseString;

export default async function handler(req, res) {
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
        retContents = [],
        category = result.feed["category"],
        retCategory = [],
        ret = {};

      for (const item of contents) {
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

        var entryShort = item["content"][0]._.replace(
          /<[^>]*>?/gm,
          ""
        ).substring(0, 200);
        var entryEnd = entryShort.lastIndexOf(" ");
        var postContent = entryShort.substring(0, entryEnd) + "...";

        var created = new Date(item["published"]);
        var updated = new Date(item["updated"]);

        retContents.push({
          slug: `${FUNCTextToSlug(item["title"][0]._)}`,
          created: `${created.toLocaleString("en-US")}`,
          updated: `${updated.toLocaleString("en-US")}`,
          title: `${item["title"][0]._}`,
          thumbnail,
          postUrl,
          postContent,
        });
      }

      for (const item of category) {
        retCategory.push(`${item["$"]["term"]}`);
      }
      ret = {
        retContents,
        retCategory,
      };

      res.status(200).end(JSON.stringify(ret));
    });
  } catch (error) {
    res.json(error);
    res.status(405).end();
  }
}
