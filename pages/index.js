import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";


export default function Home() {
  return (
    <>
      <Head>
        <title>Social links profile</title>
        <meta name="description" content="Social links profile by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Body part of web app */}
      <main className={styles.profileContainer}>
        <div className={styles.profileImage}>
        <Image
          src="/avatar-jessica.jpeg"
          width={500}
          height={500}
          alt="Picture of the author"
        />
        </div>
        {/* About Section - name and location */}
        <div className={styles.aboutSection}>
          <h1 className={styles.fullName}>Jessica Randall</h1>
          <h5 className={styles.location}>London, United Kingdom</h5>
        </div>
      </main>
    </>
  );
}
