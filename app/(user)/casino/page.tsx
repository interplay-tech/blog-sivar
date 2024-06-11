"use client"

import { groq } from "next-sanity";
import Breadcrumb from "../../../components/components/Common/Breadcrumb";
import SectionTitle from "../../../components/components/Common/SectionTitle";

import React, { useEffect, useState } from "react";

import { client } from "@/sanity/lib/client";
import SingleBlog from "../../../components/components/Blog/ListBlog";


const query = groq 
`*[_type == "blog" && "casino" in categories[]->title]{
  ...,
  author->,
  categories[]->
} | order(publishedAt desc) 
`





const Casino = ( ) => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await client.fetch(query);
      setPosts(result);
    };

    fetchData();
  }, []);
  
  


  return (
    <section
      id="Deportes"
      className="bg-gray-light relative z-10  py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Puedes ganar demasiado"
          paragraph="Encuentra las noticias mas recientes de la actualidad en el mundo de los deportes."
          center
        />



      <section className="pb-[20px] ">
        <div className="container">
          <div className="-mx-4  justify-center">
          
              <div
                
                className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3"
              >
                <SingleBlog  posts={posts} />
                
              </div>
           
          </div>

        
        </div>
      </section>

      </div>
    </section>
  );
};

export default Casino;
