import { getSortedPostsData } from "../lib/posts";
import Layout from "../components/layout";
import Link from "next/link";
export async function getStaticProps() {
  const blogList = getSortedPostsData();

  return {
    props: {
      blogList,
    },
  };
}

export default function Blog({ blogList }) {
  return (
    <Layout>
      <section>
        <ul>
          {blogList.map(({ id, title, date }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
