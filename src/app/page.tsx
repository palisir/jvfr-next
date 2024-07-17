import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";
import { getAllPosts } from "@/lib/api";
import { PostPreview } from "./_components/post-preview";

export default function Index() {
  const allPosts = getAllPosts();

  return (
    <main>
      <Container>
        <Intro />
        <section>
          <div className="grid grid-cols-1 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
            {allPosts.map((post) => (
              <PostPreview
                key={post.slug}
                title={post.title}
                slug={post.slug}
              />
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}
