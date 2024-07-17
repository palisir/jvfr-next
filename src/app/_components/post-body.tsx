import Link from "next/link";
import cn from "classnames";
import markdownStyles from "./markdown-styles.module.css";

type Props = {
  content: string;
  refUrl: string;
  originalTitle: string;
};

export function PostBody({ content, originalTitle, refUrl }: Props) {
  return (
    <div className={cn("mt-8", "mx-auto", markdownStyles["markdown"])}>
      Original :{" "}
      <Link className="text-blue-600 visited:text-purple-600" href={refUrl}>
        {originalTitle}
      </Link>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
