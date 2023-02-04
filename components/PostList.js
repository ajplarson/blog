import Link from "next/link";
import utilStyles from "../styles/utils.module.css";
import PrettyDate from "./PrettyDate";

export default function PostList({ allPostsData }) {
  return (
    <>
      <h2 className={utilStyles.headingLg}>Blog</h2>
      <ul className={utilStyles.list}>
        {allPostsData &&
          allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <PrettyDate dateString={date} />
              </small>
            </li>
          ))}
      </ul>
    </>
  );
}
