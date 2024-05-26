"use client";

import Head from "next/head";
import type { NextPage } from "next";
import { Advantages } from "~~/app/home/Advantages";
import { Hero } from "~~/app/home/Hero";
import { Methodology } from "~~/app/home/Methodology";

const Home: NextPage = () => {
  return (
    <>
      <>
        {" "}
        <Head>
          <link rel="shortcut icon" href="../public/ico.ico" />
        </Head>
        <Hero />
        <Advantages />
        <Methodology />
      </>
    </>
  );
};

export default Home;
