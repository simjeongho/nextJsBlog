import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Date from "../components/date";
import { getSortedAlbumData } from "../lib/album";

export async function getStaticProps() {
  const allAlbumData = getSortedAlbumData();
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allAlbumData,
      allPostsData,
    },
  };
}

export default function Home({ allPostsData, allAlbumData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
    </Layout>
  );
}
