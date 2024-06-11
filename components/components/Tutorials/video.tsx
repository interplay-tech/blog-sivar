"use client";

import React from "react";

import {urlFor, urlForFile } from "@/sanity/urlfor";

type Props = {
  posts: Academy[];
};

const VideoTutorials = ({ posts }: Props) => {
  console.log('hola soy el autor numero dos', posts);
  
  return (
    <>
      <div
        className="wow fadeInUp hover:shadow-two dark:hover:shadow-gray-dark group relative overflow-hidden rounded-sm bg-shadow-one duration-300 bg-[#060C1F]"
        data-wow-delay=".1s"
      >
        {posts.map((posts) => (
          <div key={posts._id}>
            <div className="relative block aspect-[37/12] w-full">
              <video
                controls
                src={urlForFile(posts.video).url()}
            
                poster={urlFor(posts.image).url()}
                className="absolute inset-0 w-full h-full"
              />
              <div className="absolute inset-x-0 bottom-0 border-b-4 border-transparent group-hover:border-[#2BAAE1] transition-all duration-300"></div>
            </div>
            <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
              <h3 className="mb-4 block text-xl font-bold text-white sm:text-2xl hover:text-slate-300">
                {posts.name}
              </h3>
              <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-white dark:border-white dark:border-opacity-10">
                {posts.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

console.log('hola soy el autor del video', urlForFile);

export default VideoTutorials;