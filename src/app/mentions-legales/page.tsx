import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";
import Header from "../_components/header";

export default function Index() {
  return (
    <main>
      <Container>
        <Header />
        <section className="grid grid-cols-1">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8">
            Mentions Légales
          </h1>
          <div className="gap-y-10">
            <p>Ce site est édité à titre personnel.</p>
            <p>
              Ce site est hébergé par :<br />
              <strong>Vercel Inc.</strong>
              <br />
              340 S Lemon Ave #4133, Walnut, CA 91789, USA
              <br />
              <a href="https://www.vercel.com" target="_blank">
                https://www.vercel.com
              </a>
            </p>
          </div>
        </section>
      </Container>
    </main>
  );
}
