import Image from "next/image";
import { Inter } from "next/font/google";
import link from "next/link";
import { useState } from 'react';
import SignUp from "./auth/sign-up";
import CarCarousel from '../components/carousal';
import Header from '../components/header';
import DummyProperty from "@/components/dummy-property";
import About from "./navbar/about";



const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [properties, setProperties] = useState<any[]>([]);
  return (
    <div>
       <Header setProperties={setProperties} />
      <CarCarousel />
      <DummyProperty/>
      <About/>
      <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
    </main>
    </div>
  );
}
