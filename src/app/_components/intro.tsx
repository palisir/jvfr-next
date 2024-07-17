import Image from "next/image";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:flex-start mt-32 mb-32 space-x-5">
      <Image
        src={"/assets/logo.png"}
        alt="logo Jeux vidéo français"
        width={1024}
        height={1024}
        className="w-20 h-20"
      />
      <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8">
        Jeux vidéo en français
      </h1>
    </section>
  );
}
