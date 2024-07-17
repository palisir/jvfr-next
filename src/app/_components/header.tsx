import { BLOG_TITLE } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="grid grid-cols-1 space-x-3 mt-10 mb-20">
        <Image
          src={"/assets/logo.png"}
          alt="logo Jeux vidéo français"
          width={1024}
          height={1024}
          className="w-10 h-10 justify-self-center"
        />
        <h2 className="justify-self-center text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight">
          <Link href="/" className="hover:underline">
            {BLOG_TITLE}
          </Link>
        </h2>
      </div>
    </>
  );
};

export default Header;
