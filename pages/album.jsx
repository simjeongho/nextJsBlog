import Layout from "../components/layout";
import { getSortedAlbumData } from "../lib/album";
import Date from "../components/date";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";

export async function getStaticProps() {
  const albumList = getSortedAlbumData();

  return {
    props: {
      albumList,
    },
  };
}

export default function Album({ albumList }) {
  return (
    <Layout>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Our Trip</h2>
        <ul className={utilStyles.list}>
          {albumList.map(({ id, title, date }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/album/${id}`}>
                <a>{title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
