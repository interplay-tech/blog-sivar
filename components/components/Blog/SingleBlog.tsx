import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";


const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, image, paragraph, author, tags, publishDate } = blog;
  return (
    <>
      <div
        className="wow fadeInUp hover:shadow-two dark:hover:shadow-gray-dark group relative overflow-hidden rounded-sm bg- shadow-one duration-300 bg-[#060c1f]   "
        data-wow-delay=".1s"
      >
        <Link
  href="/blog-details"
  className="relative block aspect-[37/22] w-full"
>
  <span className="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold capitalize text-white">
    {tags[0]}
  </span>
  <Image src={image} alt="image" fill />
  <div className="absolute inset-x-0 bottom-0 border-b-4 border-transparent group-hover:border-[#2baae1] transition-all duration-300"></div>
</Link>
        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
          <h3>
            <Link
              href="/blog-details"
              className="mb-4 block text-xl font-bold text-black hover:text-slate-300 text-white  sm:text-2xl"
            >
              {title}
            </Link>
          </h3>
          <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-white dark:border-white dark:border-opacity-10">
            {paragraph}
          </p>
         
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
