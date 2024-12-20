import { baseUrl } from "../sitemap";
import { getBlogPosts } from "../blogs/utils";

export async function GET() {
    let allBlogs = getBlogPosts();
    const itemsXml = allBlogs.sort((a,b)=>{
        if(new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)){
            return -1;
        }
        return 1;
    }).map((post)=> `
        <item>
            <title>
                ${post.metadata.title}
            </title>
            <link>
                ${baseUrl}/blogs/${post.metadata.category}/${post.slug}
            </link>
            <description>
                ${post.metadata.summary || ""}
            </description>
            <pubDate>
                ${new Date(post.metadata.publishedAt).toUTCString()}
            </pubDate>
        </item>
    `).join("/n");

    const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
            <rss version="2.0">
                <channel>
                    <title>Ronin's Lore</title>
                    <link>${baseUrl}</link>
                    <description>This is my Technical Blog Rss Feed</description>
                    ${itemsXml}
                </channel>
            </rss>
    `;
    return new Response(rssFeed, {
        headers: {
            "Content-Type":"text/xml",
        },
    });
}