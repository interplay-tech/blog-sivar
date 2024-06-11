import Image from "next/image";
import Link from "next/link";
import {urlFor} from "@/sanity/urlfor";


export const RichTextComponents = {
    types:{
        image: ({value}:any) => {
            return (
                <div className="relative w-full max-w-[700px] h-[500px] mx-auto">
                    <Image className="object-contain" src={urlFor(value).url()} alt="Blog Image" layout="fill" />
                </div>
            );
        },
    },

    list: {
        bullet: ({children}:any) => (
             <ul className="list-disc space-y-5 ml-10">{children}</ul>
       ),
       number: ({children}:any) => (
        <ol className="mt-lg list-decimal">{children}</ol>
       ),
    },
    block: {
        h1: ({children}:any) => (
            <h1 className="text-5xl font-bold py-10 text-white">{children}</h1>
        ),
        h2: ({children}:any) => (
            <h2 className="text-4xl font-bold py-10 text-white">{children}</h2>
        ),
        h3: ({children}:any) => (
            <h3 className="text-3xl font-bold py-10 text-white">{children}</h3>
        ),
        h4: ({children}:any) => (
            <h4 className="text-2xl font-bold py-10 text-white">{children}</h4>
        ),
        h5: ({children}:any) => (
            <h5 className="text-xl font-bold py-10 text-white">{children}</h5>
        ),
        h6: ({children}:any) => (
            <h6 className="text-lg font-bold py-10 text-white">{children}</h6>
        ),
        normal: ({children}:any) => (
            <p className="text-white text-lg">{children}</p>
        ),
        li: ({children}:any) => (
            <li className="text-white">{children}</li>
        ),
        
        
        blockquote: ({children}:any) => (
            <blockquote className="border-l-4 border-gray-500 pl-4 py-5 text-white">{children}</blockquote>
        ),
    },
    marks: {
        link: ({children, value}:any) => {
               const rel=!value.href.startsWith("/")
               ? "noreferrer noopener"
               : undefined;
               return (
                <Link href={value.href} rel={rel} className="text-blue-500 underline hover:decoration-black">{children}</Link>
               );
        },
    }
}


