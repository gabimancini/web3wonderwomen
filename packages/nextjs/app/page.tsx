"use client";

import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Hero } from "~~/components/Hero";
import { Address } from "~~/components/scaffold-eth";
import {Advantages} from "~~/components/Advantages";
const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  return (
    <>
      <Hero />
      <Advantages />
    </>
  );
};

export default Home;
