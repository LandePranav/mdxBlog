import Link from "next/link";
import { getBlogPosts } from "../utils";
import { Container } from "@/components/ui/Container";
import CardCategory from "@/components/home/cardCategory";
import Header from "@/components/ui/header";
import { notFound } from "next/navigation";

export async function generateStaticParams(){
    let posts = getBlogPosts();
    return posts.map((post) => ({
        category:post.metadata.category
    }));
}

type Params = Promise<{category:string}>;

export default async function Page({params}: {params: Params}) {
    const {category} = await params;
    let posts = getBlogPosts().filter((post) => post.metadata.category === category)
    posts.sort((a,b)=> {
        if(new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) return -1;
        return 1;
    })

    if(!posts.length) notFound();

    return(
        <>
            <Header>
                <Container>
                    <h1 className="title font-semibold text-2xl tracking-wider mt-4 uppercase">
                        {posts[0]?.metadata.category}
                    </h1>
                </Container>
                
            </Header>
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
                    {posts.map((post) =>  (
                        <Link key={post.slug} href={`/blogs/${post.metadata.category}/${post.slug}`}>
                            <CardCategory 
                                title={post.metadata.title}
                                summary={post.metadata.summary}
                                publishedAt={post.metadata.publishedAt}
                            />
                        </Link>
                    ))}
                </div>
            </Container>
        </>
    );
}