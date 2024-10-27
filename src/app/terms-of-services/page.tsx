import { Container } from "@/components/ui/Container";
import { getTermsOfServices } from "../blogs/utils";
import { MainNav } from "@/components/home/main-nav";
import CustomMDX from "@/components/mdx";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms Of Use",
    description: "This page explains the terms of use of the site."
}

export default function Page() {
    let post = getTermsOfServices().find(
        (post) => post.slug === "terms-of-services"
    );
    return(
        <Container>
            <MainNav />
            <article className="prose">
                <CustomMDX  source={post?.content} />
            </article>
        </Container>
    );
}