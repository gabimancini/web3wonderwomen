"use client";

import type { NextPage } from "next";
import { Advantages } from "~~/components/Advantages";
import { Hero } from "~~/components/Hero";
import { Methodology } from "~~/components/Methodology";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Advantages />
      <Methodology />
    </>
  );
};

export default Home;
