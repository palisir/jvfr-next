import Image from "next/image";

export function Intro() {
  return (
    <section className="grid grid-cols-1 md:flex-row items-center md:flex-start my-40">
      <Image
        src={"/assets/logo.png"}
        alt="logo Jeux vidéo français"
        width={1024}
        height={1024}
        className="w-40 h-40 justify-self-center"
      />
      <h1 className="justify-self-center text-5xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8">
        Jeux vidéo en français
      </h1>
    </section>
  );
}
