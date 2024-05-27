

import { Metadata } from "next";
import ScrollUp from '../components/components/Common/ScrollUp';
import Hero from '../components/components/Hero/index';
import Brands from '../components/components/Brands/index';
import Blog from '../components/components/Blog/index';
import Video from '../components/components/Tutorials/video';



import Academy from "@/components/components/Tutorials/academy";



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
   
   
      <Academy />
    
 
     
      <Blog />
    
     {/*  <Features /> */}
    {/*  <Brands /> */}
  
   
     
     
    </>
  );
}
