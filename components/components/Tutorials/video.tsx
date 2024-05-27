"use client";


import {Tutorial} from "@/types/tutorials"
import { Link } from "lucide-react";




const Video = ({tutorials} : {tutorials:Tutorial}   ) => {
  const {title,paragraph,image,video} = tutorials;
     




  return (
    <>
      <div
        className="wow fadeInUp hover:shadow-two dark:hover:shadow-gray-dark group relative overflow-hidden rounded-sm bg- shadow-one duration-300 bg-[#060c1f]   "
        data-wow-delay=".1s"
      >
        <div
         
          className="relative block aspect-[37/12] w-full"
        >
        
          <video src={video}
          poster={image}
          controls


          />
          <div className="absolute inset-x-0 bottom-0 border-b-4 border-transparent group-hover:border-[#2baae1] transition-all duration-300"></div>
        </div>
        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
          <h3
            

              className="mb-4 block text-xl font-bold text-black hover:text-slate-300 text-white  sm:text-2xl"
            >
              {title}
            
          </h3>
          <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-white dark:border-white dark:border-opacity-10">
            {paragraph}
          </p>

        </div>
      </div>
    </>
  );
};

export default Video;
