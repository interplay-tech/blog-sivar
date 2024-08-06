

import { Metadata } from "next";



import ScrollUp from "@/components/components/Common/ScrollUp";
import Hero from "@/components/components/Hero";
import Blog from "@/components/components/Blog";
import Brands from "@/components/components/Brands";




export const metadata: Metadata = {
  title: "Blog",
  description: "This is Home for Startup Nextjs Template",
  // other metadata
};




export default async function Home() {


  return (
    <>
      <ScrollUp />
      <Hero />
   
   
 
    
 
     
      <Blog  />
    
    

     {/*  <Features /> */}
     <Brands />


  
   
     
     
    </>
  );
}
