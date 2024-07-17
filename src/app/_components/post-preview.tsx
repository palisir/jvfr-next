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
      <div className="mb-8">
        <Link href={`/posts/${slug}`} aria-label={title}>
          <CoverImage slug={slug} title={title} />{" "}
        </Link>
      </div>
      <h2 className="text-5xl font-medium text-neutral-800 subpixel-antialiased">
        <Link href={`/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h2>
    </div>
  );
}
