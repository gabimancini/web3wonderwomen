"use client";

import type { NextPage } from "next";
import { Advantages } from "~~/components/Advantages";
import { CallToAction } from "~~/components/CallToAction";
import { Hero } from "~~/components/Hero";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Advantages />
      <CallToAction />
    </>
  );
};

export default Home;
