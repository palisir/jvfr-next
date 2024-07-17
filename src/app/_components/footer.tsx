import Container from "@/app/_components/container";

export function Footer() {
  return (
    <footer className="border-t">
      <Container>
        <div className="py-10 flex flex-col lg:flex-row items-center">
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a href="https://nextjs.org/docs/app/building-your-application/routing/layouts-and-templates">
              Read Documentation
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
