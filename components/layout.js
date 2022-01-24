import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "jeong ho & daeun";
export const siteTitle = "jeongho's album by next js";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <section>
              <Image
                priority
                src="/images/profiles.jpg"
                className={utilStyles.borderCircle}
                height={144}
                width={144}
                alt={name}
              />
              <Image
                priority
                src="/images/daeun.jpg"
                className={utilStyles.borderCircle}
                height={144}
                width={144}
                alt={name}
              />
            </section>
            <section>
              <h1>{name}</h1>
            </section>
            <section className={utilStyles.headingMd}>
              <p>
                인하대학교 정보통신공학과 4학년 React 와 Nextjs를 배우고 있는
                junior front-end developer
                <br />
                인하대학교 경영학과를 졸업한 후 대 크라운 제과의 회계를 담당하고
                있는 junior accountant
              </p>
              <p>여기는 정호 다은의 여행일지를 기록해놓는 곳입니다.</p>
            </section>
            <nav className={styles.navbar}>
              <li className={styles.navbarList}>
                <Link href="/album">
                  <Image
                    src="/logo/album.png"
                    width={30}
                    height={30}
                    alt="album"
                  />
                </Link>
                <Link href="/album">
                  <button className={styles.navbarItem}>앨범</button>
                </Link>
              </li>
              <li className={styles.navbarList}>
                <Link href="/blog">
                  <Image
                    src="/logo/blog.png"
                    width={30}
                    height={30}
                    alt="album"
                  />
                </Link>
                <Link href="/blog">
                  <button className={styles.navbarItem}>블로그</button>
                </Link>
              </li>

              <li className={styles.navbarList}>
                <Link href="/suri">
                  <Image
                    src="/logo/happy.png"
                    width={30}
                    height={30}
                    alt="suri"
                  />
                </Link>

                <Link href="/suri">
                  <button className={styles.navbarItem}>수리</button>
                </Link>
              </li>
            </nav>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <section>
                  <Image
                    priority
                    src="/images/profiles.jpg"
                    className={utilStyles.borderCircle}
                    height={144}
                    width={144}
                    alt={name}
                  />
                  <Image
                    priority
                    src="/images/daeun.jpg"
                    className={utilStyles.borderCircle}
                    height={144}
                    width={144}
                    alt={name}
                  />
                </section>
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← 홈 화면</a>
          </Link>
        </div>
      )}
      <footer className={styles.footer}>
        <li>
          <Image
            src="/logo/instagram.png"
            height={30}
            width={30}
            alt="instagram"
          />
          <Link href="https://blog.naver.com/simjeongho0">
            <a>정호 블로그</a>
          </Link>
        </li>
        <li>
          <Image
            src="/logo/instagram.png"
            height={30}
            width={30}
            alt="instagram"
          />
          <Link href="https://blog.naver.com/wkrekdms">
            <a>다은이 블로그</a>
          </Link>
        </li>
      </footer>
    </div>
  );
}
