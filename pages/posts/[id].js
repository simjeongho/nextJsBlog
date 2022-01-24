import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";
import Date from "../../components/date";
import router, { useRouter } from "next/router";
import { useEffect } from "react";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return {
    paths,
    fallback: true,
  };
}

export default function Post({ postData }) {
  const router = useRouter();
  if (router.isFallback) {
    return (
      <div>
        <header>여긴 없는 주소입니다.</header>
      </div>
    );
  }

  //   useEffect(() => {
  //     const getText = async () => {
  //       const res = await fetch("/api/hello");
  //       const data = await res.json();

  //       alert(data.text);
  //     };
  //     getText();
  //   }, []);
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}
