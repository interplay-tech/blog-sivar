import Breadcrumb from "../Common/Breadcrumb";
import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import {blogData} from "./blogData";
import React from "react";




const Blog = () => {

  const filteredActuality = blogData.filter(blog => blog.category.includes("Actualidad"));
  

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
          <div className="-mx-4 flex flex-wrap justify-center">
            {filteredActuality.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlog blog={blog} />
                
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
