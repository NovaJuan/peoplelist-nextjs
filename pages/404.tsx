import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import MainLayout from "../layouts/MainLayout";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => router.push("/"), 3000);
  }, []);

  return (
    <>
      <Head>
        <title>Not Found :( | People List</title>
      </Head>
      <MainLayout>
        <div className="not-found">
          <h1>Oops...</h1>
          <h2>That page cannot be found.</h2>
          <p>
            Go back to the{" "}
            <Link href="/">
              <a>Homepage</a>
            </Link>
          </p>
        </div>
      </MainLayout>
    </>
  );
};

export default NotFound;
