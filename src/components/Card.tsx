import Datetime from "./Datetime";
import type { Frontmatter } from "src/types";

export interface Props {
  href?: string;
  post: Frontmatter;
  secHeading?: boolean;
}

const styles = {
  cardContainer: "my-6",
  titleLink:
    "text-skin-accent font-medium text-lg underline-offset-4 decoration-dashed focus-visible:no-underline focus-visible:underline-offset-0 inline-block",
  titleHeading: "font-medium text-lg decoration-dashed hover:underline",
};

const height = 100;

export default function Card({ href, post, secHeading = true }: Props) {
  return (
    <a href="# w-full">
      <div
        className={`flex items-center overflow-clip space-x-2 h-[${height}px] rounded-xl border border-gray-200 shadow-sm`}
      >
        <img
          className={`object-cover h-[100px] w-[100px]`}
          src={post.ogImage}
          alt={post.title}
        />
        <li className={styles.cardContainer}>
          <a href={href} className={styles.titleLink}>
            {secHeading ? (
              <h2 className={styles.titleHeading}>{post.title}</h2>
            ) : (
              <h3 className={styles.titleHeading}>{post.title}</h3>
            )}
          </a>
          <Datetime datetime={post.datetime} />
          <p>{post.description}</p>
        </li>
      </div>
    </a>
  );
}
