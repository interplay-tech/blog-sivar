"use client";

import React from "react";

import {urlFor} from "@/sanity/urlfor";
import { academy } from "@/sanity/schemaTypes/academy";
import MuxPlayer from "@mux/mux-player-react";
import { Video } from "lucide-react";

type Props = {
  posts: Academy[];
};


const VideoTutorials = ({ posts }: Props) => {
  console.log('hola soy el video file ', posts);
  
  return (
    <>
     
        {posts.map((post) => (
          <div key={post._id}>
             <div
        className="wow fadeInUp hover:shadow-two dark:hover:shadow-gray-dark group relative overflow-hidden rounded-sm bg-shadow-one duration-300 bg-[#060C1F] w-full sm:w-2/2 md:w-3/3 p-3"
        data-wow-delay=".1s"
      >
            <div className="relative block aspect-[37/12] w-full">
              <MuxPlayer

                src= {post.video}
                poster={urlFor(post.mainImage).url()}
                className="absolute inset-0 w-full h-full"
              />

             {/*  <video
              src={post.video}
              poster={urlFor(post.mainImage).url()}
              controls
              

              /> */}
              <div className="absolute inset-x-0 bottom-0 border-b-4 border-transparent group-hover:border-[#2BAAE1] transition-all duration-300"></div>
            </div>
            <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
              <h3 className="mb-4 block text-xl font-bold text-white sm:text-2xl hover:text-slate-300">
                {post.title}
              </h3>
              <p className="mb-6  border-body-color border-opacity-10 pb-6 text-base font-medium text-white dark:border-white dark:border-opacity-10">
                {post.description}
              </p>
              </div>
            </div>
          </div>
        ))}
   
    </>
  );
};



export default VideoTutorials;