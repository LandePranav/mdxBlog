import LatestPosts from "@/components/home/latest-posts";
import { MainNav } from "@/components/home/main-nav";
import { Container } from "@/components/ui/Container";
import TopCategories from "@/components/home/TopCategories";
import PopularPosts from "@/components/home/popular-posts";

export default function Home() {
  return (
    <Container>
      <MainNav />
      <main className="flex flex-col items-start justify-evenly mt-16 md:flex-row">
        <div>
          <LatestPosts />
        </div>
        <div className="h-dvh">
          <div>
            <h1 className="uppercase font-bold mb-4">
              Top categories
            </h1>
            <TopCategories />
          </div>
          <div className="sticky top-0 mt-10">
            <h1 className="uppercase font-bold mb-4">
              Popular Posts
            </h1>
            <PopularPosts />
          </div>
        </div>
      </main>
    </Container>
  );
}
