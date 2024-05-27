import { Button } from "@/components/ui/button";
import { Blog } from "@/types/blog";
import { blogData  } from "@/components/components/Blog/blogData";

const allTags = blogData.map((blog) => blog.tags).flat();

const Tags = (   ) => {
 
    return (
<>
<section
  id="home"
  className="dark:bg-gray-dark relative z-10 overflow-hidden bg-[#060c1f]  pt-[10px] mb-[50px] "
>
  <div className="container">
    <div className="-mx-4 flex flex-wrap">
      <div className="w-full px-4">
        <div
          className="wow fadeInUp mx-auto max-w-[800px]"
          data-wow-delay=".2s"
        >
          <h1 className="mb-5 text-2xl font-bold leading-tight text-black text-white  sm:leading-tight  md:leading-tight">
            Tags

          </h1>

       
            {allTags.map((tag, index) => (
              <Button
                key={index}
                variant="outline"
               
                size="sm"
                className="mb-2 mr-2"
              >
                {tag}
              </Button>
            ))}
       
        

           
           
        
        </div>
      </div>
    </div>
  </div>
 
</section>
</>
    );
}

export default Tags;