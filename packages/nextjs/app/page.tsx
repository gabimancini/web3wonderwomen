"use client";

import Head from "next/head";
import type { NextPage } from "next";
import { Advantages } from "~~/components/Advantages";
import { Hero } from "~~/components/Hero";
import { Methodology } from "~~/components/Methodology";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="../public/favicon.png" />
      </Head>
      <Hero />
      <Advantages />
      <Methodology />
    </>
  );
};

export default Home;
