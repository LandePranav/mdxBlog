import { getBlogPosts } from "@/app/blogs/utils";
import { formatDate } from "@/app/blogs/utils";
import Link from "next/link";

export default function LatestPosts() {
    const latestPosts = getBlogPosts();
    latestPosts.sort((a,b) => {
        if(new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) return -1 ;
        return 1;
    })
    return(
        <div className="font-custom text-[#3c4043]">
            <h1 className="uppercase inline-block font-heading tracking-tight font-bold text-3xl lg:text-4xl underline underline-offset-4 decoration-gray-700 ">Recently Published</h1>
            {latestPosts.map((post)=> (
                <article key={post.slug} className="text-wrap max-w-md my-10 border-b border-gray-400 dark:border-gray-700 border-opacity-30 pb-10 mr-5 ">
                    <Link href={`/blogs/${post.metadata.category}/${post.slug}`}>
                        <h3 className="font-bold text-lg py-2 leading-6 hover:text-blue-400">
                            {post.metadata.title}
                        </h3>
                    </Link>
                    <p className="leading-4 my-5">
                        {post.metadata.summary}
                    </p>
                    <p className="text-sm text-gray-500">
                        {formatDate(post.metadata.publishedAt)}
                    </p>
                </article>
            ))}
        </div>
    );
}