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
        <div>
            <h1 className="uppercase font-bold underline underline-offset-4 decoration-gray-700 ">Recently Published</h1>
            {latestPosts.map((post)=> (
                <article key={post.slug} className="text-wrap max-w-md my-10">
                    <Link href={'/#'}>
                        <h3 className="font-bold py-2 leading-5 hover:text-blue-400">
                            {post.metadata.title}
                        </h3>
                    </Link>
                    <p className="leading-8 my-5">
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