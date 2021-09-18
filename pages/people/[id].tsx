import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import Head from "next/head";
import MainLayout from "../../layouts/MainLayout";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data: any[] = await res.json();

  return {
    paths: data.map((person) => ({ params: { id: person.id.toString() } })),
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<{ id: string }>) => {
  const id = params?.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  return {
    props: {
      person: data,
    },
  };
};

const Person = ({ person }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>Details Page | People Listing</title>
      </Head>
      <MainLayout>
        <h1>{person.name}</h1>
        <p>{person.email}</p>
        <p>{person.website}</p>
        <p>{person.address.city}</p>
      </MainLayout>
    </>
  );
};

export default Person;
