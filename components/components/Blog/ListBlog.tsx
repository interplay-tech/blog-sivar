"use client"

import React from "react";
import { getAllAuthors } from "@/sanity/sanity-utils";

import Image from "next/image";
import Link from "next/link";


import ClientSideRoute from "../ClientSideRoute";
import { urlFor } from '../../../sanity/urlfor';

type Props = {
  posts: Blog[]
}



function ListBlog({ posts }: Props) {
  console.log('hola soy el autor ksaksak', posts)






  return (




    <>

      {posts.map((blog) => (
        <ClientSideRoute key={blog._id} route={`/post/${blog.slug.current}`}>
          <div  >
            <div
              className="wow fadeInUp hover:shadow-two dark:hover:shadow-gray-dark group relative overflow-hidden rounded-sm bg- shadow-one duration-300 bg-[#060c1f] w-full sm:w-2/2 md:w-3/3 p-3  "
              data-wow-delay=".1s"
            >


              <p

                className="relative block aspect-[57/32] w-full"
              >
                <span className="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-[#060c1f] px-4 py-2 text-sm font-semibold capitalize text-white">
                  <p >
                    {blog.categories[0].title}
                   
                  </p>
                </span>




                <Image
                  src={urlFor(blog.mainImage).url()}
                  alt="blog"
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full object-cover rounded-lg"
                />

                <div className="absolute inset-x-0 bottom-0 border-b-4 border-transparent group-hover:border-[#2baae1] transition-all duration-300"></div>
              </p>
              <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
                <h3>
                  <h1

                    className="mb-4 block text-xl font-bold text-black hover:text-slate-300 text-white  sm:text-2xl"
                  >
                    {blog.title}
                  </h1>
                </h3>
                <p className="mb-6  border-body-color border-opacity-10 pb-6 text-base font-medium text-white dark:border-white dark:border-opacity-10">
                  {blog.mainImage.alt}
                </p>

              </div>


            </div>

          </div>


        </ClientSideRoute>
      )
      )}



    </>


  );
};

export default ListBlog;
