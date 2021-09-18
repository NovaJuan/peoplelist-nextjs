import type { InferGetStaticPropsType } from "next";
import Head from "next/head";
import Link from "next/link";
import MainLayout from "../../layouts/MainLayout";
import styles from "../../styles/People.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data: any[] = await res.json();

  return {
    props: {
      people: data,
    },
  };
};

const People = ({ people }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>People Listing | People List</title>
      </Head>
      <MainLayout>
        <h1>People list</h1>
        <ul>
          {people.map((person: any) => (
            <Link key={person.id} passHref href={`/people/${person.id}`}>
              <div className={styles.single}>
                <a>
                  <h3>{person.name}</h3>
                </a>
              </div>
            </Link>
          ))}
        </ul>
      </MainLayout>
    </>
  );
};

export default People;
