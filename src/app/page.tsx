import LatestPosts from "@/components/home/latest-posts";
import { MainNav } from "@/components/home/main-nav";
import { Container } from "@/components/ui/Container";
import TopCategories from "@/components/home/TopCategories";
import PopularPosts from "@/components/home/popular-posts";

export default function Home() {
  return (
    <Container>
      <MainNav />
      <main className="flex flex-col items-start justify-evenly mt-10 md:mt-16 md:flex-row">
        <div className="w-[80%] mx-auto md:w-2/3 md:mx-0">
          <LatestPosts />
        </div>
        <div className="h-dvh w-[80%] mx-auto md:w-1/3">
          <div>
            <h1 className="uppercase font-bold mb-10 md:mb-4">
              Top categories
            </h1>
            <TopCategories />
          </div>
          <div className="sticky top-0 mt-20">
            <h1 className="uppercase font-bold mb-8 md:mb-4">
              Popular Posts
            </h1>
            <PopularPosts />
          </div>
        </div>
      </main>
    </Container>
  );
}
