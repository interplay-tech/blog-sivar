

import { Metadata } from "next";
import Breadcrumb from '../../components/components/Common/Breadcrumb';
import SingleBlog from '../../components/components/Blog/SingleBlog';
import blogData from '../../components/components/Blog/blogData';

export const metadata: Metadata = {
  title: "Blog Page | Free Next.js Template for Startup and SaaS",
 
  // other metadata
};

const Blog = () => {
  return (
    <>
      <Breadcrumb
        pageName="Destacados"/>

      <section className="pb-[20px] ">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {blogData.map((blog) => (
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

      <Breadcrumb
        pageName="Criptos"/>

      <section className="pb-[120px] ">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {blogData.map((blog) => (
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
    </>
  );
};

export default Blog;
