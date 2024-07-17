import Link from "next/link";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  slug: string;
};

export function PostPreview({ title, slug }: Props) {
  return (
    <div>
      <Link href={`/posts/${slug}`} aria-label={title}>
        <CoverImage slug={slug} title={title} />{" "}
      </Link>
      <h2 className="text-5xl mb-10 font-medium text-neutral-700 subpixel-antialiased">
        <Link href={`/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h2>
    </div>
  );
}
