

import { Metadata } from "next";
import ScrollUp from '../components/components/Common/ScrollUp';
import Hero from '../components/components/Hero/index';
import Brands from '../components/components/Brands/index';
import Blog from './blog/page';


export const metadata: Metadata = {
  title: "Blog",
  description: "This is Home for Startup Nextjs Template",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
   
     
      <Brands />
 
     
      <Blog />
     {/*  <Features /> */}
     
     
    </>
  );
}
