import type { NextPage } from "next";
import Head from "next/head";
import MainLayout from "../layouts/MainLayout";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About | People List</title>
      </Head>
      <MainLayout>
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse officia
          maxime harum eaque impedit libero vero assumenda iure tempora quidem?
        </p>
      </MainLayout>
    </>
  );
};

export default About;
