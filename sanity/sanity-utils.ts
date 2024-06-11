import { createClient, groq } from 'next-sanity';
import { projectId, dataset, apiVersion } from '../sanity/env';





const client = createClient({
    dataset,
    projectId,
    apiVersion,
    useCdn: false,
    });


export async function getAllPosts() {
    return client.fetch(
         groq`*[_type == "blog"] | order(publishedAt desc) {
            title,
            body,
            slug,
            publishedAt,
            mainImage,
            excerpt,
            categories[]->{
                title,
                slug
            }
            subCategory[]->{
                title,
                slug
            }
        }`
    );
}



    export async function getAllAuthors() {
        return client.fetch(
             groq`*[_type == "author"] | order(name) {
                name,
                slug,
                image,
                bio,
                video
            
             
            
            
        }`
    
    )
    
    ;
        
    }

    export async function getAllAcademy() {
        return client.fetch(
             groq`*[_type == "academy"] | order(publishedAt desc) {
                title,
                body,
                slug,
                publishedAt,
                mainImage,
                excerpt,
                categories[]->{
                    title,
                    slug
                }
            }`
        );
    }
