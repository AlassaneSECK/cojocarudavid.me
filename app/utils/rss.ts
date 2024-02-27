interface Post {
  slug: string;
  title: string;
  description: string;
  coverImage: string;
  date: string;
}

import fs from "fs";
import rss from "rss";

export default async function generateRssFeed(allPosts: Post[] = []) {
  try {
    const site_url =
      process.env.NODE_ENV === "production"
        ? "https://cojocarudavid.me"
        : "http://localhost:3000";

    const feedOptions = {
      title: "David Cojocaru's Blog - Personal blog by David Cojocaru",
      description:
        "Personal blog by David Cojocaru. I write about web development, programming, and technology.",
      site_url: site_url,
      feed_url: `${site_url}/rss.xml`,
      image_url: `${site_url}/logo.png`,
      pubDate: new Date().toISOString(),
      language: "en",
      ttl: "60",
      custom_namespaces: {
        media: "http://search.yahoo.com/mrss/",
      },
    };

    const feedInstance = new rss(feedOptions as any);

    allPosts.forEach((post) => {
      feedInstance.item({
        title: post.title,
        description: post.description,
        url: `${site_url}/blog/${post.slug}`,
        date: post.date,
        guid: `${site_url}/blog/${post.slug}`,
        custom_elements: [{ "media:content": { _attr: { url: post.coverImage } } }],
      });
    });

    const rssFeedXml = feedInstance.xml({ indent: true });
    fs.writeFileSync("./public/rss.xml", rssFeedXml);

    console.log("RSS feed generated successfully.");
  } catch (error) {
    console.error("Error generating RSS feed:", error);
  }
}
