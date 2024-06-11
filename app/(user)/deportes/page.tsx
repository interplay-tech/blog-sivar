"use client"

import { groq } from "next-sanity";

import SectionTitle from "../../../components/components/Common/SectionTitle";

import React, { useEffect, useState } from "react";

import { client } from "@/sanity/lib/client";
import SingleBlog from "../../../components/components/Blog/ListBlog";
import Tags from "@/components/components/Tags";
import { Button } from "@/components/ui/button";
import ListBlog from "../../../components/components/Blog/ListBlog";
import subCategory from "@/sanity/schemaTypes/subCategory";


const query = groq 
`*[_type == "blog" && "deportes" in categories[]->title]{
  ...,
  author->,
  categories[]->,
  subCategory[]->,
 
} | order(publishedAt desc) 
`





const Deportes = () => {
  const [posts, setPosts] = useState<Blog[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Blog[]>([]);
  const [listsubcategory, setListsubcategory] = useState<{ title: string }[]>([]);
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await client.fetch(query) as Blog[];
      setPosts(result);
      setFilteredPosts(result);
      const allSubCategories = result.flatMap(post => post.subCategory || []);
      const uniqueSubCategories = Array.from(new Set(allSubCategories.map(subCat => subCat.title)))
        .map(title => {
          return { title };
        });
      setListsubcategory(uniqueSubCategories);
    };

    fetchData();
  }, []);

  const handleSubcategory = (subcategoryTitle: string) => {
    if (activeSubcategory === subcategoryTitle) {
      // Si el filtro ya está activo, desactívalo
      setFilteredPosts(posts);
      setActiveSubcategory(null);
    } else {
    const filtered = posts.filter(
      (post: any) => post.subCategory && Array.isArray(post.subCategory) && post.subCategory.some((subCat: any) => subCat.title === subcategoryTitle)
    );
    setFilteredPosts(filtered);
    setActiveSubcategory(subcategoryTitle);
  }
  }
  return (
    <section id="Deportes" className="bg-gray-light relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="El Deporte Mas Reciente"
          paragraph="Encuentra las noticias mas recientes de la actualidad en el mundo de los deportes."
          center
        />
        
        {listsubcategory.map((subcategory) => (
  <Button
    onClick={() => handleSubcategory(subcategory.title)}
    key={subcategory.title}
    className={`p-2 m-2 ${activeSubcategory === subcategory.title ? 'bg-gray-200 text-black' : ' text-white'}`}
  >
    {subcategory.title}
  </Button>
))}

        <section className="pb-[20px]">
          <div className="container">
            <div className="-mx-4 justify-center">
              <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
                <ListBlog posts={filteredPosts} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Deportes;