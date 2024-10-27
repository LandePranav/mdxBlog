import { posts } from "@/lib/constants";
import { getBlogPosts } from "./blogs/utils"

export const baseUrl  = "https://xeronin.vercel.app"

export default async function sitemap() {
    let blogs = getBlogPosts().map((post) => ({
        url: `${baseUrl}/blogs/${post.metadata.category}/${post.slug}`,
        lastModified: post.metadata.publishedAt,
    }));

    let routes = posts.map((route) => ({
        url: `${baseUrl}${route.href}`,
        lastModified: new Date().toISOString().split("T")[0],
    }))

    return [...blogs, ...routes];
}