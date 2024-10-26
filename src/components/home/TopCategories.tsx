// import { placeholders } from "@/lib/placeholder-data";
import { Button } from "../ui/button";
import Link from "next/link";
import { posts } from "@/lib/constants";

export default function TopCategories() {
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {posts.map((post) => (
                <Button key={post.title} asChild variant={"secondary"} className="hover:scale-110 transition-all">
                    <Link href={`${post.href}`}>
                        {post.title}
                    </Link>
                </Button>
            ))}
        </div>
    );
}