import { sanityFetch } from "@/lib/sanity.client";
import { postsQuery } from "@/lib/sanity.query";
import type { PostType } from "@/types";
 
export default async function sitemap({ res }) {
    const site_url =
      process.env.NODE_ENV === "production"
        ? "https://cojocarudavid.me"
        : "http://localhost:3000";
  const posts: PostType[] = await sanityFetch({
    query: postsQuery,
    tags: ["Post"],
  });
  return posts.map((product) => ({
    url: `${site_url}/blog/${product.slug}`,
    lastModified: product.date,
    priority: 0.8,
  }))
}