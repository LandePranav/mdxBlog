"use client";
// import { popularPosts } from "@/lib/placeholder-data";
import Link from "next/link";
import { Icons } from "../ui/icon";
import useSWR from "swr";
import { fetcher, fetchUrl } from "@/lib/utils";
import { SkeletonCard } from "../skeleton/popular_posts_skeleton";

export default function PopularPosts() {
    const {data, error, isLoading} = useSWR(fetchUrl, fetcher);
    console.log(data);
    if(error){
        return(<div>
            Failed To Load
        </div>)
    }
    if(isLoading) return <SkeletonCard />;

    return(
        <ul className="overflow-auto">
            {data?.map((post: {category: string; slug:string; title:string;}) => (
                <Link href={`/blogs/${post.category}/${post.slug}`} key={`${post.title}`}>
                    <li className="flex items-center group gap-2 py-2 w-full cursor-pointer">
                        <Icons.arrowRight className="h-6 w-6 group-hover:translate-x-1 transition-all" />
                        <p>{post.title}</p>
                    </li>
                </Link>
            ))}
        </ul>
    )
}