import Container from "@/app/_components/container";

export function Footer() {
  return (
    <footer className="bg-neutral-100 border-t mt-32">
      <Container>
        <div className="text-neutral-700 font-serif text-base py-5 flex align-middle justify-center space-x-16">
          <div className="flex justify-center">
            <a href="mailto:contact@paulalisir.com">Contact</a>
          </div>
          <div className="flex justify-center">
            <a href="/mentions-legales">Mentions Légales</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
