import { popularPosts } from "@/lib/placeholder-data";
import Link from "next/link";
import { Icons } from "../ui/icon";

export default function PopularPosts() {
    return(
        <ul className="overflow-auto">
            {popularPosts.map((post,index) => (
                <Link href={'/blogs'} key={`${post.title} + ${index}`}>
                    <li className="flex items-center group gap-2 py-2 w-full cursor-pointer">
                        <Icons.arrowRight className="h-6 w-6 group-hover:translate-x-1 transition-all" />
                        <p>{post.title}</p>
                    </li>
                </Link>
            ))}
        </ul>
    )
}