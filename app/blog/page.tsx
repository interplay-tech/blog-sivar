
import SingleBlog from "@/components/components/Blog/SingleBlog";
import { blogData } from "@/components/components/Blog/blogData";

import SectionTitle from "@/components/components/Common/SectionTitle";
import React from "react";




const Blog = () => {


  return (
    <section
      id="blog"
      className="relative z-10 py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Lo ultimo en noticias"
          paragraph="Encuentra las noticias mas recientes de la actualidad en el mundo de los deportes."
          center
        />



      <section className="pb-[20px] pt-[70px] ">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {blogData.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlog blog={blog}  />
                
              </div>
            ))}
          </div>

        
        </div>
      </section>

      </div>
    </section>
  );
};

export default Blog;
