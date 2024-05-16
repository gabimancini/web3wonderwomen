"use client";

import Head from "next/head";
import Learn from "./learn/page";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { Advantages } from "~~/components/Advantages";
import { Hero } from "~~/components/Hero";
import { Methodology } from "~~/components/Methodology";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();
  return (
    <>
      {!connectedAddress ? (
        <>
          {" "}
          <Head>
            <link rel="shortcut icon" href="../public/" />
          </Head>
          <Hero />
          <Advantages />
          <Methodology />
        </>
      ) : (
        <Learn />
      )}
    </>
  );
};

export default Home;
