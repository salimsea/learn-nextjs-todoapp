import axios from "axios";
import { FUNCTextToSlug } from "helpers/common";
const parseString = require("xml2js").parseString;

export default async function handler(req, res) {
  const { id } = req.query;
  try {
    const response = await axios
      .get(
        "https://salim-tekno.blogspot.com/feeds/posts/default?start-index=1&max-results=10000"
      )
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return null;
      });

    parseString(response, function (err, result) {
      var contents = result.feed["entry"],
        retContents = [],
        retRecentPost = [],
        ret = {};
      for (const item of contents) {
        var slug = FUNCTextToSlug(item["title"][0]._);
        var thumbnail = `${item["media:thumbnail"][0]["$"]["url"].replace(
          "s72-c",
          "s1600"
        )}`;
        var postUrl = "";
        for (const itemx of item["link"]) {
          if (itemx["$"]["rel"] == "alternate") {
            postUrl = itemx["$"]["href"];
            break;
          }
        }
        var entryShort = item["content"][0]._.replace(
          /<[^>]*>?/gm,
          ""
        ).substring(0, 200);
        var entryEnd = entryShort.lastIndexOf(" ");
        var postContentText = entryShort.substring(0, entryEnd) + "...";
        var postContent = item["content"][0]._;

        entryShort = item["content"][0]._.replace(/<[^>]*>?/gm, "")
          .substring(0, 100)
          .replace(/\&nbsp;/g, "");
        entryEnd = entryShort.lastIndexOf(" ");
        var postContentSmall = entryShort.substring(0, entryEnd) + "...";

        entryShort = item["title"][0]._.replace(/<[^>]*>?/gm, "").substring(
          0,
          50
        );
        entryEnd = entryShort.lastIndexOf(" ");
        var titleSmall = entryShort.substring(0, entryEnd) + "...";
        var created = new Date(item["published"]);
        var updated = new Date(item["updated"]);

        retRecentPost.push({
          slug: `${slug}`,
          created: `${created.toLocaleString("en-US")}`,
          updated: `${updated.toLocaleString("en-US")}`,
          title: `${item["title"][0]._}`,
          titleSmall,
          thumbnail,
          postUrl,
          postContentSmall,
        });

        if (slug === id) {
          retContents.push({
            created: `${created.toLocaleString("en-US")}`,
            updated: `${updated.toLocaleString("en-US")}`,
            title: `${item["title"][0]._}`,
            thumbnail,
            postUrl,
            postContent,
            postContentText,
          });
        }
      }
      ret = {
        item: retContents[0],
        recentPost: retRecentPost,
      };

      res.status(200).end(JSON.stringify(ret));
    });
  } catch (error) {
    res.json(error);
    res.status(405).end();
  }
}
