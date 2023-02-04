import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
        <script src="https://connect.facebook.net/en_US/sdk.js" />
      </Head>
      <Image
        src="/images/profile.jpg"
        height={144}
        width={144}
        alt="Profile Picture"
      />
      <h2>
        <Link href="/">Go home</Link>
      </h2>
    </Layout>
  );
}
