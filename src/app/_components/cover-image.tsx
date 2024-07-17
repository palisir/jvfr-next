"use client";
import Image from "next/image";
import { useState } from "react";
import RevealButton from "./reveal-button";

type Props = {
  title: string;
  slug?: string;
};

const CoverImage = ({ title, slug }: Props) => {
  const [showOg, setShowOg] = useState(false);

  const ogToggle = (): void => {
    setShowOg(!showOg);
  };

  const image = (
    <Image
      src={`/assets/post-img/${slug}.jpg`}
      alt={`Cover Image for ${title}`}
      fill
    />
  );
  return (
    <>
      <div
        className="w-full"
        onMouseEnter={() => setShowOg(true)}
        onMouseLeave={() => setShowOg(false)}
      >
        <img
          className="post-img w-full"
          src={`/assets/post-img/${slug}.jpg`}
          style={{ display: showOg ? "none" : "inherit" }}
        />
        <img
          className="post-img w-full"
          src={`/assets/post-img/${slug}-original.jpg`}
          style={{ display: showOg ? "inherit" : "none" }}
          loading="eager"
        />
      </div>

      <RevealButton altState={showOg} callback={ogToggle} />
    </>
  );
};

export default CoverImage;
