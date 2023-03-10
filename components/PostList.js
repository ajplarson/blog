import Link from "next/link";
import utilStyles from "../styles/utils.module.css";
import PrettyDate from "./PrettyDate";

export default function PostList({ allPostsData }) {
  return (
    <>
      <ul className={utilStyles.list}>
        <li>š Hi, Iām @ajplarson</li>
        <li>
          š Iām interested in solving and working on problems with
          indeterminate solution sets (this takes many forms). Ideally this also
          coincides with contributing to society in some form or another.
        </li>
        <li>
          š± Iām currently learning React Native and Typescript - šļø Iām
          looking to collaborate on anything!
        </li>
        <li>š« How to reach me ...</li>
      </ul>
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
