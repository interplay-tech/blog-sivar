"use client"

import { groq } from "next-sanity";
import Breadcrumb from "../Common/Breadcrumb";
import SectionTitle from "../Common/SectionTitle";


import React, { useEffect, useState } from "react";

import { client } from "@/sanity/lib/client";
import ListBlog from "./ListBlog";


const query = groq 
`*[_type == "blog"]{
  ...,
  author->,
  categories[]->
} | order(publishedAt desc) 
`





const Blog = ( ) => {

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
      id="blog"
      className="bg-gray-light  py-1 md:py-2 lg:py-2"
    >
      <div className="container">
        <SectionTitle
          title="Lo ultimo en noticias"
          paragraph="Encuentra las noticias mas recientes de la actualidad en el mundo de los deportes."
          center
        />

<Breadcrumb
        pageName=""
        pageLink="/blog"
        
        />

      <section className="pb-[20px] ">
        <div className="container">
          <div className="-mx-4  justify-center">
          
              <div
                
                className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3"
              >
                <ListBlog  posts={posts} />
                
              </div>
           
          </div>

        
        </div>
      </section>

      </div>
    </section>
  );
};

export default Blog;
