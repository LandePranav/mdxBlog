import Header from "@/components/ui/header";
import { formatDate, getBlogPosts } from "../../utils";
import { BreadcrumbWithCustomSeparator } from "@/components/home/breadCrumb";
import { Container } from "@/components/ui/Container";
import CustomMDX from "@/components/mdx";
import { notFound } from "next/navigation";
import ReportViews from "@/components/ReportViews";
import { url } from "inspector";
import { baseUrl } from "@/app/sitemap";

export async function generateStaticParams(){
    let posts = getBlogPosts();
    return posts.map((post) => ({
        category:post.metadata.category,
        slug:post.slug
    }));
}

type Params = Promise<{category:string;slug:string;}>

export async function generateMetadata({params}: {params: Params}){
    let {category, slug} = await params;
    const post = getBlogPosts().find((post)=> post.slug === slug) ;
    if(!post) return;
    let {title, publishedAt:publishedTime, summary:description, image} = post.metadata;
    let ogImage = image ? image : `${baseUrl}/og?title=${encodeURIComponent(title)}`

    return{
        title,
        description,
        openGraph: {
            title,
            description,
            type: "article",
            publishedTime,
            url: `${baseUrl}/blog/${post?.metadata.category}/${post?.slug}`,
            images: [
                {url:ogImage}
            ]
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [ogImage],
        }
    }
}

export default async function Page({params}: {params: Params}) {
    const {category, slug} = await params;
    const post = getBlogPosts().find((post)=> post.slug === slug) ;

    if(!post) notFound();

    return(
        <>
            <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/blog/${post.metadata.category}/${post.slug}`,
            author: {
              "@type": "Person",
              name: "Ronin's Lore",
            },
          }),
        }}
      />
            <ReportViews category={post.metadata.category} title={post.metadata.title} slug={post.slug}  />
            <Header>
                <Container>
                    <BreadcrumbWithCustomSeparator category={category} slug={slug} />
                    <h1 className="title font-semibold text-2xl tracking-tighter mt-4">
                        {post?.metadata.title}
                    </h1>
                    <div className="flex justify-between items-center mt-2 mb-4 text-sm">
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
                            {formatDate(post?.metadata.publishedAt)}
                        </p>
                    </div>
                </Container>
            </Header>
            <Container>
                <article className="prose">
                    <CustomMDX source={post?.content} />
                </article>
            </Container>
        </>
        
    );
}