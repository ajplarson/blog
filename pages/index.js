import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <ul className={utilStyles.list}>
          <li>👋 Hi, I’m @ajplarson</li>
          <li>
            👀 I’m interested in solving and working on problems with
            indeterminate solution sets (this takes many forms). Ideally this
            also coincides with contributing to society in some form or another.
          </li>
          <li>
            🌱 I’m currently learning React Native and Typescript - 💞️ I’m
            looking to collaborate on anything!
          </li>
          <li>📫 How to reach me ...</li>
        </ul>

        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
