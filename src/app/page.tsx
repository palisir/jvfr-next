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
        <section className="grid grid-cols-1 gap-y-20">
          {allPosts.map((post) => (
            <PostPreview key={post.slug} title={post.title} slug={post.slug} />
          ))}
        </section>
      </Container>
    </main>
  );
}
