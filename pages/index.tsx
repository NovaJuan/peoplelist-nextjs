import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import MainLayout from "../layouts/MainLayout";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | People List</title>
      </Head>
      <MainLayout>
        <h1 className={styles.title}>Home</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
          placeat saepe asperiores, itaque consectetur reiciendis voluptas.
          Fugiat recusandae aspernatur id.
        </p>
        <Link href="/people">
          <a className={styles.btn}>See People listing</a>
        </Link>
      </MainLayout>
    </>
  );
};

export default Home;
