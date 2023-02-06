import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import PostList from "../components/PostList";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../utils/posts";
import TfModel from "../components/TfModel";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <TfModel />
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <PostList allPostsData={allPostsData} />
      </section>
    </Layout>
  );
}
