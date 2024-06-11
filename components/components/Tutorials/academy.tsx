"use client";



import Breadcrumb from "@/components/components/Common/Breadcrumb";
import VideoTutorials from "@/components/components/Tutorials/video";
import React, { useEffect, useState } from "react";

import { tutorials } from "@/components/components/Tutorials/tutorialsData";
import SectionTitle from "../Common/SectionTitle";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";


const query = groq
`*[_type == "author"]{
  
  name,
  slug,
  image,
  bio,
  video: video.asset->url
} | order(name)


  `




const Academy = ( ) => {


  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await client.fetch(query);
      setAuthors(result);
    };

    fetchData();
  }, []);





  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28"
      id="video"
    >

      <div className="container">
        <SectionTitle
            title="Academia"
            paragraph="Aprende a a apostar con los mejores "
            center
        />




        <Breadcrumb pageName=""
                pageLink="/tutorials" 
            
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          <div className="w-full px-4">
            <div className="wow fadeInUp mx-auto max-w-[670px] overflow-hidden rounded-md" data-wow-delay=".15s">
              <div className="relative aspect-[67/40] items-center justify-center">
              
                
                
                  
                        <VideoTutorials posts={authors}  />
                   


            

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academy;
