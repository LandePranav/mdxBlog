import { Container } from "@/components/ui/Container";
import { getPrivacyPolicy } from "../blogs/utils";
import { MainNav } from "@/components/home/main-nav";
import CustomMDX from "@/components/mdx";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "This page explains the privacy settings of the site."
}

export default function Page() {
    let post = getPrivacyPolicy().find(
        (post) => post.slug === "privacy-policy"
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